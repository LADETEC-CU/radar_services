---
title: "ATSORS, el precursor"
date: "2025-02-20"
slug: "atsors-el-precursor"
sourceId: "4175"
sourceUrl: "https://meteoradares.ladetec.com/2025/02/20/atsors-el-precursor/"
sourceHash: "5946c279a0e2dfef"
lang: "es"
excerpt: "Fue tan temprano como en 1983 que trajeron ese sistema, y digo temprano porque el radar MRL-5 de Camagüey se había entregado el 16 de diciembre de 1981 (regalo de mi primer cumpleaños, recién comenzando a trabajar en Meteorología). En el año 1982 el radar funcionó muy poco, por problemas de aire aco"
canonical: "https://meteoradares.ladetec.com/2025/02/20/atsors-el-precursor/"
---


<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56.png"><img loading="lazy" decoding="async" width="1076" height="731" src="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56.png?w=1024" alt="" class="wp-image-15207" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56.png 1076w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56-300x204.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56-1024x696.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-56-768x522.png 768w" sizes="auto, (max-width: 1076px) 100vw, 1076px" /></a></figure>



<p class="has-text-align-justify wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Fue tan temprano como en 1983 que trajeron ese sistema, y digo temprano porque el radar <a href="https://meteoradares.wordpress.com/2018/08/01/mrl-5-soviet-meteorological-radar/">MRL-5</a> de Camagüey se había entregado el 16 de diciembre de 1981 (regalo de mi primer cumpleaños, recién comenzando a trabajar en Meteorología). En el año 1982 el radar funcionó muy poco, por problemas de aire acondicionado y por hacerle la conversión para trabajar con la red industrial cubana de 60 Hz. Así pues, con ese nombre enigmático, ATSORS (siglas transliteradas del ruso <strong>АЦСОРС</strong> que corresponde a <strong>А</strong>втоматизированная <strong>Ц</strong>ифровая <strong>С</strong>истема <strong>О</strong>бработки <strong>Р</strong>адиолокационных <strong>С</strong>игналов, que en español se traduce como Sistema Automatizado Digital de Procesamiento de las Señales de Radar), ATSORS fue el primer sistema en Cuba capaz de grabar la información digitalizada de la señal de video a la salida del receptor del radar MRL-5 y procesarla con posterioridad en un Centro de Cálculo. Si me sigue leyendo, les cuento cómo fue.</p>



<!--more-->



<p class="has-text-align-justify wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">ATSORS constaba de dos cosas: un hardware y un software. El hardware estaba destinado a la adquisición de las señales digitalizadas y el software se encargaba de su procesamiento. El hardware estaba basado en un Preparador de Datos en Bandas Magnéticas, es decir, un equipo originalmente destinado a que un operador entrara datos por medio de teclado que se iban grabando en una banda (cinta) magnética. En el codificador del CAME (Comunidad de Ayuda Mutua Económica de los países del bloque socialista) era ES-9002. En la foto del inicio del post pueden ver el equipo, tal como lucía en 1984 en un reportaje de la revista Juventud Técnica, que por cierto, es la única foto que encontré de ese equipo (en esa época no teníamos cámaras fotográficas). Tanto el hardware como el software, fueron hechos por Yuri Ivánovich Rudenko. Rudenko era básicamente un programador y analista de sistemas, un hombre de software más bien, con ciertas habilidades elementales para el hardware.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-54.png"><img loading="lazy" decoding="async" width="1024" height="768" src="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-54.png?w=1024" alt="" class="wp-image-15203" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-54.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-54-300x225.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-54-768x576.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a><figcaption class="wp-element-caption">Leandro Lima operando el radar MRL-5 de Camagüey, el grabador se ubicaba a la izquierda, pegado a la puerta (no sale en la foto).</figcaption></figure>



<p class="has-text-align-justify wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Al equipo ES-9002 se le había añadido un conversor análogo digital y se le habían modificado los regímenes para que grabara automáticamente las señales a la salida del digitalizador. Se grababan varias vueltas de la antena, a un ángulo inicial de 1.5 grados de elevación y luego aumentando paulatinamente cada 1.5 grados según el mando programado original del radar. La grabación comenzaba automáticamente una vez que la antena cruzaba por el norte (cero grados de acimut), previa preparación manual para comenzar a grabar. El digitalizador era muy lento, en cada Periodo de de Repetición de los Pulsos solamente podía procesar UNA sola muestra de 2 km (13.33 microsegundos) de largo. El radar funcionaba en Régimen de Pulso Largo, en que el Periodo tenía una duración de 2000 microsegundos. La primera muestra ocupaba la distancia de 0 a 2 km, en el próximo Periodo de Repetición la muestra se corría y ocupaba la distancia de 2 a 4 km, y así sucesivamente hasta llegar al cuadragésimo Periodo de Repetición en que la muestra ocupaba la distancia de 78 a 80 km. Al próximo, volvía a comenzar de 0 a 2 km. La velocidad de giro acimutal de la antena se fijaba a 5 r. p. m. Al terminar la cuadragésima muestra, la antena se había movido 2.4 grados de acimut. No había integración en ángulo-tiempo. De este modo, se formaban 40 celdas polares de 2 km de largo y 2.4 grados de ancho. En total se hacían 150 sectores angulares de 2.4 grados de ancho y 40 celdas de 2 km, que totalizaban 80 km, ese era el alcance máximo. Cada vez que el radar completaba una exploración (una vuelta de la antena), en la banda se grababan 40 celdas x 150 sectores, igual 6000 bytes de información por cada vuelta y así sucesivamente, elevando el ángulo de inclinación de la antena y el ciclo se repetía cada cinco minutos.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53.png"><img loading="lazy" decoding="async" width="1280" height="1214" src="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53.png?w=1024" alt="" class="wp-image-15201" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53.png 1280w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53-300x285.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53-1024x971.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-53-768x728.png 768w" sizes="auto, (max-width: 1280px) 100vw, 1280px" /></a><figcaption class="wp-element-caption">Un equipo preparador de datos en bandas magnéticas ES-9002.</figcaption></figure>



<p class="has-text-align-justify wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El software se encargaba de construir los CAPPI (siglas de Constant Altitude Plan Position Indicator) de 0 a 1 km, de 1 a 2 km y así sucesivamente hasta los 16 km de altura. Es decir se construían cortes horizontales donde todos los datos tenían la misma altura. El algoritmo para esta interpolación de datos polares para fabricar cortes cartesianos fue heredado de los canadienses (desde el PEP en España), según supe por Alamelu Kilambi de McGill, muchos años después. Cada CAPPI se imprimía para poderlo ver y procesarlo manualmente. En la impresión, el valor de la Reflectividad en cada punto se representaba por un código hexadecimal (del 0 al 9 y luego A, B, C, D, E, F). Los rusos le llamaban a esto cifrokartas, que significa mapas digitales, pero los cubanos por costumbre también le llamaban cifrokartas.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-52.png"><img loading="lazy" decoding="async" width="886" height="868" src="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-52.png?w=886" alt="" class="wp-image-15199" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-52.png 886w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-52-300x294.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/02/image-52-768x752.png 768w" sizes="auto, (max-width: 886px) 100vw, 886px" /></a><figcaption class="wp-element-caption">Una «cifrokarta», es decir un CAPPI impreso.</figcaption></figure>



<p class="has-text-align-justify wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El sistema tenía muy serios problemas: 1) Nunca se sabía si la información se estaba grabando correctamente o no, solo cuando las bandas llegaban al Centro de Cálculo y se procesaban (varios días después) era que se sabía que durante un día de trabajo no se había grabado nada (y los aviones habían estado volando y haciendo su tarea de inyectar las nubes con yoduro de plata). 2) El sistema dependía de la estabilidad de la velocidad de giro, si la antena no giraba a 5 r.p.m., entonces los sectores angulares no eran de 2.4 grados y el último sector o no se completaba o se completaba antes de llegar a 360 grados. Realmente, esta forma de digitalización era bastante burda. Por este motivo desarrollamos el Sistema HERMES y el RADEX. </p>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="acB85CEtnS"><a href="https://meteoradares.wordpress.com/2023/09/06/ironias-del-destino-pc-solo-sirve-para-jugar-y-escribir/">Ironías del destino: ¿PC? Solo sirve para jugar y&nbsp;escribir</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«Ironías del destino: ¿PC? Solo sirve para jugar y&nbsp;escribir» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2023/09/06/ironias-del-destino-pc-solo-sirve-para-jugar-y-escribir/embed/#?secret=Vd6HB0eFnt#?secret=acB85CEtnS" data-secret="acB85CEtnS" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>

