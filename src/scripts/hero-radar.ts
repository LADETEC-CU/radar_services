// Runtime logic for the Hero radar map (Hero.astro): Leaflet base map themed
// to the site palette, IP geolocation to center on the visitor, RainViewer
// past-frames playback with scrubbable timeline, and the scroll-out
// fade/parallax/pause effect. Styles live in src/styles/hero-radar.css.
import L from "leaflet";

interface TimedLayer extends L.TileLayer {
  _time?: number;
}

interface GeoResult {
  lat: number;
  lon: number;
  label: string;
}

const CFG = {
  ZOOM: 7,
  RADAR_OPACITY: 0.82,
  FRAME_MS: 480,
  PAUSE_LAST_MS: 1500,
  TILE_SIZE: 256,
  COLOR: 2,
  OPTIONS: "1_1",
  FALLBACK: { lat: 39.83, lon: -98.58, label: "—" },
};

const $rh = (id: string) => document.getElementById(id) as HTMLElement;
const pad = (n: number) => String(n).padStart(2, "0");
const fmtTime = (unix: number) => {
  const d = new Date(unix * 1000);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
const prefersReduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

function showNotice() {
  const n = $rh("rvNotice") as HTMLDivElement;
  n.textContent = n.dataset.nodata ?? "";
  n.classList.add("is-on");
}

const map = L.map("rh-map", {
  zoomControl: false,
  attributionControl: true,
  scrollWheelZoom: false,
  center: [CFG.FALLBACK.lat, CFG.FALLBACK.lon],
  zoom: CFG.ZOOM,
});
map.attributionControl.setPrefix(false);

map.createPane("radar");
map.getPane("radar")!.style.zIndex = "350";
map.getPane("radar")!.style.pointerEvents = "none";
map.createPane("labels");
map.getPane("labels")!.style.zIndex = "450";
map.getPane("labels")!.style.pointerEvents = "none";

const attribution =
  '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · ' +
  '© <a href="https://carto.com/attributions">CARTO</a> · ' +
  'Weather data by <a href="https://www.rainviewer.com/">RainViewer</a>';

const BASE_TILES = {
  dark: {
    base: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
    labels: "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png",
  },
  light: {
    base: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
    labels: "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
  },
};

const isSiteDark = () => document.documentElement.classList.contains("dark");

const baseLayer = L.tileLayer(BASE_TILES.dark.base, {
  className: "rh-tile-base",
  subdomains: "abcd",
  maxZoom: 19,
  detectRetina: true,
  attribution,
}).addTo(map);
const labelsLayer = L.tileLayer(BASE_TILES.dark.labels, {
  pane: "labels",
  subdomains: "abcd",
  maxZoom: 19,
  detectRetina: true,
  // Fetch one zoom level down and stretch 2x so city labels render bigger
  // than the base tiles (CartoDB bakes label text into the tile image, so
  // font-size can't be set via CSS).
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);

const rhScope = document.querySelector(".rh-scope") as HTMLElement;
const radarPlayback = {
  exited: false,
  pause: () => {},
  resume: () => {},
};

function applyMapTheme(isDark: boolean) {
  const tiles = isDark ? BASE_TILES.dark : BASE_TILES.light;
  baseLayer.setUrl(tiles.base);
  labelsLayer.setUrl(tiles.labels);
  rhScope.classList.toggle("rh-theme-light", !isDark);
}

applyMapTheme(isSiteDark());

new MutationObserver(() => applyMapTheme(isSiteDark())).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class"],
});

// Scroll-out effect: the map panel fades/parallaxes/pauses on its OWN
// scroll progress, independent of the copy panel. Below 900px the two
// panels are stacked sections (not a shared 100vh row), so the copy panel
// is left alone as a plain scrolling section instead of also fading out —
// tying both to one combined progress used to fade the copy text to
// nothing while it was still mid-scroll, and pause the radar loop before
// the map was even in view.
if (!prefersReduced) {
  const copySection = document.querySelector(".rh-copy") as HTMLElement;
  const mapEl = $rh("rh-map");
  const copyEl = $rh("rhCopyPanel");
  const PARALLAX_FACTOR = 0.35;
  const FADE_SPAN = 0.95; // opacity hits 0 well before the section fully scrolls out
  const EXIT_THRESHOLD = 0.01; // scroll past this and the radar loop/legend/controls stop
  const stackedLayout = window.matchMedia("(max-width: 900px)");
  let ticking = false;

  const scrollProgress = (el: HTMLElement) =>
    Math.min(Math.max(-el.getBoundingClientRect().top / el.offsetHeight, 0), 1);

  const updateHeroScroll = () => {
    copyEl.style.opacity = stackedLayout.matches
      ? ""
      : String((1 - Math.min(scrollProgress(copySection) / FADE_SPAN, 1)) ** 2);

    const scopeHeight = rhScope.offsetHeight;
    const mapProgress = scrollProgress(rhScope);
    const mapFade = Math.min(mapProgress / FADE_SPAN, 1);
    mapEl.style.transform = `translateY(${mapProgress * scopeHeight * PARALLAX_FACTOR}px)`;
    mapEl.style.opacity = String((1 - mapFade) ** 2);

    const exited = mapProgress > EXIT_THRESHOLD;
    if (exited !== radarPlayback.exited) {
      radarPlayback.exited = exited;
      rhScope.classList.toggle("rh-exited", exited);
      if (exited) radarPlayback.pause();
      else radarPlayback.resume();
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeroScroll);
      }
    },
    { passive: true }
  );
  stackedLayout.addEventListener("change", updateHeroScroll);
  updateHeroScroll();
}

async function fetchJSON(url: string, ms = 4000): Promise<unknown> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    if (!r.ok) throw new Error("not ok");
    return await r.json();
  } finally {
    clearTimeout(timer);
  }
}

async function locate(): Promise<GeoResult> {
  try {
    const d = (await fetchJSON("https://ipwho.is/")) as Record<string, unknown>;
    if (d.success !== false && d.latitude != null)
      return {
        lat: +(d.latitude as number),
        lon: +(d.longitude as number),
        label: [d.city, d.country].filter(Boolean).join(", "),
      };
  } catch {
    /* try next */
  }
  try {
    const d = (await fetchJSON("https://ipapi.co/json/")) as Record<string, unknown>;
    if (d.latitude != null)
      return {
        lat: +(d.latitude as number),
        lon: +(d.longitude as number),
        label: [d.city, d.country_name].filter(Boolean).join(", "),
      };
  } catch {
    /* use fallback */
  }
  return { lat: CFG.FALLBACK.lat, lon: CFG.FALLBACK.lon, label: CFG.FALLBACK.label };
}

const radarLayers: TimedLayer[] = [];

async function loadRadar() {
  let data: Record<string, unknown>;
  try {
    data = (await fetchJSON("https://api.rainviewer.com/public/weather-maps.json", 6000)) as Record<
      string,
      unknown
    >;
  } catch {
    showNotice();
    return;
  }

  const host = data.host as string;
  const radarData = data.radar as Record<string, unknown> | undefined;
  const frames = (radarData?.past as Array<{ path: string; time: number }>) ?? [];
  if (!frames.length) {
    showNotice();
    return;
  }

  frames.forEach((f) => {
    const url = `${host}${f.path}/${CFG.TILE_SIZE}/{z}/{x}/{y}/${CFG.COLOR}/${CFG.OPTIONS}.png`;
    const layer = L.tileLayer(url, {
      pane: "radar",
      opacity: 0,
      tileSize: CFG.TILE_SIZE,
      maxNativeZoom: 7,
      maxZoom: 19,
    }) as TimedLayer;
    layer._time = f.time;
    layer.addTo(map);
    radarLayers.push(layer);
  });

  const n = radarLayers.length;
  const track = $rh("rvTrack") as HTMLDivElement;
  track.setAttribute("aria-valuemax", String(n - 1));

  const updateHud = (i: number) => {
    radarLayers.forEach((l, j) => l.setOpacity(j === i ? CFG.RADAR_OPACITY : 0));
    const pct = n > 1 ? (i / (n - 1)) * 100 : 100;
    $rh("rvFill").style.width = `${pct}%`;
    $rh("rvDot").style.left = `${pct}%`;
    $rh("rvClock").textContent = fmtTime(radarLayers[i]._time ?? 0);
    $rh("rvLive").classList.toggle("is-on", i === n - 1);
    track.setAttribute("aria-valuenow", String(i));
  };

  let idx = n - 1;
  updateHud(idx);

  const controls = $rh("rvControls");
  if (prefersReduced || n < 2) {
    controls.style.display = "none";
    return;
  }

  let paused = false;
  let speed = 0.5;
  let timer: number | undefined;

  const nextDelay = () => (idx === n - 1 ? CFG.PAUSE_LAST_MS : CFG.FRAME_MS) / speed;

  const scheduleTick = (delay: number) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(tick, delay);
  };

  const tick = () => {
    if (paused) return;
    idx = (idx + 1) % n;
    updateHud(idx);
    scheduleTick(nextDelay());
  };

  scheduleTick(900);

  radarPlayback.pause = () => window.clearTimeout(timer);
  radarPlayback.resume = () => {
    if (!paused && !radarPlayback.exited) scheduleTick(nextDelay());
  };

  const pauseBtn = $rh("rvPauseBtn") as HTMLButtonElement;
  pauseBtn.addEventListener("click", () => {
    paused = !paused;
    pauseBtn.classList.toggle("is-active", paused);
    pauseBtn.setAttribute("aria-pressed", String(paused));
    pauseBtn.setAttribute("aria-label", paused ? pauseBtn.dataset.play! : pauseBtn.dataset.pause!);
    if (paused) window.clearTimeout(timer);
    else scheduleTick(nextDelay());
  });

  const speedBtns = document.querySelectorAll<HTMLButtonElement>("#rvSpeedGroup [data-speed]");
  speedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      speed = Number(btn.dataset.speed);
      speedBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      if (!paused) scheduleTick(nextDelay());
    });
  });

  // Scrub: drag/click/keyboard to seek through the timeline
  let scrubbing = false;
  const seekToClientX = (clientX: number) => {
    const rect = track.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    idx = Math.round(pct * (n - 1));
    updateHud(idx);
  };
  const seekBy = (delta: number) => {
    idx = Math.min(n - 1, Math.max(0, idx + delta));
    updateHud(idx);
  };

  track.addEventListener("pointerdown", (e) => {
    scrubbing = true;
    track.setPointerCapture(e.pointerId);
    window.clearTimeout(timer);
    seekToClientX(e.clientX);
  });
  track.addEventListener("pointermove", (e) => {
    if (scrubbing) seekToClientX(e.clientX);
  });
  const endScrub = () => {
    if (!scrubbing) return;
    scrubbing = false;
    if (!paused) scheduleTick(nextDelay());
  };
  track.addEventListener("pointerup", endScrub);
  track.addEventListener("pointercancel", endScrub);
  track.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    window.clearTimeout(timer);
    seekBy(e.key === "ArrowRight" ? 1 : -1);
    if (!paused) scheduleTick(nextDelay());
  });
}

loadRadar();
const loc = await locate();
map.setView([loc.lat, loc.lon], CFG.ZOOM, { animate: true });
L.marker([loc.lat, loc.lon], {
  icon: L.divIcon({
    className: "rh-user-pin",
    html: '<span class="rh-user-pin__ring"></span><span class="rh-user-pin__core"></span>',
    iconSize: [9, 9],
  }),
  keyboard: false,
  interactive: false,
}).addTo(map);
$rh("rvPlace").textContent = loc.label || "—";

// Nav menu, language-switch scroll-spy and theme/lang controls live in
// SiteControls.astro (rendered from Layout on every route).
