---
title: "The Superheterodyne Receiver: From the AM Radio to the Doppler Weather Radar"
date: "2026-06-03"
slug: "el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico"
sourceId: "27896"
sourceUrl: "https://meteoradares.ladetec.com/2026/06/03/el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico/"
sourceHash: "0c8efa0dfa2ec70d"
lang: "en"
excerpt: "Surely most of my readers are left in limbo when they hear that radar receivers are \"superheterodyne.\" Well, it's not some word from another world like \"kryptonite\" (which everyone knows is the rock that comes from the planet Krypton and strips Superman of his superpowers)"
translatedFrom: "https://meteoradares.ladetec.com/2026/06/03/el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico/"
needsReview: true
warnings: ["bloque 4/8: etiquetas alteradas {'em': 2, '/em': 2}", "bloque 5/8: etiquetas alteradas {'em': 1, '/em': 1}"]
---

<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png"><img loading="lazy" decoding="async" width="1251" height="596" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png?w=1024" alt="" class="wp-image-28115" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png 1251w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-300x143.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-1024x488.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-768x366.png 768w" sizes="auto, (max-width: 1251px) 100vw, 1251px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Most of my readers probably go blank when they hear that radar receivers are «superheterodyne». Well, it's not some word from another planet like «kryptonite» (which everyone knows is the rock from the planet Krypton that strips Superman of his superpowers). The word heterodyne comes from Greek: <em>heteros</em> (different) and <em>dynamis</em> (force). In radio frequency, <strong>heterodyne</strong> is the process of combining (beating, in radio engineering; multiplying two sinusoids, in mathematics) two signals of different frequency to obtain new frequencies: the sum and the difference. The prefix <strong>super</strong> (above) indicates that the resulting frequency (the intermediate one, IF) is <em>higher</em> than audio frequencies, which lets it be amplified efficiently and stably. This post is technical in nature, so that those reading my historical series: <a href="https://meteoradares.wordpress.com/2026/05/03/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-4-la-necesidad-los-obstaculos-y-el-desafio-tecnologico/">Cuban Doppler Radar: The Seed, the Fruit, and the Oblivion. 4. The Need, the Obstacles, and the Technological Challenge</a> can understand why we had to go looking for a super-stable heterodyne.</p>



<!--more-->



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Why the superheterodyne was born: the AM radio problem</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">In the 1920s, radio receivers were direct-amplification sets (TRF, tuned radio frequency). Each stage tuned and amplified the very same frequency as the station. The problem: the gain of vacuum-tube amplifiers varied a lot with frequency (at 1600 kHz they amplified less than at 550 kHz), and tuning multiple circuits together was touchy business.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Armstrong's brilliant fix (1918, popularized in the 1930s) was:&nbsp;<strong>always convert the received frequency to a fixed, lower intermediate frequency (IF)</strong>&nbsp;(e.g., 455 kHz). That way, gain and selectivity stay constant no matter which station you've tuned in.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Why radar adopted the superheterodyne too</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A pulse radar needs to detect extremely weak echoes. The superheterodyne delivers:</p>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Stable, high gain</strong>&nbsp;at the IF (up to 100 dB).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Selective filtering</strong>&nbsp;that sets sensitivity and resolution.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Phase detection</strong>: to measure the Doppler effect, the receiver must be able to compare the phase of the received signal against a reference. The superheterodyne makes this possible at the intermediate frequency, which is much lower than the microwave frequency the radar transmits and receives on.</li>
</ul>



<h2 class="wp-block-heading"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color"><strong>Basic block diagram of a superheterodyne radar receiver</strong></mark></h2><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">In the Soviet MRL-5 radars, the heterodyne oscillator at both wavelengths (X-Band, 3.2 cm, and S-Band, 10 cm) was transistorized with a frequency-multiplier-by-4 circuit). In the Japanese RC-32B radars, the heterodyne oscillator was a klystron. The MRL-5 radars' heterodyne was far more stable and durable for being solid-state. Both radars were designs from the late 1960s.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png"><img loading="lazy" decoding="async" width="1024" height="572" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png?w=1024" alt="" class="wp-image-28092" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-300x168.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-768x429.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The local oscillator in non-Doppler radars: typical stability and Automatic Tuning Control (AFC)</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Before anyone cared about measuring the Doppler effect, weather radars generally used transmitters with a <strong>magnetron</strong> output stage — very powerful, simple, and durable, but unstable in frequency (the oscillation frequency drifts from one transmitted pulse to the next). The local oscillator (heterodyne) has to track it to keep the intermediate frequency (IF) at the set value, obviously within the bandwidth of the IF amplifier. For that, an <strong>Automatic Frequency Control</strong> is used, although in reality what's being kept is the <strong>tuning </strong>between the transmitter, which is what decides the radar's frequency (via the magnetron's oscillation frequency), and the receiver that picks it up — but in English the acronym AFC, for Automatic Frequency Control, became the popular term, referring to controlling the frequency of the heterodyne oscillator in the receiver.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png"><img loading="lazy" decoding="async" width="1024" height="572" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png?w=1024" alt="" class="wp-image-28097" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1-300x168.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1-768x429.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<p class="wp-block-paragraph"><strong>How does a typical AFC in a magnetron radar work?</strong></p>



<ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A small sample of the transmitted pulse is taken (of course, the sample duration is the same as that of the transmitted pulse</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">It is mixed with the heterodyne signal to obtain the intermediate frequency (IF).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A&nbsp;<strong>frequency discriminator</strong>&nbsp;(an unbalanced resonant circuit) delivers a null voltage when the IF is exactly the nominal value (e.g., 30 MHz). If the IF drifts, the voltage changes sign and magnitude and shifts the local oscillator's frequency to correct the drift.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A <strong>sample-and-hold</strong> circuit captures that error voltage during the pulse and stores it in a capacitor to hold it for the rest of the repetition period, once there's no more sample from the transmitter, since the transmitted pulse is very brief compared to the period at which it repeats..</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">That voltage is applied to a&nbsp;<strong>voltage-controlled oscillator (VCO)</strong>&nbsp;(the heterodyne), adjusting its frequency so the IF returns to the center of the discriminator.</li>
</ol><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The problem is that the sample is taken over a very short interval (1-4 microseconds, which is how long the transmitter pulse lasts). That sample generates a voltage that controls the frequency of the oscillator (the local oscillator), and it must hold steady for the rest of the period until a new transmitter pulse appears. That period is 1-2 milliseconds.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The <strong>sample-and-hold circuit is analog</strong>, based on the voltage across a capacitor; but the capacitor discharges through leakage and bias currents. The voltage applied to the VCO (local oscillator) therefore <strong>decays</strong> throughout the receiving period, causing the local oscillator frequency to drift over the course of the period (remember, dear reader, that in radar, receive time corresponds to target range). Distant echoes (targets) end up slightly detuned, so the gain in the IF amplifier is worse than it was at the start of the period. This drift (hundreds of Hz, or even kHz) is tolerable for a radar where we only detect target amplitude, but deadly unacceptable for Doppler, because the local oscillator would be handing us a frequency shift that has nothing to do with the Doppler effect we're actually trying to detect.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Typical local oscillator stability in non-Doppler radars</strong><br>In these systems, short-term stability used to be on the order of <strong>10⁻⁵ to 10⁻⁶</strong> (parts per million).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The AFC (Automatic Frequency Control) circuit has to carry out <strong>two different jobs</strong> to accomplish its mission of keeping the local oscillator frequency at exactly X MHz (where X is the IF value we chose for the radar; for the MRL-5M and RC-32B radars, that value is 30 MHz). These jobs are called <strong>search</strong> and <strong>track</strong>, and they pull the AFC circuit's characteristics in opposite directions.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The moment the radar is switched on, the transmitter frequency isn't known beforehand, so the AFC has to start a <strong>search</strong> process — it sweeps the local oscillator across a range of frequencies. The instant that frequency lands exactly X MHz (30, in our case) above the transmitter's, the AFC discriminator outputs zero voltage and <strong>capture</strong> occurs. From then on, the AFC runs in <strong>tracking</strong> mode, keeping the receiver tuned to the transmitter from one period to the next.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The AFC on the Soviet MRL-5M radars was a marvel. No matter how far the magnetron frequency drifted from the local oscillator's, its sweep locked on without a hitch. On the Japanese radars, the sweep range was more limited, and you had to pre-tune it by hand. I loved the MRL-5M's AFC not just for how well it searched and tracked, but because it was a phantastron built with a SINGLE field-effect transistor — shift its operating point and it switched from search to track and back again.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The leap to Doppler: the concept of coherence, and two possible paths</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">To measure particle velocities (on the order of 0.5 to 50 m/s) you need a&nbsp;<strong>coherent</strong> receiver: one able to compare the phase of the received signal against a reference that retains the memory of the transmitted pulse's phase. There are two ways to achieve this:</p><ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Coherent transmitter (klystron, TWT, solid-state):</strong> The transmitter and the local oscillator are derived from one and the same master source (STALO, short for <em>STable LOcal Oscillator</em>, i.e. a super-stable heterodyne). The phase of every pulse is identical and known. It's the cleanest solution, but also the expensive and complex one.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Coherent-on-receive:</strong> You keep using a magnetron (cheap and powerful), but on every pulse you <strong>capture the actual phase the magnetron radiated with</strong> (by sampling the transmitted pulse) and compare it against a stable local oscillator (STALO). A correction circuit (a phase lock loop) adjusts the phase of a coherent oscillator (COHO, short for <em>Coherent Oscillator</em>) that will serve as the reference during that pulse's reception. On the next pulse, the magnetron's phase will be different, but the circuit locks onto the new phase all over again. This way, even though the magnetron is incoherent from pulse to pulse, the receiver behaves as if it weren't. <strong>This is the technique we used in Cuba to convert our radars to Doppler.</strong></li>
</ol>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">So, swapping the magnetron for a klystron isn't mandatory. The road to Doppler runs through achieving&nbsp;<strong>coherence</strong>, and coherent-on-receive is a practical, elegant solution. (In another post we'll get into the phase stability of magnetrons, coaxial magnetrons, klystrons, and solid-state in detail. Here we just want to make one thing clear: the qualitative leap is coherence, not the transmitter type.)</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The STALO: the stable heart of the Doppler radar</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Whether in a fully coherent system or a coherent-on-receive one, you need a local oscillator of very high stability: the&nbsp;<strong>STALO</strong>&nbsp;(<em>Stable Local Oscillator</em>). Its job is to provide a reference frequency against which to measure the magnetron's phase and to mix with the echo to get the IF. The stability required is at least&nbsp;<strong>10⁻⁹ to 10⁻¹⁰</strong>&nbsp;(parts per billion), well above the heterodynes of non-Doppler radars (10⁻⁶). So how do you actually get that kind of stability?</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>The PLL principle: the foundation of every STALO (analog and digital)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Every STALO, whether old-school analog or modern digital, is built around a <strong>Phase Locked Loop</strong> (PLL). A PLL is a feedback circuit that compares the phase and frequency of an output signal (generated by a controlled oscillator) against a very stable reference signal. If there's a difference, the loop automatically corrects the output until both match in frequency and their phase is constant (they're "locked").</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Basic components of a PLL</strong></h3><ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Reference oscillator:</strong> This is the source of stability. Typically a quartz oscillator (TCXO, OCXO) or a GPS-disciplined receiver delivering a low, extremely stable frequency: 5 MHz, 10 MHz, or 100 MHz. The long-term stability of the STALO can never be better than that of this reference.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Controlled oscillator:</strong> Generates the desired output frequency (e.g., 9.4 GHz for X-band). In an analog PLL this is a VCO (voltage-controlled oscillator with a varactor diode). In a digital PLL it can be a DDS (Direct Digital Synthesis) or an NCO (Numerically Controlled Oscillator) combined with an analog PLL.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Frequency divider (÷N):</strong> Brings the (high) output frequency down by dividing it by an integer N, so it becomes comparable to the (low) reference frequency. For example, if the reference is 10 MHz and we want 9.4 GHz, we need to divide 9.4 GHz / 10 MHz = 940. So N = 940.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Phase/frequency detector (PFD):</strong> Compares the reference signal against the divided signal (output/N). It produces a voltage proportional to the phase (and frequency) difference between the two.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Loop filter:</strong> Smooths the error voltage and sets the PLL's dynamic behavior (lock time, noise rejection).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Feedback:</strong> The filtered voltage is applied to the controlled oscillator to correct its frequency until the error reaches zero. In steady state, the output satisfies: <strong>f_output = N × f_reference</strong>.</li>
</ol>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Why does stability come from the quartz or the GPS?</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The formula above shows the output frequency is an exact multiple of the reference frequency. So <strong>the relative stability of the STALO (Δf/f) is the same as that of the reference</strong>, because multiplication neither improves nor worsens fractional stability. If the quartz has a stability of 10⁻⁹, the STALO will have it too. Hence the obsession with using high-quality references: OCXO (10⁻⁹ to 10⁻¹¹), or GPS-disciplined (10⁻¹² to 10⁻¹³).</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Analog PLL vs. digital PLL (frequency synthesizer):</strong></h3>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Analog:</strong> The whole circuit is analog (phase detector with diodes or an analog multiplier, VCO with varactor, divider built from fast digital counters). The loop filter uses discrete components (R, C). Lock-in is continuous. Typical of the earliest STALOs.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Digital:</strong> The phase detector, divider, and filter are implemented digitally (or a DDS replaces the VCO and divider). They're programmed through registers and bring real advantages: sub-hertz resolution, fast switching, low phase noise. <strong>Digital PLLs that generate a programmable output frequency are known as frequency synthesizers.</strong> This is the technology we use in our STALOs.</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>A concrete example:</strong>&nbsp;10 MHz reference (stability 10⁻⁹). We want a STALO for S-band (2.9 GHz). We pick N = 290 (because 10 MHz × 290 = 2.9 GHz). The output frequency will be 2.9 GHz with 10⁻⁹ stability, that is, an absolute drift of ±2.9 GHz × 10⁻⁹ = ±2.9 Hz. That error produces a velocity error Δv ≈ 0.15 m/s (for λ=0.1034 m), perfectly acceptable. With a GPS-disciplined reference (10⁻¹²), the drift is 0.0029 Hz and the velocity error 0.00015 m/s — negligible.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Bottom line of the principle:</strong>&nbsp;the STALO is nothing more than a PLL (phase-locked loop) that multiplies a stable reference frequency (crystal or GPS) up to the desired microwave frequency. The technology can be analog or digital (frequency synthesizer), but the principle is the same. It's crucial to understand this because it demystifies the false dichotomy: both are PLLs, only the implementation changes.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>First generation: analog PLL with VCO and oven crystal (OCXO)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The first STALOs were voltage-controlled oscillators (VCO) locked in an analog loop. The key block was a&nbsp;<strong>reference oscillator of extremely high stability</strong>: a specially cut quartz crystal housed inside an&nbsp;<strong>oven</strong>&nbsp;(OCXO, oven-controlled crystal oscillator). The oven kept the crystal at a constant temperature (50-70 °C), eliminating thermal drift.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The analog PLL compared the phase of the VCO (divided down) with that of the OCXO and fed the result back. The loop would lock, and the output frequency was fixed with the stability of the OCXO (10⁻⁹ to 10⁻¹¹). These units were bulky, drew power (because of the oven), and needed periodic adjustment, but they were the foundation of the first Doppler radars.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Second generation: locking to a GPS reference (10 MHz)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">With high-precision GPS receivers, an extremely stable absolute frequency reference became available: the 10 MHz signal from GPS-disciplined receivers. These contain a quartz oscillator (not necessarily oven-controlled) that is continuously corrected against the satellites, achieving long-term stability of 10⁻¹² to 10⁻¹³.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Locking a PLL to that 10 MHz reference makes it possible to build a compact STALO with no appreciable drift, although many systems still use an internal OCXO disciplined by GPS for better short-term performance. This solution became popular in the 90s-2000s.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Third generation: frequency synthesizers (digital PLLs / DDS)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">By the time we (in Cuba) began our conversions to Doppler, we had already moved forward in digital electronics. We got hold of <strong>digital</strong> STALOs, that is, <strong>frequency synthesizers</strong> (DDS or high-resolution digital PLLs). These devices generate any desired frequency from a stable reference oscillator (OCXO or GPS) using digital techniques: phase accumulator, sine/cosine lookup table, and DAC. However, at the Marshall Radar Observatory, at McGill University in Montreal, they used an analog variant locked to a tamed GPS.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Advantages:</strong></p>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Flexibility: programmable to change frequency quickly.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Stability: inherited from the reference, with no additional drift.</li>



<li>Low phase noise.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Digital control (SPI, I2C), doing away with potentiometers.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Reduced size and power consumption.</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">We used digital STALOs (frequency synthesizers) that let us program the frequency with hertz-level resolution and short-term stability &lt;10⁻¹⁰. It was a qualitative leap: no more drift, ovens, or adjustments to worry about.</p><h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">STALO Stability and Its Impact on Doppler Measurement</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Regardless of the technology (analog or digital synthesizer), the fractional stability of the STALO (stable local oscillator) is that of its reference. The Doppler velocity error is:<math display="block"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mo>⋅</mo><mo stretchy="false">(</mo><mi mathvariant="normal">Δ</mi><mi>f</mi><mi mathvariant="normal">/</mi><mi>f</mi><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac></mrow></semantics></math>Δ<em>v</em>=2<em>c</em>⋅(Δ<em>f</em>/<em>f</em>)​</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">If stability is 10⁻⁸, Δv = 1.5 m/s. Serious meteorological applications need 10⁻⁹ or better (Δv ≤ 0.15 m/s). STALOs with OCXOs (oven-controlled crystal oscillators) reach 10⁻⁹ – 10⁻¹¹; with GPS discipline, 10⁻¹²; digital synthesizers inherit that stability from their reference.</p>



<p class="wp-block-paragraph"><strong>Example by band (with a hypothetical 10 Hz STALO instability, a didactic case):</strong></p>



<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th class="has-text-align-left" data-align="left">Band</th><th class="has-text-align-left" data-align="left">Frequency (MHz)</th><th class="has-text-align-left" data-align="left">λ (cm)</th><th class="has-text-align-left" data-align="left">Velocity error per 10 Hz</th></tr></thead><tbody><tr><td>S</td><td>2900</td><td>10.34</td><td>0.52 m/s</td></tr><tr><td>C</td><td>5600</td><td>5.36</td><td>0.27 m/s</td></tr><tr><td>X</td><td>9400</td><td>3.19</td><td>0.16 m/s</td></tr></tbody></table></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">In reality, a GPS-referenced digital STALO has drift &lt; 0.01 Hz, a negligible error (&lt;0.001 m/s). This is what let our radars, with magnetrons, measure velocities with centimeter-per-second precision.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Conclusion</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The superheterodyne receiver, born for commercial radio, became the backbone of radar. But while an AM receiver tolerates unstable local oscillators, a Doppler radar demands a&nbsp;<strong>STALO</strong>&nbsp;with extreme stability. The old Soviet and Cuban magnetron radars, with their manually-locked AFC, could measure reflectivity and give a vague indication of turbulence, but couldn't measure wind velocity with precision.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Converting them to Doppler didn't require swapping the magnetron for a klystron: it was achieved with&nbsp;<strong>coherence on reception</strong>, capturing the phase of each pulse and using a stable STALO and a phase loop (COHO, coherent oscillator). The key component was the&nbsp;<strong>digital STALO (frequency synthesizer)</strong>&nbsp;which, referenced to GPS or an oven-controlled crystal, gave us the needed stability without analog complications. No more capacitors discharging, ovens failing, or manual tuning. Just program the frequency and let the radar work.</p>



<p class="wp-block-paragraph"><em><strong>Note for the embargo folks</strong>: Nothing you see here is what we use now, this is just "training material," as manufacturers say when they won't hand you the real blueprint. This is only so my learned readers understand the subject.</em></p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png"><img loading="lazy" decoding="async" width="1187" height="679" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png?w=1024" alt="" class="wp-image-28116" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png 1187w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-300x172.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-1024x586.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-768x439.png 768w" sizes="auto, (max-width: 1187px) 100vw, 1187px" /></a></figure><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Well yes, just as someone has a Coca-Cola or smokes a Popular or a Criollo, we mastered the super-stable heterodyne and built three 100% Cuban Doppler radars (like the Popular and the Criollo), in spite of everything, whether anyone likes it or not.</p>
