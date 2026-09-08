---
title: "Epic of the Cuban Doppler-9. A radar does not live on hardware alone"
date: "2026-06-04"
slug: "radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar"
sourceId: "27941"
sourceUrl: "https://meteoradares.ladetec.com/2026/06/04/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar/"
sourceHash: "d9e8fd2ea4a22101"
lang: "en"
excerpt: "\"Epic of the Cuban Doppler-9\" reveals the least visible but most decisive secret of the Doppler radar: the software. This chapter explains how the LADETEC group developed the \"glue\" that binds the hardware parts together, becoming one of the few institutions in the world capable of designing the entire e"
translatedFrom: "https://meteoradares.ladetec.com/2026/06/04/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar/"
needsReview: false
---

<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">"The Cuban Doppler Epic–9" reveals the least visible but most decisive secret of the Doppler radar: the software. This chapter explains how the LADETEC group developed the "glue" that binds the hardware parts together, becoming one of the few institutions in the world capable of designing the entire radar software ecosystem: control, acquisition, processing, and display. Meet the epic of VESTA —from VESTA|RDA, created by Marco in the year 2000 (an IoT solution ahead of its time), to the assimilation of the British Cyclops-D processor, the development of VESTA|Cíclope, VESTA|RCP, and the integration of the US NEXRAD's (Next Generation Weather Radar) ORPG (Open Radar Product Generator) software. Discover how the OBS data format and the author's insistence on keeping a single VESTA|Process for both Doppler and non-Doppler radars pushed his programmers —Luisi and Wilfre— to the limits of their abilities.</p>



<!--more-->



<p class="wp-block-paragraph">"A radar doesn't live by hardware alone" delves into the invisible but vital heart of the radar: the software, that "glue" that binds the hardware parts together and makes them work as a coherent system. The chapter argues that, unlike assembling a computer from off-the-shelf components, building a complete weather radar requires mastering an ecosystem of extremely complex applications: radar control, signal acquisition, primary processing (calculating the Doppler moments), secondary processing (generating weather products), and display. The author proudly maintains that there are only as many institutions in the world capable of walking this whole path as fingers on one hand, and that LADETEC —that tiny group of engineers in a colonial city in inland Cuba, an embargoed country— is among that elite. The text reviews the "status quo" before Doppler: VESTA|RDA (control and acquisition) and VESTA|Process (processing and display), created by programmer Marco in 2000 and 1996 respectively, with a client/server and IoT architecture that was six years ahead of radar connectivity. With the arrival of the Cyclops-D Doppler processor, an integration crisis broke out: acquisition had to move out of the RDA and come from the external processor instead, which required creating VESTA|Cíclope (the new acquisition module, assimilated by Luisi) and VESTA|RCP (new control, programmed in Borland Delphi) — two executables in different languages that had to communicate in real time. But the biggest challenge was keeping a single VESTA|Process that could handle both the Doppler data (Z, V, W) from the new radar and the historical and current data from the non-Doppler radars (Z only). Thanks to the OBS file format, designed by Marco in 1996 with a revolutionary flexibility and super-resolution —which allowed storing the variance of the power values, proportional to turbulence—, the author handed Luisi and Wilfre a "mission impossible" that they pulled off successfully. The chapter closes with the integration of the US NEXRAD's ORPG software (VESTA|ORPG) and VESTA|WEBView, which in 2010-2011 brought every Cuban radar tertiary products such as automatic detection of storms, hail, tornadoes, and mesocyclones — proving that Cuban software not only matched but in many respects surpassed that of the world's leaders— though the Doppler story still held many other problems to solve. Told here in the first person.</p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The "glue" that binds the parts together</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Nowadays, with a bit of know-how, any technician can buy the parts and build a computer, then get Windows or grab a free Linux distribution, and that's it — up and running. If he's an entrepreneur, he can set up a little neighborhood stall and sell the clones he builds, which have three main advantages: 1) he builds it with whatever specs the customer wants (advice included), 2) he sells it for less than computers that come under a reputable brand, and 3) he's always there for after-sales service — no need to travel to some distant specialized center. The customer decides: buy it "ready-made" with a big brand's warranty seal, or go with the neighborhood entrepreneur's services — someone familiar he's trusted to buy parts, supplies, and even minor repairs. This is the eternal dilemma: <a href="https://meteoradares.wordpress.com/2024/03/25/fabricar-o-comprar-fabricado/">Build it or buy&nbsp;"built"?</a></p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">It's more or less the same story with radars: some radar engineers can buy the different parts that make up a transmitter, a receiver, and an antenna, and assemble a complete radar for a client. It's public-domain knowledge, no secrets (though it's not exactly for makers and DIY types either). The parameters and performance will simply reflect the design and performance of the purchased parts. However, unlike computers, there's one element that isn't just around the corner: <strong>the software</strong>. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">It's precisely the software that decides who can manufacture a radar and who can only assemble the parts and turn to a third party (or several) to pour on that "glue" that binds the parts together and makes them work. You've got fingers to spare counting how many can do that worldwide. Proudly, <a href="https://meteoradares.wordpress.com/2023/09/26/la-brecha-en-el-muro/">LADETEC</a>, that tiny little band of engineers, tucked away <a href="https://meteoradares.wordpress.com/2025/01/13/ladetec-y-el-camaguey-legendario/">in a colonial city</a> in Cuba's interior — a third-world country, blockaded by the U.S. on top of it — sits in that elite. How we got there is a long story of <a href="https://meteoradares.wordpress.com/2021/04/27/hitos-cubanos-en-la-actividad-de-los-radares-meteorologicos/">successes</a>, <a href="https://metarmaeoradares.wordpress.com/2023/05/20/caminante-no-hay-camino-se-hace-camino-almontar-radares">quite a road traveled</a> — let's get instead to what concerns us here: Doppler and software, since a radar doesn't "live" on hardware alone.</p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">What is weather radar software?</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Well, it turns out to be the same as with hardware. Ask a radar engineer what radar hardware is, and they'll explain transmitters, receivers, waveguides, antennas, power supplies &#8230; in short, it's not ONE uniform THING, it's many things. Software's the same, many parts contributing to a whole. Just as Leonardo-Ichi has been the radar integrating engineer, I've been the software integrating engineer, without being a programmer; but understanding it all well. So then, we're talking about a set of modules or applications, each with its own functions and characteristics. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Let's look at the functions. The software handles acquiring the signals, processing them, converting them into data, packaging it, processing the data (and archiving it), turning it into images, and displaying these images (locally and remotely). On top of that, the software must <a href="https://meteoradares.wordpress.com/2021/04/20/radar-meteorologico-cubano-doppler-automatica-de-control/">control everything on the radar</a> and run all the operations needed to scan the atmosphere under different regimes. Obviously, that's "a lot for one cartridge." These are applications with very different characteristics. If the restless reader wants to dig deeper with examples, read: <a href="https://meteoradares.wordpress.com/2023/05/24/radares-meteorologicos-aspectos-informaticos/">Weather radars: IT&nbsp;aspects</a>.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Status quo before Doppler</mark></strong></h2><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><a href="https://meteoradares.wordpress.com/2023/09/16/hablando-de-monstruos-marco/">Marco</a>, who came to us fresh out of university at just 22 in 1995, was already a super programmer. He took an active part in designing the ELBRUS and FUJI industrial prototypes, and in 2000 he left to do a master's degree and "never got a ticket back." Marco left everything so well built that it's still in use today (I'm writing this in May 2026) in the radars. In 2000 Marco developed a client/server application (VESTA|RDA) that handles total control of the radar, along with the acquisition, processing, packaging, and transmission of the data (an IoT application six years before radars had connectivity and the world started talking about that). On top of that, since 1996 he had developed a desktop application (VESTA|Process) for generating products from the data (which didn't exist yet, not until 1997), building images from it, and displaying them.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">We had perfect functional completeness. Marco was his own integrator, he did both halves himself: he acquired the data and processed it, and everyone was happy. But then it went the way it went with <a href="https://meteoradares.wordpress.com/2026/04/09/oriente-medio-9-el-islam-fe-caligrafia-un-solo-dios-y-muchas-huries-en-el-paraiso/">Mahoma (Muhammad)</a>: once Marco left, "the world" split into "<a href="https://meteoradares.wordpress.com/2026/04/04/oriente-medio-6-la-herida-de-karbala-como-una-disputa-de-hace-1-400-anos-los-sigue-dividiendo/">Sunnis and Shiites</a>." Ugh, there I go rambling off into my Middle East series again.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Life isn't static, you have to keep changing to adapt. Robert took charge of VESTA|RDA and introduced the modifications that kept becoming necessary, but Robert is "a hardware guy." Then came Wilfredito (Wilfredo José Pozas Pérez, electrical engineer), who took over the modifications and additions VESTA|Process needed (and also created others, like VESTA|Distribuidor, VESTA|Mosaico, and many more). From that point on, to keep the project going, I had to become the integrator-mediator myself.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The software problems with the Doppler</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Actually, ever since 1988, when HERMES was built, I was always the executor, the keeper of all the software made for the radar (HERMES, Operador Automático (Automatic Operator), RADEX, ARGOS, and well, later VESTA|Process too). I didn't know enough to have programmed it myself, but I knew enough to make light modifications and to explain it to my successor. That quality, fairly unglamorous (not much to brag about), turned out decisive for what came with the Doppler and, in general, for the continuity of everything we've done in radar.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The radar control side was a settled matter, very well built, and whatever needed introducing or modifying, Robert kept handling it. Still, I was very aware that taking on a Doppler signal processor would require radical changes that only an advanced programmer could pull off. Searching everywhere, and on Marco's suggestion, we found his brother Luisi (Jorge Luis Pérez Saavedra), who was working at the Agriculture Delegation, in a computer networking group. Once the Doppler project went public, a lot of people pitched in — it was a matter of national priority, the Comandante himself had said so on TV — and they lent us Luisi, for so long that Luisi ended up joining our staff for good.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The task was to split off the acquisition system (digitizing the video signal and averaging it), which up to then was built into the VESTA|RDA application along with the radar control. Acquisition would now come from a Doppler signal processor, that is, from outside the RDA. In the end, the Doppler processor (which computes the moments M0, M1, and M2 and outputs Reflectivity, Velocity, and Spectral Width) was the English one, and Luisi adapted it to our radar and our tasks, which were different from the English ones.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">On the other side was Wilfre with a task no less titanic: getting the secondary processing system (VESTA|Process, as it was called until then) to be able to assimilate the data (Z,V,W) from <strong>our </strong>radar and display it the same way it did with the Reflectivity (Z) data that VESTA|RDA calculated. Note, my reader, that I stress the task was to visualize Doppler data (V and W) from <strong>our </strong>radar with VESTA|Process. Marco, in his master's studies, and I, in my internships in Canada, the US, and Italy, had already used VESTA|Process to visualize Doppler and Polarimetric data from <strong>other </strong>radars.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">VESTA|Cyclops (the new acquisition) and VESTA|RCP (the new control)</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Each of the things I describe here deserves a technical post, but here I'll stick to the story. Luisi absorbed the Cyclops-D signal processor software, split off the old acquisition we used to do on the radar (digitizing the video and averaging it) into VESTA|RDA, and put together a new control system (VESTA|RCP). It wasn't a simple matter, because VESTA|RCP still had to keep the user-interface functions for modifying the Doppler acquisition parameters (the English system is rigid, the acquisition parameters — like range size, angular sector width, number of cells — are never changed; on Cyclops-D everything is "welded shut"), and on top of that, the function of packaging the data coming out of VESTA|Cyclops.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A tremendously complex business: two applications (VESTA|Cyclops and VESTA|RCP), two executables (one programmed in Borland C++ and the other in Borland Delphi, i.e. Pascal), running on Windows (luckily XP had come along by then) and talking to each other in real time to guarantee the execution of complete observations of the atmosphere. There was no shortage of practical obstacles Luisi had to overcome; yoking those two beasts to the same plow was a programming feat of the highest caliber. Programming it all from scratch (which I suppose is what Marco would have liked to do) would have been easier, but we didn't have the time.</p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The format dilemma</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Here comes the part where I had to act as referee and dive deep into the essence of VESTA|RDA, VESTA|Cyclops, and VESTA|Process. The processing system (VESTA|Process) had been programmed back in 1996 to assimilate the data files we didn't have yet, and which we only got a year later. The observation format (*.obs) was something Marco and I had worked out based on all the prior legacy I brought with me (from HERMES, from RADEX, and from ARGOS), in which I had extensive experience.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Fortunately, the obs format (from 1996-97) wasn't made the way I originally had in mind. Marco proposed a structure to me that preserved what I wanted (the super resolution) but was far more flexible and thoroughly revolutionary. Fortunately too, I was still set on doing with digital means what the 1983 Turbulence Indicator Device had been.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Marco built me a structure (apart from the super resolution thing) that let me store not only the received power values, but also the variance of those power values (proportional to the turbulence of the meteorological target). That's what saved us for the Doppler. I say it "saved" us, but the problem wasn't so much serious for the new Doppler radar itself as it was for data continuity.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">I wanted something almost impossible: a single VESTA|Process that would ingest, process and display the data from the new Doppler radar (Z, V, W) and also the data (historical and current) from the other radars (Z only). I was handing Luisi and Wilfre a «mission impossible». We carefully designed «on paper» what a Doppler radar obs would look like and worked from there. Luisi to guarantee the data met that new standard, and Wilfre to get VESTA|Process to read it. Me, to check that the two «highways» would finally merge at a single point without cracks. And it wasn't easy. I still owe my readers a post for each of these two «monsters»: Wilfre and Luisi — their contribution was decisive and extraordinary, my admiration for their talent and my gratitude for their effort are eternal.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The other solution, the easy one, was to leave VESTA|Process to process and display only the data from the other radars and make a VESTA|Process-D for the Camagüey radar. God will judge me on Judgment Day and decide whether what I asked of them was right or not. The fact is Wilfre and Luisi pulled off the feat (Marco supported and advised throughout), and today there is a VESTA|Process that ingests data from both types of radars (the 3 Doppler and the 5 non-Doppler) and also from many other types of foreign radars.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Beyond VESTA|Process</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">This topic I have explained in detail in two posts (<a href="https://meteoradares.wordpress.com/2013/04/05/vestaorpg/">VESTA|ORPG</a> and <a href="https://meteoradares.wordpress.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/">Project «Whitney»: assimilating NEXRAD-ORPG in&nbsp;Cuba</a>). In 2009 Wilfredo proposed that we adopt the ORPG software (short for <em>Open Radar Product Generator</em>), which is the software used by the NEXRAD radars (of the U.S. network), and the CODE platform (short for <em>Common Operational Development Environment</em>) had just been created (I believe it came out in 2007) for free and open use.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">I had had that software on paper for several years already, not pirated — it had been sent to me officially, well before it was free and open; but that's another story. I had also seen it in action during my stay in the U.S. I welcomed Wilfre's idea because this software brings not only products like those of VESTA|Process, but tertiary products: software for automatic detection and tracking of storms, hail, tornadoes, mesocyclones and gust fronts.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Since ORPG is only a product generator (with no display capability), Wilfre thought, very rightly, that the products should be displayed in any web browser, and for this he improved his own earlier software, VESTA|WEB, and called it VESTA|WEBView, and it was introduced in all Cuban radars in 2010-2011, ahead of the Camagüey Doppler radar, which wasn't ready until 2012.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The application consisting of adapting our radars' input data to run ORPG, and coupling its output for display through VESTA|WebView, was called VESTA|ORPG. This application also worked successfully with the five Venezuelan radars.</p><hr class="wp-block-separator has-alpha-channel-opacity"/>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">So yes, dear readers, the software side of a modern radar is an extremely complicated business. At one end we have the electrical signals running through the whole analog receiver chain until they start getting digitized at the intermediate frequency; at the other end we have the meteorological interpretation that lives inside the software. The mission is to turn electrical signals (the amplitude and phase of a sine wave) into images that mean something to a meteorologist when they look at them. You can say you've built a Doppler weather radar when the meteorologist looks at those images and draws conclusions to issue a warning for a hazardous phenomenon. Not many can walk that whole path, but at LADETEC we have the know-how, and that's why we built three Doppler radars for the Cuban weather service (Instituto de Meteorologia).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">But calm down, impatient reader, there are still plenty more problems to solve before August 2012.</p>
