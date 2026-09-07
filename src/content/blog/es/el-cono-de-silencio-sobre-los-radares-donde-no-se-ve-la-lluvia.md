---
title: "El cono de silencio sobre los radares, donde no se ve la lluvia"
date: "2025-10-12"
slug: "el-cono-de-silencio-sobre-los-radares-donde-no-se-ve-la-lluvia"
sourceId: "19935"
sourceUrl: "https://meteoradares.ladetec.com/2025/10/12/el-cono-de-silencio-sobre-los-radares-donde-no-se-ve-la-lluvia/"
sourceHash: "2a3fcf16622713fa"
lang: "es"
excerpt: "Desde que comenzamos a publicar en la web imágenes de los radares automatizados, allá por el año 2006, muchos compañeros, especialmente de Centro de Pronósticos en Casa Blanca, me preguntaban el porqué del «hueco» en las imágenes de los radares. Especialmente les preocupaba el de Casa Blanca, porque"
canonical: "https://meteoradares.ladetec.com/2025/10/12/el-cono-de-silencio-sobre-los-radares-donde-no-se-ve-la-lluvia/"
---


<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Desde que comenzamos a publicar en la web imágenes de los radares automatizados, allá por el año 2006, muchos compañeros, especialmente de Centro de Pronósticos en Casa Blanca, me preguntaban el porqué del «hueco» en las imágenes de los radares. Especialmente les preocupaba el de Casa Blanca, porque el hueco «les privaba» de información sobre la capital. En el presente post pretendo mostrar técnicamente el porqué del hueco, pero mucho más que eso, demostrarles que el radar de Casa Blanca y cualquier otro de Cuba, sí puede «ver» la nubosidad que tienen encima y por tanto, dar cobertura total de 0 a 500 km y con esto deshacer un muy nocivo mito que impide una mejor utilización de los radares cubanos. Si le interesa el tema, siga leyéndome.</p>



<!--more-->



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El porqué del hueco es muy simple de explicar. Los radares ejecutan una secuencia de PPIs (cortes cónicos de la atmósfera) elevando, al completar cada revolución, el ángulo de la antena sobre el horizonte&#8230;hasta un ángulo determinado, generalmente no mayor de 20-25 grados. Dicen que una imagen vale más que mil palabras y yo traigo a colación un ejemplo, que son imágenes formadas a partir de los datos del huracán Charley, grabados por el radar de Casa Blanca, que ejecutaba 25 PPIs, el más alto a los 25 grados de elevación de la antena, el 12 de agosto de 2004, a las 18:55 Hora Local (de verano, +5 GMT). Como puede apreciarse, cabe suponer que la nubosidad es uniforme y queda interrumpida por el cono donde no hay datos, el software no los puede «inventar».</p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-40.png"><img loading="lazy" decoding="async" width="785" height="667" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-40.png?w=785" alt="" class="wp-image-20065" style="aspect-ratio:1.1769279827315542;width:412px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-40.png 785w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-40-300x255.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-40-768x653.png 768w" sizes="auto, (max-width: 785px) 100vw, 785px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Algunos compañeros me preguntaban si era un problema del software y de la automatización que le habíamos implementado al radar. Yo les explicaba que no, que el problema es universal, les pasa a todos los radares cuando hacen este tipo de exploración. A continuación les muestro una imagen de la exploración que hacen los radares WSR-88D del NWS de los EE.UU. (el ángulo de elevación más alto es 19.5 grados).</p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-31.png"><img loading="lazy" decoding="async" width="771" height="665" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-31.png?w=771" alt="" class="wp-image-20031" style="aspect-ratio:1.1594094335975256;width:451px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-31.png 771w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-31-300x259.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-31-768x662.png 768w" sizes="auto, (max-width: 771px) 100vw, 771px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Efectivamente, al no explorar más arriba de los 20-25 grados, sobre el radar tenemos lo que se llama El Cono de Silencio, el dichoso «hueco» que se ve en las imágenes de los radares. No podemos librarnos de él. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-36.png"><img loading="lazy" decoding="async" width="882" height="644" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-36.png?w=882" alt="" class="wp-image-20056" style="aspect-ratio:1.3695943824394143;width:450px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-36.png 882w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-36-300x219.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-36-768x561.png 768w" sizes="auto, (max-width: 882px) 100vw, 882px" /></a><figcaption class="wp-element-caption">¿Es razonable suponer que allí en el hueco hay ecos potentes o no? ¿Qué hacer para dilucidarlo?</figcaption></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Siempre está el que pregunta que por qué no seguimos haciendo exploraciones inclinadas hasta llegar a 90 grados y cubrir toda la semiesfera sobre nosotros. La respuesta es simple: se demora mucho. Cada exploración de una revolución toma unos 12 segundos (rotando la antena a 5 r.p.m.), al terminar nos demoramos un poco más en elevar la antena y posicionarla estable en el nuevo ángulo. Cuan rápido podemos hacer esto va a depender del sistema de accionamiento de la antena y del algoritmo de posicionamiento, que debe ejecutar esta acción de forma rápida y precisa y del ajuste. Pongamosle unos 5 segundos, para un sistema muy bien ajustado. Ya tenemos 17 segundos.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-35.png"><img loading="lazy" decoding="async" width="886" height="666" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-35.png?w=886" alt="" class="wp-image-20054" style="aspect-ratio:1.3303296642360052;width:444px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-35.png 886w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-35-300x226.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-35-768x577.png 768w" sizes="auto, (max-width: 886px) 100vw, 886px" /></a><figcaption class="wp-element-caption">¿Habrá o no ecos importantes en el área que el hueco nos deja huérfanas?</figcaption></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Si ejecutamos 14 revoluciones (16 si es un radar Doppler porque en los dos primeros ángulos se hace una observación de Pulso Corto y una de Pulso Largo), tendríamos que nos tomaría 238 segundos (272 si es un radar Doppler), es decir, que casi 4 minutos (casi 5 para el Doppler), un tiempo aceptable en el que el objeto meteorológico ha cambiado poco. Si desearamos explorar los 90 grados, con una antena de 1 grado, como la de los WSR-88D (1.5 grados en los radares MRL-5), necesitaríamos 90 revoluciones (60 en el caso de un MRL-5). Entonces el tiempo sería de 1530 segundos, más de 25 minutos (17 minutos para un MRL-5). Un tiempo de 25 minutos para explorar toda la atmósfera es intolerable, hay procesos convectivos que evolucionan todo su ciclo de vida en ese tiempo. Comenzamos explorando la parte de abajo en un estadio, y cuando llegamos a la parte alta estaríamos viendo ya otro estadio de la nube.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-49.png"><img loading="lazy" decoding="async" width="500" height="349" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-49.png?w=500" alt="" class="wp-image-20094" style="aspect-ratio:1.4327289008282964;width:436px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-49.png 500w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-49-300x209.png 300w" sizes="auto, (max-width: 500px) 100vw, 500px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Así pues&#8230;esta no es una solución. En la práctica de la radiolocalización meteorológica, o Meteorología de Radar si prefieren llamarla así, se han desarrollado técnicas para obtener la mayor cantidad de información de un sistema tan complejo y lleno de compromisos como son los radares meteorológicos. Para este asunto del «hueco» tenemos claramente definidas tres soluciones, todas al alcance nuestro, de Cuba y los radares cubanos, como demostraré a continuación, y claro, en ninguna de ellas vamos a elevar la antena más allá de los establecidos 20 grados. </p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Mirar hacia arriba y no es para pedir ayuda al Cielo</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Si usted ve un corte vertical (construido por software a partir de las exploraciones acimutales) como el que se muestra en la figura de arriba (el del Charley), se dará cuenta que cabe suponer con bastante certeza que sobre el radar y en su zona cercana debe haber nubes potentes de desarrollo vertical, semejantes a las que están un poco más lejos y que el radar sí logra explorarlas. Entonces, hay que salir de dudas ¿Tenemos una tormenta sobre el radar?Interrumpamos el ciclo de observaciones automáticas cada 10 minutos y HAGAMOS UNA (o varias) EXPLORACIÓN(es) VERTICAL(es), sí, hablo de un RHI, como hacíamos con los radares analógicos, en los radares automatizados esto se hace muy fácilmente, es solo presionar un botón) léase el post <a href="https://meteoradares.wordpress.com/2025/10/11/como-exploran-la-troposfera-los-radares-meteorologicos/">¿Cómo exploran la troposfera los radares&nbsp;meteorológicos?</a> </p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-43.png"><img loading="lazy" decoding="async" width="414" height="393" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-43.png?w=414" alt="" class="wp-image-20075" style="aspect-ratio:1.053437239075981;width:332px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-43.png 414w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-43-300x285.png 300w" sizes="auto, (max-width: 414px) 100vw, 414px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">De preferencia sería mejor meterse en el tiempo que hay desde que se termina una observación automática y comienza la otra. Se repiten cada 10 minutos y la exploración completa toma un poco más de cinco minutos, nos quedan al menos cuatro minutos para hacer uno o varios RHI (moviendo la antena de abajo a arriba, no los que se hacen por software a partir de exploraciones horizontales).</p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-44.png"><img loading="lazy" decoding="async" width="264" height="191" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-44.png?w=264" alt="" class="wp-image-20076" style="aspect-ratio:1.3822302217131637;width:378px;height:auto"/></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Una mano lava a la otra y las dos lavan la cara </mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Los radares WSR-88D en principio pueden hacer exploraciones verticales (solo de 0 a 60 grados), pero no es algo que se practique, al menos yo nunca lo he visto hacer, sé que es posible porque me he estudiado el código de ORPG y sé he visto las funciones; pero no me parece que lo usen nunca en el servicio. Entonces&#8230;nos queda mirar la información de un radar vecino. Por ejemplo, Casa Blanca y Cayo Hueso se dan cobertura mutua sobre ellos. El radar de Casa Blanca ve muy bien sobre el radar de Cayo Hueso y este sobre la ciudad de La Habana. Ambos usan los mismos VCPs, ambos usan ORPG y nosotros sin dificultad podemos incorporar los datos primarios de Cayo Hueso, Tampa y Miami a nuestro sistema de procesamiento <a href="https://meteoradares.wordpress.com/tag/vestaorpg/">VESTA|ORPG</a>. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-41.png"><img loading="lazy" decoding="async" width="632" height="408" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-41.png?w=632" alt="" class="wp-image-20071" style="aspect-ratio:1.5490406342154648;width:440px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-41.png 632w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-41-300x194.png 300w" sizes="auto, (max-width: 632px) 100vw, 632px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Pero no es Cayo Hueso la única opción, también tenemos al radar de Pico San Juan. Muchos aducirán que está muy lejos, y es cierto; pero les mostraré una secuencia y luego me dirán si se puede o no se puede usar operativamente los datos del radar de Pico San Juan para dar cobertura a la ciudad de La Habana y pronosticar una tormenta. Dato mata Relato. ¿Alguien recuerda la tormenta del 4 de julio de 2018 en La Habana? <a href="http://www.cubadebate.cu/cuba/2018/07/04/1080015/">http://www.cubadebate.cu/cuba/2018/07/04/1080015/</a></p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-34.png"><img loading="lazy" decoding="async" width="787" height="806" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-34.png?w=787" alt="" class="wp-image-20052" style="aspect-ratio:0.9764341968701031;width:515px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-34.png 787w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-34-293x300.png 293w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-34-768x787.png 768w" sizes="auto, (max-width: 787px) 100vw, 787px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Ahora veamos la secuencia de imágenes, captadas por el radar de Pico San Juan, procesadas por VESTA|ORPG y visualizadas (para el Sistema de Pronósticos por lo interno y para el público en la web, en la página del Centro de Radares), por intermedio de la aplicación VESTA|WebView2. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-33.png"><img loading="lazy" decoding="async" width="487" height="652" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-33.png?w=487" alt="" class="wp-image-20049" style="aspect-ratio:0.7469443512438287;width:498px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-33.png 487w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-33-224x300.png 224w" sizes="auto, (max-width: 487px) 100vw, 487px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Yo no soy meteorólogo, ni mucho menos especialista en pronósticos, si mis lectores lo son, pues saquen sus propias conclusiones si se podía o no haber hecho un pronóstico inmediato para la ciudad de La Habana usando la información que se estaba poniendo (yo la tomé de la web pública, que ahora ya no la están poniendo de cara a Internet) del radar de Pico San Juan. Como pueden ver, el software identificó correctamente la tormenta, la marcó (círculo negro), la siguió (líneas azules) y fue pronosticando (flechas rojas) correctamente su movimiento al oeste. Es cierto que los productos de ORPG en la escala de 460 km (es decir, la que hay que poner cuando el objeto de interés sobrepasa los 230 km, como es el caso este) son muy burdos. Esto sucede porque VESTA|ORPG estaba basado en el Build 12 del ORPG, en el Build 21 y 22, eso está corregido, por eso nuestra nueva versión LAMULA™ORPG está basada en el Build 21 y los productos tienen resolución de 1 km hasta los 430 km, para que no se vean»pixelados» con cuadrículas de 4&#215;4 km<sup>2</sup> como en las imágenes que muestro.</p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">En la unión está la&nbsp;fuerza</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El tercer método para resolver el problema del «hueco», es el que llevo años propugnándolo y ha ido en retroceso, se trata de los Mosaicos, que ya ni siquiera se están generando, por tanto no se muestra en la web del INSMET. En el Mosaico cada radar aporta sus mejores datos, donde no los tiene, como es el caso del cono de silencio sobre los radares, se toman los datos de los radares adyacentes que sí pueden ver bien sobre esa área. Este es uno de los motivos para usar los Mosaicos en lugar del dato de radares individuales; pero no es el único (lea el post <a href="https://meteoradares.wordpress.com/2025/09/25/en-la-union-esta-la-fuerza/">En la Unión está La Fuerz</a>a). Nuestro nuevo visor LAMULA|WebView presenta no solo los datos de Reflectividad, sino también selecciona de forma inteligente y novedosa, las marcas de tormentas, tornados, granizo y mesociclones aportadas por la instancia de LAMULA-ORPG de cada radar. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><a href="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-45.png"><img loading="lazy" decoding="async" width="823" height="562" src="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-45.png?w=823" alt="" class="wp-image-20087" style="aspect-ratio:1.464442680991332;width:531px;height:auto" srcset="https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-45.png 823w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-45-300x205.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2025/10/image-45-768x524.png 768w" sizes="auto, (max-width: 823px) 100vw, 823px" /></a></figure>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Tengo en alta estima el trabajo del sistema nacional de pronósticos a lo largo y ancho del país cuando se trata de los huracanes, los pronósticos de temporada y las alertas tempranas de situaciones que pueden generar fenómenos peligrosos. Sin embargo, por más que <a href="https://meteoradares.wordpress.com/2021/04/27/hitos-cubanos-en-la-actividad-de-los-radares-meteorologicos/">LADETEC</a> dedicó numerosas horas-hombre de nuestros mejores expertos de radar, no hemos logrado que el sistema nacional de pronósticos use los radares en toda su plenitud en la tarea no menos importante que la de los huracanes: el pronóstico inmediato de fenómenos peligrosos. Sé que hay honrosas excepciones, pero no conseguimos adelantarnos aunque sea en 10 minutos a la ocurrencia de esos fenómenos de curso rápido. En general, usan el dato de los radares de modo forense para explicar lo sucedido apoyándose en las imágenes (justo lo mismo que hice yo con la tormenta del 4 de julio del 2018; pero yo no soy pronosticador, solo intento mostrar los beneficios de la tecnología) o para corroborar el pronóstico del día anterior, no para avisar de la inminencia de un tornado. Espero que esa situación mejore, porque <a href="https://meteoradares.wordpress.com/2025/08/10/radares-meteorologicos-costos/">mantener radares es caro</a>. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Si lo desea lea los temas relacionados:</p>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="skUm5H3P5r"><a href="https://meteoradares.wordpress.com/2019/03/21/son-pronosticables-los-tornados/">¿Son pronosticables los&nbsp;tornados?</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«¿Son pronosticables los tornados?» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2019/03/21/son-pronosticables-los-tornados/embed/#?secret=OllDtMp3rU#?secret=skUm5H3P5r" data-secret="skUm5H3P5r" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="l5Jtks1bCd"><a href="https://meteoradares.wordpress.com/2019/03/22/tornados-del-alerta-al-batacazo/">Tornados: Del alerta al&nbsp;batacazo</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«Tornados: Del alerta al batacazo» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2019/03/22/tornados-del-alerta-al-batacazo/embed/#?secret=gUV7kVaJFJ#?secret=l5Jtks1bCd" data-secret="l5Jtks1bCd" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="7jQHC9UBbh"><a href="https://meteoradares.wordpress.com/2025/01/27/pueden-los-radares-doppler-detectar-los-tornados/">¿Pueden los radares Doppler detectar los&nbsp;tornados?</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«¿Pueden los radares Doppler detectar los tornados?» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2025/01/27/pueden-los-radares-doppler-detectar-los-tornados/embed/#?secret=rSzQSwEAHX#?secret=7jQHC9UBbh" data-secret="7jQHC9UBbh" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>

