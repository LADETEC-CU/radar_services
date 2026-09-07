---
title: "Project «Whitney»: assimilating NEXRAD-ORPG in Cuba"
date: "2021-06-03"
slug: "whitney-project-assimilating-nexrad-orpg-in-cuba"
sourceId: "2355"
sourceUrl: "https://meteoradares.ladetec.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/"
sourceHash: "dcd06533a703f1b3"
lang: "es"
excerpt: "While making our new Doppler radar, the Laboratorio de Desarrollo Técnico (LADETEC) arrived at a road cross: VESTA|Process (our product generator) could visualize Velocity data only in a very rusty way. No further Velocity and Spectrum Width processing was available, but a Doppler radar needs some s"
canonical: "https://meteoradares.ladetec.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/"
---


<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada.jpg"><img loading="lazy" decoding="async" width="1360" height="764" src="https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada.jpg?w=1024" alt="" class="wp-image-2356" srcset="https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada.jpg 1360w, https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada-300x169.jpg 300w, https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada-1024x575.jpg 1024w, https://blog-media.ladetec.com/wp-content/uploads/2021/05/mountwhitneysierranevada-768x431.jpg 768w" sizes="auto, (max-width: 1360px) 100vw, 1360px" /></a><figcaption class="wp-element-caption"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">Mount Whitney, highest peak in contiguos United States. </mark></figcaption></figure>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">While making our new Doppler radar, the Laboratorio de Desarrollo Técnico (LADETEC) arrived at a road cross: VESTA|Process (our product generator) could visualize Velocity data only in a very rusty way. No further Velocity and Spectrum Width processing was available, but a Doppler radar needs some software able to generate products using Velocity and Spectrum Width. </p>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">So, re-write code adding new features or use some other software? That was the question. </p>



<!--more-->



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">In 2007, NOAA National Weather Service through Radar Operation Center (ROC) released the Open version of Radar Product Generator (ORPG). It was an open source, freely available software. So, at the same time our Doppler radar was being developed, LADETEC started a new project, coded with the name WHITNEY. Why? Mount Whitney is the highest peak (4421 m above sea level) in the conterminous United States. We followed our tradition of naming projects after the name of a dominating mountain peak, related to the project´s subject. With that name, LADETEC wanted to honor NOAA, NWS, ROC, NCAR, NSSL and all other persons and institutions of USA involved in NEXRAD project, under which the 159 WSR-88D radar (hardware and software), were developed, constructed and implemented.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc.jpg"><img loading="lazy" decoding="async" width="1230" height="416" src="https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc.jpg?w=1024" alt="" class="wp-image-2366" srcset="https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc.jpg 1230w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc-300x101.jpg 300w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc-1024x346.jpg 1024w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/roc-768x260.jpg 768w" sizes="auto, (max-width: 1230px) 100vw, 1230px" /></a></figure>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">ORPG contains algorithms developed and tested by several institutions and scientists during more than30 years. For the dissemination and use outside NEXRAD, ROC created the so-called CODE (Common Operation Development Environment) for WSR-88D. CODE contains a software package distribution for Red Hat Linux, with free and open source code. &nbsp;CODE is primarily an algorithm development platform for the WSR-88D weather radar. However, CODE can also be used to ingest historical WSR-88D level 2 data and create valid WSR-88D products (level 3) for various research and analysis purposes.</p>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">In 2009, LADETEC put into work CODE-ORPG to process information from all Cuban radars (even before the Camagüey Doppler radar prototype was ready). Being ORPG the core software, it also needed some software to ingest data from Cuban radars in its native format, and also some means for visualization. The whole package was called VESTA|ORPG.</p>



<figure class="wp-block-image size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image.png"><img loading="lazy" decoding="async" src="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image.png?w=690" alt="" class="wp-image-2369" width="670" height="308" srcset="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image.png 690w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-300x138.png 300w" sizes="auto, (max-width: 670px) 100vw, 670px" /></a></figure>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">VESTA|RDA_Back_End is the software package intended to ingest data in Cuban native format (*.obs) and convert it to messages as ORPG requests. VESTA|PostGIS is the software designated to write products (level 3 data) from ORPG onto a PostgreSQL Data Base with PostGIS (means spatial geographical data base).</p>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">VESTA|WEBView Server is the WEB application which allows interactive visualization of products over the WEB. VESTA|WEBView allows visualization of current data, but also user can navigate through the data base to any past information from any of the eight radars. User can see processed information using any of the available web browsers (Internet Explorer, Mozilla Firefox, Chrome, Pale Moon, etc.).</p>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">The whole package of <a href="https://meteoradares.wordpress.com/2013/04/05/vestaorpg/">VESTA|ORPG</a> is a free and open source code, running under CentOS (the free version of Red Hat Linux). Each radar needs one instance of ORPG, but data base and WEB server are common for the eight radars. This information is available only for the Private  Data Network for the Instituto de Meteorología de Cuba.</p>



<figure class="wp-block-image size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-1.png"><img loading="lazy" decoding="async" src="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-1.png?w=689" alt="" class="wp-image-2373" width="669" height="322" srcset="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-1.png 689w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-1-300x145.png 300w" sizes="auto, (max-width: 669px) 100vw, 669px" /></a></figure>



<p class="has-text-align-justify has-small-font-size wp-block-paragraph">Visualization of different ORPG products using VESTA|WEBView (showing different interactive options): a) Pico San Juan radar catching Hurricane Irma, Sept. 2017; b) Pilon radar catching Hurricane Irma, Sept. 2017; c) La Gran Piedra radar catching Hurricane Matthew with the eye over Haiti, Oct. 2016; d) Camagüey radar catching the landing of the eye of Hurricane Irma, Sept. 2017; e) Casa Blanca radar catching storm over Havana, showing past and future trajectory, 4 July 2018; f) Camagüey radar showing embeded-tornados algorithm marks in Hurricane Irma (red triangles), g) Velocity information taken with Camagüey Doppler radar.</p>



<p class="has-text-align-justify wp-block-paragraph" style="line-height:1.6">ORPG is a very powerful tool generating more than 70 products from one volume raw data (taken by Doppler and Polarimetric radars). VESTA|ORPG take the advantage of using proven algorithm and software, which would cost years of efforts to get by ourselves. LADETEC is thankful for using this open and free code. Our radars use the same scanning strategies as NEXRAD radars use, to explore atmosphere every 10 minutes, all the time. VESTA|ORPG offers a wide set of products from Cuban radars, and they are ready to be visualized with simple and little WEB browser manipulations. This information is available to meteorologists of the whole Instituto de Meteorología system, instantly. VESTA|ORPG is ready to assimilate polarimetric information when Cuban radars will be ready to supply it. VESTA|ORPG can ingest data from many different radar models.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3.png"><img loading="lazy" decoding="async" width="1202" height="808" src="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3.png?w=1024" alt="" class="wp-image-2386" srcset="https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3.png 1202w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3-300x202.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3-1024x688.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2021/06/image-3-768x516.png 768w" sizes="auto, (max-width: 1202px) 100vw, 1202px" /></a></figure>

