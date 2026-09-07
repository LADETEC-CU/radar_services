---
title: "Seis generaciones de ingenio: La evolución de los procesadores de señal en los radares cubanos"
date: "2026-03-13"
slug: "seis-generaciones-de-ingenio-la-evolucion-de-los-procesadores-de-senal-en-los-radares-cubanos"
sourceId: "24122"
sourceUrl: "https://meteoradares.ladetec.com/2026/03/13/seis-generaciones-de-ingenio-la-evolucion-de-los-procesadores-de-senal-en-los-radares-cubanos/"
sourceHash: "48e8f6393d21fd59"
lang: "es"
excerpt: "Desde el rudimentario BOMO de 1983 hasta el revolucionario LAMULA™DRx-DSP, el Dr. Orlando L. Rodríguez González repasa cuatro décadas de ingenio cubano en el procesamiento de señales de radar meteorológico. Una historia de superación tecnológica que, partiendo de un MRL-5 y con la creatividad de los"
canonical: "https://meteoradares.ladetec.com/2026/03/13/seis-generaciones-de-ingenio-la-evolucion-de-los-procesadores-de-senal-en-los-radares-cubanos/"
---


<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.098), 15px);line-height:1.6"><strong><em>Desde el rudimentario BOMO de 1983 hasta el revolucionario <a href="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/">LAMULA™DRx-DSP</a>, el <a href="https://meteoradares.wordpress.com/2022/07/26/confiteor-ego-sum-deficiendi-mea-culpa/">Dr. Orlando L. Rodríguez González</a> repasa cuatro décadas de ingenio cubano en el procesamiento de señales de radar meteorológico. Una historia de superación tecnológica que, partiendo de un <a href="https://meteoradares.wordpress.com/2018/08/01/mrl-5-soviet-meteorological-radar/">MRL-5</a> y con la creatividad de los ingenieros de <a href="https://meteoradares.wordpress.com/2024/03/03/es-ladetec-realmente-un-grupo-exitoso/">LADETEC</a>, logró <a href="https://meteoradares.wordpress.com/2021/04/27/hitos-cubanos-en-la-actividad-de-los-radares-meteorologicos/">hitos</a> como la primera computadora personal acoplada a un radar (1988) o una resolución de 75 metros que se adelantó a su tiempo. Un viaje por la evolución de la electrónica, desde los filtros analógicos hasta las FPGA y la polarimetría digital.</em></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A finales de 1981, <a href="https://meteoradares.wordpress.com/2012/11/13/de-como-simbad-descubrio-la-isla-meteorologica/">recién iniciado en el mundo de la meteorología</a>, recibí el mejor regalo de cumpleaños que un joven profesional podría imaginar: un radar MRL-5. Este coloso tecnológico soviético, de doble longitud de onda, era una ventana abierta al futuro, llena de posibilidades digitales que apenas comenzábamos a vislumbrar. Pero lo que no sabía entonces es que ese regalo sería el punto de partida de una odisea de más de cuatro décadas, una historia de ingenio y perseverancia para domar y evolucionar sus <a href="https://meteoradares.wordpress.com/2026/02/27/senales-en-los-radares-meteorologicos/">señales</a>, escrita en gran parte por los ingenieros de la ahora <a href="https://meteoradares.wordpress.com/2026/01/30/ladetec-de-la-innovacion-sostenible-a-la-innovacion-disruptiva-una-startup/">empresa privada cubana</a> <a href="https://meteoradares.wordpress.com/2021/04/24/la-falange-espartana-del-centro-de-radares/">LADETEC</a>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Hoy, en «<a href="https://meteoradares.wordpress.com">Radares mirando al sur</a>«, quiero compartir con ustedes la historia de ese viaje a través de <strong>seis generaciones</strong> de procesadores de señal. No es solo una lista de artefactos; es la crónica de cómo, desde una isla, logramos sincronizarnos con los latidos del mundo y, en algunos momentos, incluso adelantarnos a ellos.</p>



<!--more-->



<h2 class="wp-block-heading">1<strong>. El Génesis: BOMO (1983) y el amanecer digital</strong></h2>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9.png"><img loading="lazy" decoding="async" width="1135" height="398" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9.png?w=1024" alt="Características del BOMO Digitalizador 5 bits, 1 MHz, 256 celdas de 150, 300, 600, 1200 m FIR en distancia, IIR en ángulo-tiempo" class="wp-image-24687" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9.png 1135w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9-300x105.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9-1024x359.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-9-768x269.png 768w" sizes="auto, (max-width: 1135px) 100vw, 1135px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A principios de los 80, <a href="https://meteoradares.wordpress.com/2011/12/22/tkkka/">mi segundo asesor soviético</a>, Vilory Kravtchenko, llegó con ideas que, descubrí años después, estaban a la vanguardia del procesamiento digital de señales en la URSS y el mundo. Juntos, materializamos esas ideas en un dispositivo que bautizamos como&nbsp;<strong>BOMO</strong>&nbsp;(Bloque de Procesamiento de Objetos Meteorológicos).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El BOMO era humilde en apariencia, con un digitalizador de solo 5 bits y una frecuencia de muestreo de 1 MHz, limitado por los componentes que teníamos a mano. Pero su arquitectura era revolucionaria para la época. Implementaba un promediador lineal digital (un filtro FIR) para definir el tamaño de la celda en distancia y, lo más importante, un filtro IIR de segundo orden para la integración en ángulo-tiempo. Su único fin era mejorar la imagen en los indicadores PPI/RHI, pero sembró la semilla de todo lo que vendría.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Años después, en el 2000, durante una <a href="https://meteoradares.wordpress.com/2024/12/28/ncar-un-pequeno-paso-para-un-hombre-un-gran-salto-para-los-radares-cubanos/">pasantía en el NCAR</a> (EE.UU.), le confesé a Jonathan Lutz, ingeniero del <a href="https://meteoradares.wordpress.com/2024/12/26/el-equipo-de-ensueno-en-instrumentacion/">radar S-POL</a>, las humildes características del BOMO. Casi con vergüenza, le expliqué cómo esas limitaciones nos habían llevado a desarrollar soluciones creativas. Su respuesta fue un bálsamo y una confirmación: «Orlando, en esa época nosotros hacíamos exactamente lo mismo, con las mismas características». No estábamos solos en la carrera; estábamos en la pista correcta.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pero el BOMO guardaba su mayor secreto. En 1988, utilizando su salida digital, logramos inyectar datos de radar directamente en una computadora <a href="https://meteoradares.wordpress.com/2023/08/22/ironias-del-destino-al-que-no-tiene-quijada-dios-le-da-una-olivetti/">Olivetti 416</a> por medio de <a href="https://meteoradares.wordpress.com/2023/09/05/acceso-directo-a-la-memoria-de-hermes/">acceso directo a memoria</a> (DMA). Había nacido el&nbsp;<strong><a href="https://meteoradares.wordpress.com/2012/04/04/requiem-por-hermes/">Sistema HERMES</a></strong>, y con él, la primicia mundial de usar una computadora personal compatible IBM para procesar información de un radar meteorológico. El primer paso estaba dado.</p>



<h2 class="wp-block-heading"><strong>2. El Camino Paralelo: ByM (1987) y la integración forzada</strong></h2>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10.png"><img loading="lazy" decoding="async" width="1135" height="396" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10.png?w=1024" alt="ByM, 1988, Digitalizador 8 bits,0.15 MHz. integrador analógico en distancia, FIR fijo de 8 muestras en ángulo-tiempo" class="wp-image-24690" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10.png 1135w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10-300x105.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10-1024x357.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-10-768x268.png 768w" sizes="auto, (max-width: 1135px) 100vw, 1135px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Mientras el BOMO maduraba, en 1987 los soviéticos Bélikov y Morgunóv desarrollaron un procesador alternativo, al que llamé&nbsp;<strong>ByM</strong>&nbsp;por sus apellidos. Usaba un conversor A/D de 8 bits, pero más lento, con un alcance limitado a 110 km y un filtrado analógico previo. Su gran virtud era un integrador FIR que sumaba 8 muestras, una mejora frente al IIR del BOMO en términos de respuesta.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Sin embargo, su implementación era tosca y la calidad de imagen, inferior. Para mí, fue una solución de emergencia. Ante la necesidad de expandir el HERMES, tomé una decisión clave: instalé el ByM en Camagüey y llevé el querido BOMO a Casa Blanca. A finales de 1989, HERMES ya operaba en ambos radares. El ByM, a su manera, nos enseñó que a veces hay que integrar lo que se tiene para seguir avanzando.</p>



<h2 class="wp-block-heading"><strong>3. El Salto Conceptual: POS-I (1993) y POS-II (2000) &#8211; La era de la superresolución</strong></h2>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11.png"><img loading="lazy" decoding="async" width="1130" height="456" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11.png?w=1024" alt="POS-I, 1997, digitalizador 8 bits, 1 MHz, 2048 celdas, FIR en distancia, FIR en ángulo-tiempo" class="wp-image-24692" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11.png 1130w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11-300x121.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11-1024x413.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-11-768x310.png 768w" sizes="auto, (max-width: 1130px) 100vw, 1130px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Los años 90 me sumergieron en el estudio teórico de las señales. Simulaciones en MATLAB me confirmaron que el filtro FIR en ángulo-tiempo era superior, pero su implementación en hardware era un dolor de cabeza. El problema era el latido irregular del radar: el número de pulsos por ángulo variaba, y dividir por un número que no fuera potencia de dos era terriblemente complejo en la lógica de la época. Las memorias rápidas no aparecían y las ALU TTL no daban abasto.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Hasta que, en un chispazo de ingenio, llegó la solución:&nbsp;<strong>«Sumemos por hardware y dividamos por software»</strong>. Era tan simple como brillante. El hardware sumaría los ecos de un número variable de pulsos, y una computadora, ya lo suficientemente rápida, leería esa suma y el contador de pulsos para hacer la división. Nació el&nbsp;<strong>Procesador Optimizado de Señales (POS)</strong>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El&nbsp;<strong>POS-I</strong>&nbsp;(1993) fue una prueba de concepto en el sistema <a href="https://meteoradares.wordpress.com/2023/10/13/proyecto-argos/">ARGOS</a>. El&nbsp;<strong>POS-II</strong>, desarrollado para el Proyecto <a href="https://meteoradares.wordpress.com/2021/06/15/elbrus-project-modernizing-soviet-mrl-5-radars-in-cuba/">ELBRUS</a> en el año 2000, ya era un prototipo industrial. Usaba conversores de 10 bits a 2 MHz, lo que nos dio una celda mínima de 75 metros. Y entonces vino lo grandioso: al hacer toda la división y formateo por software, logramos una flexibilidad total. Podíamos agrupar esas minúsculas celdas de 75m en cualquier tamaño de celda final, tanto en distancia como en ángulo.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12.png"><img loading="lazy" decoding="async" width="1125" height="388" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12.png?w=1024" alt="POS-II, 2000, digitalizadfor 10 bits, 2 MHz, 2048 celdas" class="wp-image-24694" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12.png 1125w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12-300x103.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12-1024x353.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-12-768x265.png 768w" sizes="auto, (max-width: 1125px) 100vw, 1125px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En mayo del año 2000, alcanzamos una resolución máxima de&nbsp;<strong>0.35º x 75 metros</strong>. Ocho años después, el NEXRAD (la red de radares de EE.UU.) implementaría su «<a href="https://console.cloud.google.com/marketplace/product/noaa-public/nexrad-l2?hl=es-419">superresolución</a>» de 0.5º x 250 metros. Por un momento, en una loma de Camagüey, la Isla iba por delante.</p>



<h2 class="wp-block-heading"><strong>4. El Salto Cuántico: CÍCLOPE (2012-2022) &#8211; La llegada del Doppler</strong></h2>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13.png"><img loading="lazy" decoding="async" width="1131" height="388" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13.png?w=1024" alt="Cíclope, 2012, digitalizador de FI a 105 MHz, 4096 muestras, Z, V, W, celdas de 150 y 250 m" class="wp-image-24697" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13.png 1131w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13-300x103.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13-1024x351.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-13-768x263.png 768w" sizes="auto, (max-width: 1131px) 100vw, 1131px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Hasta aquí, todos los procesadores (BOMO, ByM, POS) trabajaban con la amplitud de la señal, perdiendo la fase. Eran radares «convencionales», que solo veían la reflectividad (Z). Para ver el viento, necesitábamos la fase, necesitábamos un radar Doppler.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El salto fue monumental. Inspirados en el procesador Cyclops-D de la Oficina Meteorológica del Reino Unido (Met Office), los ingenieros de <a href="https://meteoradares.wordpress.com/2025/01/04/modus-operandi-innovacion-y-mas-innovacion/">LADETEC</a> diseñaron el&nbsp;<strong>CÍCLOPE</strong>. Ya no se trataba de digitalizar video, sino de digitalizar la señal de frecuencia intermedia directamente. Con un conversor de&nbsp;<strong>14 bits a 105 MHz</strong>&nbsp;(algo impensable en los 80) y una FPGA implementando un <a href="https://es.wikipedia.org/wiki/Desmodulaci%C3%B3n">demodulador sincrónico</a>, habíamos entrado en la era del&nbsp;<strong>receptor digital</strong>&nbsp;o&nbsp;<em>software radio</em>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A partir de ahí, una PC industrial calculaba los tres momentos del espectro de potencias Doppler: la reflectividad (Z), la velocidad (V) y el ancho espectral (W). LADETEC fabricó tres procesadores CÍCLOPE: para Camagüey (2012), Casa Blanca (2020) y Holguín (2022). Habíamos pasado del prototipo a dos ejemplares seriados.</p>



<h2 class="wp-block-heading"><strong>5. El Presente y Futuro: LAMULA™DRx-DSP (2023) &#8211; La madurez digital</strong></h2>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14.png"><img loading="lazy" decoding="async" width="1138" height="433" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14.png?w=1024" alt="LAMULA DRx-DSP, digitalizador 16 bits, 250 MHz, 4096 muestras I y Q, Z, V, W, ZDR, PHIDP, KDP, EHOHV" class="wp-image-24699" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14.png 1138w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14-300x114.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14-1024x390.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-14-768x292.png 768w" sizes="auto, (max-width: 1138px) 100vw, 1138px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pero la electrónica no se detiene, y los ingenieros de <a href="https://meteoradares.wordpress.com/2025/01/09/ladetec-decalogo-de-accion/">LADETEC</a>, tampoco. La sexta generación ya está aquí: el&nbsp;<strong>LAMULA™DRx-DSP</strong>&nbsp;(<a href="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/">Digital Receiver and Digital Signal Processor</a>).</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Lleva la digitalización al extremo:&nbsp;<strong>16 bits a 250 MHz</strong>. No solo calcula los momentos Doppler, sino que incorpora el procesamiento para <a href="https://meteoradares.wordpress.com/2025/08/03/doble-polarizacion-ventajas-y-desventajas/">variables polarimétricas</a>, permitiendo transformar radares convencionales en polarimétricos. Pero la verdadera revolución está en su arquitectura. La <a href="https://es.wikipedia.org/wiki/Matriz_de_puerta_programable_en_campo">FPGA</a> de última generación alberga un sistema en chip (<a href="https://www.microchip.com/en-us/products/fpgas-and-plds/system-on-chip-fpgas">SoC</a>) o una computadora embebida que realiza todo el cálculo de momentos y variables en su interior, eliminando la necesidad de una <a href="https://en.wikipedia.org/wiki/Industrial_PC">PC industrial</a> externa. El resultado es una velocidad de procesamiento muy superior, ya que el dato no viaja por un bus lento (como el <a href="https://es.wikipedia.org/wiki/Peripheral_Component_Interconnect">bus PCI</a>), y una configuración de salida gestionada por una eficiente <a href="https://opensource.com/resources/raspberry-pi">Raspberry Pi</a>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Del BOMO, que luchaba por pintar un punto de luz en una pantalla, al LAMULA™DRx-DSP, un cerebro digital capaz de desentrañar la dinámica y la <a href="https://meteoradares.wordpress.com/2025/10/22/las-tres-reinas-malvadas-del-tiempo/">microestructura de las tormentas</a> en tiempo real. Seis generaciones de ingeniería, seis generaciones de historia, seis generaciones de mirar al sur, pero con los ojos bien puestos en el futuro.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>¿Qué opinan, colegas y lectores? ¿Conocen alguna otra historia de desarrollo local tan prolongada y fructífera? Los leo en los comentarios.</strong></p>



<p class="wp-block-paragraph"></p>

