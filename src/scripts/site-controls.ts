// Runtime logic for the site-wide control capsule (SiteControls.astro):
// language-switch scroll-spy, nav dropdown open/close, and the smart
// hide-on-scroll behavior. Styles live in src/styles/site-controls.css.

// Language switcher: keep it pointed at the section currently in view, so
// switching locale lands you in the same place instead of scrolling to top.
// Anchors carry the locale home path ("/#hardware"), so match on link.hash
// and only spy links that target the current page.
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  const baseHref = langToggle.getAttribute("href") ?? "";
  const samePageAnchors = [...document.querySelectorAll<HTMLAnchorElement>("a[href]")].filter(
    (a) => a.hash && a.origin === location.origin && a.pathname === location.pathname
  );
  const anchorIds = new Set(samePageAnchors.map((a) => a.hash.slice(1)));
  const menuLinks = [...document.querySelectorAll<HTMLAnchorElement>("#hero-menu-panel a")].filter(
    (a) => a.hash && a.pathname === location.pathname
  );
  const visible = new Map<string, number>();
  const apply = () => {
    let activeId = "";
    let best = 0;
    for (const [id, ratio] of visible) {
      if (ratio > best) {
        best = ratio;
        activeId = id;
      }
    }
    langToggle.setAttribute("href", baseHref + (activeId ? "#" + activeId : ""));
    menuLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === "#" + activeId);
    });
  };
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
        else visible.delete(e.target.id);
      }
      apply();
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  document.querySelectorAll("main [id]").forEach((el) => {
    if (anchorIds.has(el.id)) spy.observe(el);
  });
  // The footer lives outside <main>; track it too so switching locale from
  // the footer keeps you on the footer instead of jumping to a section.
  const footerEl = document.querySelector("footer[id]");
  if (footerEl) spy.observe(footerEl);
}

// Nav menu: click to open/close, close on outside click, Escape, or link pick.
const heroMenu = document.getElementById("hero-menu");
const heroMenuToggle = document.getElementById("hero-menu-toggle");
if (heroMenu && heroMenuToggle) {
  const closeMenu = () => {
    heroMenu.classList.remove("rh-menu-open");
    heroMenuToggle.setAttribute("aria-expanded", "false");
  };
  heroMenuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = heroMenu.classList.toggle("rh-menu-open");
    heroMenuToggle.setAttribute("aria-expanded", String(open));
  });
  heroMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => {
    if (!heroMenu.contains(e.target as Node)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// Smart hide: capsule slides away on scroll down, returns on any scroll up.
const controls = document.querySelector<HTMLElement>(".rh-controls");
if (controls) {
  // Below this the bar never hides — avoids a pointless hide right as the
  // page starts moving, and guarantees it's visible at the top.
  const REVEAL_ZONE = 80;
  // Ignore micro-deltas (trackpad inertia, iOS rubber-banding jitter).
  const MIN_DELTA = 6;
  let lastY = window.scrollY;
  let ticking = false;
  const onScroll = () => {
    // Clamp: iOS overscroll reports negative Y, which would read as "up".
    const y = Math.max(0, window.scrollY);
    const delta = y - lastY;
    if (Math.abs(delta) < MIN_DELTA) {
      ticking = false;
      return;
    }
    // Never hide while the dropdown is open — the user is mid-interaction
    // and the panel would fly off with the bar.
    const menuOpen = heroMenu?.classList.contains("rh-menu-open");
    const hide = delta > 0 && y > REVEAL_ZONE && !menuOpen;
    controls.classList.toggle("rh-controls--nav-hidden", hide);
    lastY = y;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  // Keyboard users: tabbing into the (hidden) bar reveals it.
  controls.addEventListener("focusin", () => {
    controls.classList.remove("rh-controls--nav-hidden");
  });
}
