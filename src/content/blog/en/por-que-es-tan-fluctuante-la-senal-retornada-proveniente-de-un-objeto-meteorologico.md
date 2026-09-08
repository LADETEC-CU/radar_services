---
title: "Why Is the Return Signal from a Weather Target So Fluctuating?"
date: "2026-03-01"
slug: "por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico"
sourceId: "24244"
sourceUrl: "https://meteoradares.ladetec.com/2026/03/01/por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico/"
sourceHash: "40618d9d51428363"
lang: "en"
excerpt: "The signal on the oscilloscope reveals not only the intensity of a storm, but its internal turbulence. In this article I explain why the fluctuation of weather echoes is not noise, but the key to estimating reflectivity, velocity, and hazard level through Doppler processing, and why"
translatedFrom: "https://meteoradares.ladetec.com/2026/03/01/por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico/"
needsReview: false
---

<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg"><img loading="lazy" decoding="async" width="1024" height="495" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg?w=1024" alt="Orlando (a rookie engineer) getting an explanation from José Mario (the seasoned chief of the MRL-5 radar in Camagüey) about the fluctuating nature of weather echoes, back around 1983. Orlando points at echoes on the PPI while analyzing signals on the A-Scope." class="wp-image-24251" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983-300x145.jpg 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983-768x371.jpg 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.098), 15px);line-height:1.6"><strong><em>The signal on the oscilloscope reveals not only a storm's intensity, but its internal turbulence. In this article I explain why the fluctuation of weather echoes is not noise, but the key to estimating reflectivity, velocity, and hazard level through Doppler processing, and why automating this task has taken me<a href="https://meteoradares.wordpress.com/2021/01/25/radar-meteorologico-cubano-doppler-estrategia-y-tactica/"> a whole lifetime</a></em></strong>. <strong><em>Processing <a href="https://meteoradares.wordpress.com/2026/02/27/senales-en-los-radares-meteorologicos/">signals</a> in weather radars is my passion.</em></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">From my early days as an engineer on the MRL-5 radar in Camagüey (the first of its kind in Cuba), I found it fascinating to see how informative the signals on the oscilloscope (A-Scope) were, showing amplitude as a function of echo range (return time). On one hand, the amplitude shows you the intensity of the weather target, and on the other, the degree of signal fluctuation tells you how "turbulent" it is.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">To a radar expert's eye this information is highly relevant, since on the PPI display you can cross-check the echo's spatial dimensions and its position relative to the radar. In those early years I thought it would be simple to automate that detection and estimation of the echo's characteristics in order to identify its hazard level.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">I was wrong—this task has taken my entire working life and I'm still deep in it. In this post I'll try to explain simply why it isn't a simple task. For that we need to dive into the nature of the signals returned from weather targets (clouds, rain, hail, ice, etc.).</p>



<!--more-->



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Point targets and distributed targets</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The first thing one notices on the oscilloscope is that there are echoes with very little fluctuation, coming from fixed ground objects (TV and radio towers, elevated water tanks, tall buildings, mountains and hills) and moving objects (planes and ships) that, even though they move fast, their signal appears on the oscilloscope, at each instant, as showing little fluctuation from one transmitted pulse to the next. This type of target we usually call <strong>Point Targets</strong>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">On the other hand we have the signals returned from weather targets. These appear very "noisy" because the human eye's viewing mechanism and the image persistence on the oscilloscope let us see at once the returned amplitude of several transmitted radar pulses, that is, of several realizations of the video signal at the receiver output—and that's why we perceive them as highly fluctuating.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The fluctuation of a weather target's signal is not a radar malfunction, but a fundamental physical property of the target itself. While a point target (such as an aircraft or a television tower) has a more or less fixed shape and position during illumination by the radar beam, a weather target is a collection of countless particles (water droplets, ice crystals, snowflakes, hailstones) in constant motion. Unlike point targets, we call these <strong>Distributed Targets</strong>, which arise from meteorological objects. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">It's worth noting that the fundamental difference between point targets and distributed targets lies in the relationship between the target's size and the volume illuminated by the radar. The illuminated volume is called the resolution volume, and its dimensions are given in two directions. In the axial direction, it is given by the range extent of the transmitted pulse. In the tangential direction around the axial axis, it is given by the beamwidth of the radar antenna. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">In the resolution volume illuminated by the radar there is generally <strong>a single point target</strong> (<em>if there is more than one within the same resolution volume, their echoes add together and the radar perceives them as a single target</em>), and this target does not fill the radiolocation volume.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">For a <strong>distributed target</strong>, on the other hand, the resolution volume illuminated by the radar contains millions of individual particles that fill the volume. Distributed targets tend to span several kilometers and are far larger than this volume.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The fluctuation we observe is the result of constructive and destructive interference among the waves reflected by each of these particles. For a radar expert, this is modeled statistically and has direct implications for how we process the signal and estimate variables such as reflectivity or velocity. </p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Main Causes</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Here are the main causes, explained from the standpoint of the physical phenomenon and its impact on the received signal.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>1. The Relative Motion of the Particles (The Fundamental Cause)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">This is the dominant mechanism. Picture the radar's resolution volume (a "pulse" of energy at a specific direction and range). Within that volume there are thousands or millions of hydrometeors.</p>



<ul class="wp-block-list">
<li><strong>Differential Motion:</strong>&nbsp;Each particle moves at a slightly different velocity due to turbulence, wind shear, or simply its different size and weight (terminal fall velocity). Some move toward the radar, others away from it, some faster, some slower.</li>



<li><strong>The Doppler Effect:</strong>&nbsp;This differential motion causes each particle to reflect the wave with a slightly <em>different</em> Doppler shift. The total signal reaching the radar is the <strong>phasor sum</strong> (vector sum) of all these individual contributions.</li>



<li><strong>Interference:</strong>&nbsp;As the particles move, their relative phases constantly change. At one instant, many waves may add in phase (constructive interference) and the total signal is large. An instant later, the phases have scrambled and may partially cancel out (destructive interference), making the total signal small.</li>
</ul><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>In short:</strong>&nbsp;What we perceive as amplitude (power) fluctuation of the signal is the direct consequence of individual "echoes" adding and subtracting in a variable way over time. The period of this fluctuation is inversely related to the width of the Doppler spectrum (the spread of particle velocities).</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>2. Size, Shape, and Dielectric Constant</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Not all particles are alike, and this introduces another layer of variability, especially from one pulse to the next if the illuminated volume changes. This characteristic becomes evident when the weather radar has <a href="https://meteoradares.wordpress.com/2025/08/03/doble-polarizacion-ventajas-y-desventajas/">polarimetric capability</a>.</p>



<ul class="wp-block-list">
<li><strong>Size (Rayleigh vs. Mie effect):</strong>&nbsp;The amount of energy backscattered by a particle is extremely sensitive to its size relative to the radar wavelength. A small variation in the size of the largest drops within the volume can cause a large variation in the total reflected power. The fluctuation isn't only due to phase, but also to the changing "brightness" of the scatterers.</li>



<li><strong>Shape and Orientation:</strong>&nbsp;Large drops aren't spherical — they flatten out. Ice crystals have complex shapes. As they fall, they can rotate or oscillate. A change in the orientation of a flat ice crystal can drastically change its radar cross section (RCS), introducing fluctuations in the signal.</li>



<li><strong>Phase Changes (Water/Ice):</strong>&nbsp;The dielectric constant of liquid water is much higher than that of ice. If the resolution volume contains a mix and particles are changing phase (melting or freezing), reflectivity can fluctuate significantly.</li>
</ul>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>3. The Particles' "Lifetime"</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Even though it may look stable, the composition of the weather volume is constantly changing due to <strong>Microphysical Processes</strong>. In these processes particles collide and merge (coalescence), break apart from turbulence, evaporate, or sublimate. A hydrometeor isn't an eternal entity within the resolution volume. When a large drop breaks into several smaller ones, or when two collide and form a bigger one, the radar signature of the ensemble changes abruptly, contributing to the fluctuation.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">On the other hand, the volume's composition also varies because the antenna is moving, so some particles leave the volume and new ones enter, changing the volume's composition and contributing to the signal fluctuation.</p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Consequences of Fluctuation for Signal Processing</mark></strong></h2>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>1. Decorrelation Time</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The time it takes for the signal to fluctuate until it becomes statistically independent of its previous value is called the&nbsp;<strong>decorrelation time</strong>. For meteorology, this time is very short, typically on the order of&nbsp;<strong>milliseconds</strong>&nbsp;(due to particle motion). This is crucial because:</p><ul class="wp-block-list">
<li>If we average over a time longer than the decorrelation time, the integration&nbsp;<strong>will not be coherent</strong>&nbsp;(the phase is no longer useful), and instead we move to a&nbsp;<strong>non-coherent</strong>&nbsp;integration (of power or amplitude). This is exactly what is done in weather radars to estimate reflectivity (Z) accurately.</li>



<li>The famous&nbsp;<strong>Doppler filter</strong>&nbsp;(Doppler processing) is used to estimate the mean velocity and the spectrum width (the&nbsp;<em>variance</em>&nbsp;of velocities), which is a direct measure of turbulence (although in certain cases shear also produces broadening of the velocity spectrum) and is related to this fluctuation.</li>
</ul>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>2. Number of Independent Samples</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">To get a good estimate of the mean power (reflectivity), we need to average a sufficient number of&nbsp;<em>independent</em>&nbsp;samples (separated in time beyond the decorrelation time). If the decorrelation time is 10 ms, and we send a pulse every 1 ms, consecutive pulses will be correlated. We'll need to wait at least 10 pulses to get a truly independent sample. That's why weather radars sometimes use lower pulse repetition frequencies (PRF) or process blocks of pulses to ensure statistical independence.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>3. Equivalent Number of Independent Samples</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">In operational practice, it isn't possible to take fully independent samples because the antenna is moving, so we need to work out, from the <em>N</em> samples we do take, what effect this has on the parameter estimation. For this we use the <strong>Equivalent Number of Independent Samples</strong> (commonly denoted <math><semantics><mrow><mi>M</mi></mrow></semantics></math> or <math><semantics><mrow><mi>I</mi></mrow></semantics></math>), a fundamental concept in weather radar signal processing. It defines how many statistically independent samples can be obtained from a given data set, accounting for the temporal correlation inherent to the signal due to the motion of the hydrometeors.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Given a sequence of <math><semantics><mrow><mi>N</mi></mrow></semantics></math> samples of the complex (I/Q) signal from a weather target, the equivalent number of independent samples <math><semantics><mrow><mi>M</mi></mrow></semantics></math> is the number of samples that, if fully independent, would give the same variance in the estimate of a parameter (for example, mean power) as the <math><semantics><mrow><mi>N</mi></mrow></semantics></math> correlated samples actually available.</p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Conclusion</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The fluctuation of the weather signal is an&nbsp;<strong>intrinsic and essential property</strong>&nbsp;of the target. It's not unwanted noise we want to eliminate entirely, but rather a&nbsp;<strong>signal carrying information</strong>&nbsp;about the internal dynamics of the storm.</p>



<ul class="wp-block-list">
<li>The&nbsp;<strong>phase change</strong>&nbsp;due to differential motion gives us information about&nbsp;<strong>turbulence</strong>&nbsp;(Doppler spectrum broadening).</li>



<li>The&nbsp;<strong>amplitude change</strong>&nbsp;due to the distribution of sizes and shapes gives us information about&nbsp;<strong>microphysics</strong>&nbsp;(hydrometeor type, precipitation intensity).</li>
</ul><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The art of designing the <a href="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/">weather radar processor</a> consists of <strong>averaging enough to get a stable estimate of reflectivity (Z), while preserving the fluctuation information needed to extract velocity and turbulence (Doppler power spectrum)</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<figure class="wp-block-image aligncenter size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png"><img loading="lazy" decoding="async" width="314" height="305" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png?w=314" alt="Dr. Orlando L. Rodríguez González, expert in weather radar signal processing." class="wp-image-24285" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png 314w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3-300x291.png 300w" sizes="auto, (max-width: 314px) 100vw, 314px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">The purpose of this post is to give a brief introduction to such a complex topic. If it caught your interest and you want to go deeper — whether out of curiosity or professional need — I'll be glad to share more. You can reach out to request a course or training, or just to talk radar. In the meantime, I invite you to read <a href="https://www.researchgate.net/publication/297702582_Optimizacion_del_Procesamiento_de_Senales_de_Video_en_el_radar_MRL-5">my doctoral thesis</a>, where I develop these concepts with real examples from the MRL-5. And if you also feel like learning about <a href="https://meteoradares.wordpress.com/2022/01/15/mas-sabe-el-diablo-por-viejo-que-por-doctor/">the twists and turns of how I got my doctorate</a>… that's in there too.» </p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png"><img loading="lazy" decoding="async" width="975" height="391" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png?w=975" alt="Cover of the Thesis submitted for the degree of Doctor of Technical Sciences, titled Optimization of Video Signal Processing in MRL-5 Radars" class="wp-image-24282" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png 975w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1-300x120.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1-768x308.png 768w" sizes="auto, (max-width: 975px) 100vw, 975px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"></p>
