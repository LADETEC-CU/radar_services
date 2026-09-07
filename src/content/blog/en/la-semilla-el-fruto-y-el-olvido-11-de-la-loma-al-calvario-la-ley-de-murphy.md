---
title: "Epic of the Cuban Doppler-11: From the Hill to Calvary with Murphy's Law"
date: "2026-06-18"
slug: "la-semilla-el-fruto-y-el-olvido-11-de-la-loma-al-calvario-la-ley-de-murphy"
sourceId: "28546"
sourceUrl: "https://meteoradares.ladetec.com/2026/06/18/la-semilla-el-fruto-y-el-olvido-11-de-la-loma-al-calvario-la-ley-de-murphy/"
sourceHash: "51b4131b92077cc6"
lang: "en"
excerpt: "\"Epic of the Cuban Doppler-11\" recounts the project's dramatic final stretch: commissioning the Doppler radar at its new site, facing Murphy's Law in all its glory. This chapter covers the legal battle against the airport's Control Tower over alleged radiation, the rul—\n\n[Note: source text truncated mid-word (\"el fal\"). Rendered as likely start of \"el fallo\" (the ruling/verdict), inferred from legal-battle context — flagged as inference, not fact. Provide full sentence to confirm.]"
translatedFrom: "https://meteoradares.ladetec.com/2026/06/18/la-semilla-el-fruto-y-el-olvido-11-de-la-loma-al-calvario-la-ley-de-murphy/"
needsReview: true
warnings: ["bloque 4/6: etiquetas alteradas {'strong': 1, '/strong': 1}"]
---

<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">"Epopeya del Doppler Cubano-11" (Epic of the Cuban Doppler-11) narrates the dramatic final stretch of the project: commissioning the Doppler radar at its new site, facing Murphy's Law in all its glory. This chapter recounts the legal battle against the airport's Control Tower over alleged radiation, the unexpected failure of the distributed-control USB modules (which forced a retreat to centralized boards), the intricacies of the VESTA|RCP and VESTA|Cíclope software, and the brilliant IT solution that made it possible to run NEXRAD-ORPG centrally for all the radars. Find out how the LADETEC team overcame every obstacle until the RD-200SX —so named by Leonardo-Ichi— began its operational life on August 13, 2012, debuting with Tropical Storm Isaac and getting its baptism by fire during Hurricane Irma, thus fulfilling the mission entrusted by Fidel Castro.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);">"Epopeya del Doppler Cubano-11" plunges the reader into the most agonizing stretch of the project, where Murphy's Law seemed to have joined forces with the Blockade to keep the Doppler radar from being finished. The chapter opens with the radar's move to its new tower at the Camagüey Meteorological Center (the "Calvario" facing the old "Loma de la Mula"), and the start of the commissioning work as if assembling a puzzle piece by piece —circuit by circuit, simulating signals, putting together larger modules. But no sooner had Leonardo (Ichi) switched on the S-band transmitter than the first low blow arrived: a Control Tower worker complained that they were being "cooked with radiation," forcing the radar to shut down until the author, armed with calculations and Soviet standards (the strictest in the world), proved there was no danger. Not satisfied, they reported them to RadioCuba for interfering with the airport's communications; RadioCuba took measurements and ruled that the radar was radiating "on a spectrum that looks straight out of a manual," giving the Doppler its definitive green light. But misfortune didn't stop there: the distributed-control USB modules, which had worked perfectly at Punta del Este, collapsed under the noise from the Camagüey transmitter, forcing a step back to centralized boards and a mad scramble to rewire everything. Meanwhile, the software had its own ordeal: Luisi was wrestling with VESTA|RCP and data acquisition, Wilfre with secondary processing, and the handoff between acquisition and processing turned out to be as delicate as "the little Casa Blanca ferry docking." The chapter closes by describing the IT infrastructure that Albio and his team rolled out: a solid network that let the OBS files (ultra-compressed) travel from the radars to central servers, where eight instances of NEXRAD-ORPG ran simultaneously on CentOS servers, generating tertiary products (storm detection, mesocyclones, tornadoes, downbursts, hail) that could be viewed in any web browser via VESTA|WEBView. The result was a "monster" of electrical, electronic, software, IoT, and Industry 4.0 solutions that, against every bad omen and evil eye, began its operational life on August 13, 2012 —a date the reader will recognize as the birthday of the man who had commissioned the mission— christened by Leonardo as the RD-200SX (Doppler Radar, dual S- and X-band wavelength). It debuted with Tropical Storm Isaac and had its baptism by fire with Hurricane Irma, proving that, despite 2,882 sleepless nights, the Commander in Chief's mission had been fulfilled —though the story doesn't end here, since the epic of replicating this success at other radars still lay ahead.</p>



<!--more-->



<p class="wp-block-paragraph" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);line-height:1.6">Many people unfamiliar with the topography of <a href="https://meteoradares.wordpress.com/2026/05/06/oriente-medio-28-jerusalen-ano-cero/">Jerusalem</a> think the Via Crucis (like <a href="https://meteoradares.wordpress.com/2024/08/21/el-viacrucis-de-los-doctores/">the one the doctors went through</a> at the Camagüey Meteorological Center) went from a low place to a high one (Calvary Hill), but that's not how it was. The Antonia Fortress/Praetorium was a high place (like Loma de la Mula) and the Via Crucis ended at Calvary, a little skull-shaped rise (like the radar tower downtown). Well, let's set the biblical matters aside (I always get carried away with nonsense and wander off) and get back to the radar, which had already been set on its tower as if it were a water tank (which was that tower's original purpose). All that was left was to put the pieces together, like a Lego set — see how easy that is.</p><p class="wp-block-paragraph" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);line-height:1.6">Everything has a God, whatever the religion. The <a href="https://meteoradares.wordpress.com/2020/03/17/bloqueo/">Bloqueo</a> (the US embargo on Cuba) has one too. Yes, there are perverse gods. This God of the Bloqueo got very upset because, even though from the very beginning, in the TV appearance, the challenge was made quite public, he did everything he could to stop it and failed. The God of the Bloqueo was made a fool of because we managed to buy every critical component, however jealously guarded and pursued. This was his last hope, because as for whether we could design the radar ourselves or not, the God of the Bloqueo already knew that battle was lost (we already had a whole <a href="https://meteoradares.ladetec.com/2021/04/27/hitos-cubanos-en-la-actividad-de-los-radares-meteorologicos/" title="">track record</a> behind us).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);line-height:1.6">So this God resorted to low blows: he invoked Murphy's Law (and all its kin), ruled over by the God of Unforeseen Mishaps. Judge for yourself. We were expecting technical and logistical difficulties, we had analyzed them beforehand and had answers ready, <a href="https://meteoradares.ladetec.com/2023/05/20/caminante-no-hay-camino-se-hace-camino-almontar-radares/" title="">we knew how to act</a>. However, there were many others, unexpected ones &#8230;</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Montagues versus Capulets. The legal fight</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);line-height:1.6">By this year, 2012, we were already a very experienced team. Everything I had learned from my Soviet advisors and from my internships abroad I had passed on to my engineers at LADETEC, and from there we developed <a href="https://meteoradares.wordpress.com/2020/03/17/bloqueo/">our own methods</a>, validated by practice. We tuned things up as if we were assembling a puzzle piece by piece. We built each independent circuit (always documenting very carefully how each module interacted with the others) and simulated the external input/output signals, then went on assembling larger modules. We did the same with the software. This way we tested many pieces at once. But &#8230;</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">As soon as Leonardo (Ichi) put together the S-band transmitter (10 cm wavelength), the first surprise hit us (a blow below the belt). The CITMA (Ministry of Science, Technology and Environment) delegate, José Castelló, called me to say —Orlando, the radar has to be shut down. A worker from the Control Tower filed a complaint with the Provincial Center of Hygiene and Epidemiology. He said you're "cooking" them with the radar's radiation. Being the amateur lawyer that I am, I told him —They have no right to stop us unless they prove we're violating the standards. Castelló told me —You may be right; but we have to stop until this gets cleared up. In Cuba we take people's health seriously.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Well, I asked the management of the Camagüey airport to hear me out, and I prepared a presentation. It wasn't the first time I'd faced this problem. I did all the calculations and showed them a diagram of the power density of the microwave flux (at both wavelengths, obviously in X-band nobody was worried) in the direction of the tower &#8230; in great detail, I explained the Soviet standard, the strictest in the world, and how it wouldn't affect them. Nothing to worry about, but the complainant was basing his claim on the fact that on his little Medium Wave (AM) radio he could hear the passing of the main and side lobes, and he drew his own conclusions: it's frying us. I won't drag this out, I already told it in full detail in a post (<a href="https://meteoradares.wordpress.com/2025/01/14/torre-control-vs-radar-doppler/">Control Tower vs. Doppler Radar</a>).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The discussion got heated; but practice, as Marx said, is the criterion of truth: we measured, and we won (the best experts from Havana had come, from several institutions, MINFAR, MININT, Hygiene and Epidemiology, CITMA, MINCOM). </p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Not satisfied with the outcome, they then reported us to RadioCuba for interfering with communications at the airport. This time it was the airport authorities who filed the complaint, obviously egged on by that same disgruntled, never-satisfied man.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">RadioCuba took its measurements, and we won again. They told the airport people — quiet down, you two, these guys are radiating right inside their allotted spectrum, looks like it came straight out of a manual. Two-nil. The Doppler got its green light. Funniest part is this very radar had already sat there from 1981 to 1987 and nobody ever worried about it.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Time wasted for nothing; but we got past the obstacle. A few years later, a student doing an environmental master's at InSTEC wrote a thesis (one she could easily have defended as a doctorate) laying out all the legal grounds and the environmental methodologies for measurement and adaptation — not just for the Camagüey radar; far more complete measurements were taken across the radar's whole surrounding area (population included) and &#8230; full stop.</p>



<h2 class="wp-block-heading" style="font-size:clamp(14.642px, 0.915rem + ((1vw - 3.2px) * 0.721), 22px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The Treacherous Noises</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Ever since the <a href="https://meteoradares.wordpress.com/2026/05/29/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-8-per-aspera-ad-astra-o-cuando-el-mambo-se-pone-duro/">fight against lightning strikes in 2009</a>, since the automation had gotten fried on four radars, we had decided to leap from centralized automation to distributed control. Basically there were two options on the table: MODBUS RTU modules and USB modules. We analyzed and analyzed and &#8230; got it wrong, yes, we went with the flimsy choice (in this case). We bought USB modules for the Punta del Este radar and for the future Camagüey Doppler radar.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">The Punta del Este automation went in right away and has run successfully for many years. Camagüey's stayed in storage until commissioning at Camagüey, by then almost June 2012. And lo and behold, «one thing is guitar, another is violin».</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">What had worked so well at Punta del Este — the moment we started transmitting with the Camagüey radar's transmitters, a ferocious noise would freeze up the control and the computer couldn't do a thing with the distributed modules. The explanation deserves its own technical post; but here's the short version. The Punta del Este radar only ran in Long Pulse mode, with a pulse repetition frequency under 200 Hz (to reach over 500 km of range). On the Camagüey radar, Long Pulse mode (2 microseconds), as on the MRL-5 units, used 250 Hz as its repetition frequency. Short Pulse mode (modified to 0.8 microseconds) used a 1000 Hz repetition frequency (Doppler mode). But nothing — not even in Long Pulse mode would the USB work.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Baffling, but our <a href="https://meteoradares.wordpress.com/2025/01/04/modus-operandi-innovacion-y-mas-innovacion/">modus operandi</a> was always to solve any problem with innovative decisions, and by then we had plenty of practice at it. The fix was retro, a step backward — we went back to the centralized boards and &#8230;rewired everything in a rush. Spoiler: today we have distributed automation with MODBUS-RTU modules, already deployed on several radars and purchased and in Cuba for all of them, but at that moment we went with whichever decision would get us to the inauguration fastest. Read the post: <a href="https://meteoradares.wordpress.com/2021/04/20/radar-meteorologico-cubano-doppler-automatica-de-control/">Cuban Weather Radar (Doppler). Control&nbsp;Automation</a>.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The Software</mark></strong></h2><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">I already explained in detail, in the <a href="https://meteoradares.wordpress.com/2026/06/04/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar/">ninth installment</a>, the whole tangle of the software. Luisi (Jorge Luis Pérez Saavedra) was working on the acquisition and control side, and Wilfre (Wilfredo José Pozas Pérez) on the secondary processing side. Wilfre's part had been ready for a long time. <a href="https://meteoradares.wordpress.com/2013/04/05/vestaorpg/">VESTA|ORPG</a> was already working successfully with data from all the other (non-Doppler) radars in Cuba. Luisi, on the other hand, was facing the task of putting the radar control software into practice (VESTA|RCP, now with an improvised switch from USB modules to concentrated cards) as well as the acquisition itself.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Both parts (control and acquisition) took a lot of hard work. On top of that, the joint between acquisition and secondary processing is like the little Casa Blanca ferry (the small boat crossing Havana Bay) docking: a hard bump no matter how many tires you put out to cushion it. Plenty of practical problems had to be solved, because reality always outdid our speculations from back in 2008.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">In spite of it all, we ended up with a single VESTA|Process reading files from both the old radars and the new Doppler one. We also got VESTA|ORPG "swallowing" the new OBS files with Doppler information, confirming just how right our decision had been to adopt the powerful <a href="https://meteoradares.wordpress.com/2025/09/27/nexrad-y-ladetec/">NEXRAD-ORPG</a> (Institute of Meteorology's radar product generator), with all its potential for automatic detection and tracking of dangerous phenomena (storms, mesocyclones, tornadoes, air avalanches, hailstorms) — something VESTA|Process didn't have.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">The IT Side</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">There's another hugely important and contentious issue (contentious even among LADETEC's own engineers — more than once I had to make the call even while in the minority). It's like I once told someone close to me who argued — if I don't have enough money for food, how am I going to buy charcoal? And I answered — well, to eat you need the food, and you also need to cook it. Back to the radar. Having a super Doppler radar doesn't solve anything if you can't get its output into forecasters' hands in real time and in an accessible way (I called this <a href="https://meteoradares.wordpress.com/2025/02/28/radares-meteorologicos-el-segmento-de-ultima-milla/">Weather radars: the "last&nbsp;mile" segment</a>).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><a href="https://meteoradares.wordpress.com/2023/05/24/radares-meteorologicos-aspectos-informaticos/">IT aspects take care of that</a>, and yes, that part needs resources put into it too (and often at the expense of the radar's own resources). It's all one chain, from the radar's "iron" to the <a href="https://meteoradares.wordpress.com/2023/08/24/sabe-usted-que-son-las-imagenes-de-radar/">images</a> the forecasters see, and a chain is only as strong as its weakest link. The <a href="https://meteoradares.wordpress.com/2012/02/15/hablando-de-monstruos-albio/">"monster" Albio</a> was the one who brilliantly pulled off the <a href="https://meteoradares.wordpress.com/2023/05/24/radares-meteorologicos-aspectos-informaticos/">IT aspects</a> of the Doppler radar, and of the others too. Yaser Llanes Jorge, and later Josmar Terrero Ruiz, were the ones who made it happen.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">By the time we were commissioning the Doppler radar, the radar computer system was already a solidly implemented network. Let me explain the difficulties we'd had in achieving that. When <a href="https://meteoradares.wordpress.com/2023/09/16/hablando-de-monstruos-marco/">Marco</a> created VESTA|Process in 1996 and we put it into operation the following year with the Camagüey radar, he had created an observations file (we called it OBS, *.obs), whose main virtue was its small size (heavily compressed) so it could travel over the Cuban networks (future networks, because we had no connectivity at the radars until 2008) that we assumed would be very slow — and we weren't wrong. The OBS format was a colossal stroke of luck — yes, I know that praise comes from very close to home — hence my insistence that with the Doppler we keep that format (which generated ultra-compressed files that could travel over our slow computer networks), because in 2012 bandwidth wasn't exactly generous. (It still isn't, for that matter.)</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Using <a href="https://meteoradares.wordpress.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/">NEXRAD-ORPG</a> (Open Radar Product Generator) brought a difficulty of its own. On U.S. radars, ORPG runs on a server sitting right next to each radar. Both the input files to ORPG and the output files are quite large, and besides, we didn't have powerful computers to put at each radar site. So <a href="https://meteoradares.wordpress.com/2012/02/15/hablando-de-monstruos-albio/">Albio</a> and his team, coordinating with Wilfredo, made the bold decision to run ORPG (Wilfre had already been quite innovative running it on CentOS, which is free, instead of Red Hat as NEXRAD recommended) <strong>centrally</strong>, and furthermore, one ORPG instance per radar <strong>on the same server</strong> (take note, NEXRAD — we're not eternal). This way, the data from the radars arrives in OBS format, gets processed in ORPG, and gets displayed through a WEB image server that any user can view with the WEB browser of their choice.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">For redundancy, the primary data files from each radar travel to a Data Center in Camagüey and another in Casa Blanca. At both centers the 8 ORPG instances run simultaneously. Likewise, they're stored on NAS systems at each of these centers. Any user (internal to INSMET, or anywhere in the world, if granted access) can open the observations (OBS files) on their machine using VESTA|Process (product generator and viewer) with all its interactive features, while also being able to view each Radar's images as processed by ORPG, with certain interactive viewing features (not for product generation, which is automatic).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">In my opinion, the computing outcome is momentous, on par with the Cuban Weather Radar (Doppler) itself and an integral part of it. It lets any user at the Instituto de Meteorologia (Institute of Meteorology) view and analyze data from any of the Cuban radars, but above all it lets them exploit the full potential of the Doppler radar through NEXRAD-ORPG.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Well yes, incredulous reader. That monster of electrical solutions, electromechanical, electric drive, electronic, electrical protection, signal processing, data processing, software, WEB-based (local and remote) meteo-geo-referenced visualization, <a href="https://meteoradares.wordpress.com/2021/10/02/el-radar-meteorologico-cubano-la-industria-4-0-y-la-internet-de-las-cosas/">IoT and Industry 4.0 solutions</a>&#8230; worked, and starting August 13 (does that date ring a bell? does it give you an idea of who commissioned this work?) of 2012 it began its useful life. It made its debut with <a href="https://es.wikipedia.org/wiki/Hurac%C3%A1n_Isaac">Tropical Storm Isaac</a> and had its baptism by fire with <a href="https://es.wikipedia.org/wiki/Hurac%C3%A1n_Irma">Hurricane Irma</a>.</p><p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">This «beast», a whole compendium of Hardware, Software and Meteorology, came to be called RD-200SX (a name chosen by <a href="https://meteoradares.wordpress.com/2012/01/13/hablando-de-monstruos-leonardo/">Leonardo-Ichi</a> and adopted by all of us with pleasure). The «R» for Radar, the «D» for Doppler, the 200 indicating that it's dual (in this case dual wavelength, though it works just as well with dual polarization — in fact the S-band wavelength is radiated horizontally and the X-band wavelength is radiated vertically), so the «S» indicates the 10 cm band and the «X», the 3.2 cm band. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Having gone through 2882 days and nights, 411+ weeks, 94+ months and almost 8 years, against the bad omens and the evil eye, and despite all the setbacks, the mission assigned by the Commander in Chief was <strong>accomplished </strong>(Rene Hidalgo Font, write that down). The story doesn't end here — in upcoming installments I'll tell you the epic of replicating this result.</p>
