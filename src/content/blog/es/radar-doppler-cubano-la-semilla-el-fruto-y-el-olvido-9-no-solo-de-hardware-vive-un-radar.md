---
title: "Epopeya del Doppler Cubano-9. No solo de hardware «vive» un radar"
date: "2026-06-04"
slug: "radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar"
sourceId: "27941"
sourceUrl: "https://meteoradares.ladetec.com/2026/06/04/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar/"
sourceHash: "d9e8fd2ea4a22101"
lang: "es"
excerpt: "«Epopeya del Doppler Cubano-9» revela el secreto menos visible pero más decisivo del radar Doppler: el software. Este capítulo explica cómo el grupo LADETEC desarrolló el «pegamento» que une las partes de hardware, convirtiéndose en una de las pocas instituciones del mundo capaz de diseñar todo el e"
canonical: "https://meteoradares.ladetec.com/2026/06/04/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-9-no-solo-de-hardware-vive-un-radar/"
---


<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">«Epopeya del Doppler Cubano-9» revela el secreto menos visible pero más decisivo del radar Doppler: el software. Este capítulo explica cómo el grupo LADETEC desarrolló el «pegamento» que une las partes de hardware, convirtiéndose en una de las pocas instituciones del mundo capaz de diseñar todo el ecosistema de software radar: control, adquisición, procesamiento y visualización. Conozca la epopeya de VESTA —desde el VESTA|RDA creado por Marco en el año 2000 (una solución IoT adelantada a su tiempo) hasta la asimilación del procesador Cyclops-D británico, el desarrollo de VESTA|Cíclope, VESTA|RCP y la integración del software ORPG del NEXRAD estadounidense. Descubra cómo el formato de datos OBS y el empeño del autor por mantener un único VESTA|Process para radares Doppler y no-Doppler llevaron a sus programadores —Luisi y Wilfre— al límite de sus capacidades.</p>



<!--more-->



<p class="wp-block-paragraph">«No solo de hardware «vive» un radar» se adentra en el corazón invisible pero vital del radar: el software, ese «pegamento» que une las partes de hardware y las hace funcionar como un sistema coherente. El capítulo argumenta que, a diferencia de ensamblar una computadora con componentes comerciales, fabricar un radar meteorológico completo requiere dominar un ecosistema de aplicaciones de altísima complejidad: control del radar, adquisición de señales, procesamiento primario (cálculo de los momentos Doppler), procesamiento secundario (generación de productos meteorológicos) y visualización. El autor sostiene con orgullo que solo existen en el mundo tantas instituciones capaces de recorrer este camino completo como dedos de una mano, y que LADETEC —ese minúsculo grupo de ingenieros en una ciudad colonial del interior de Cuba, país bloqueado— está en esa élite. El texto repasa el «status quo» anterior al Doppler: el VESTA|RDA (control y adquisición) y el VESTA|Process (procesamiento y visualización), creados por el programador Marco en el año 2000 y 1996 respectivamente, con una arquitectura cliente/servidor e IoT que se adelantó seis años a la conectividad de los radares. Con la llegada del procesador Doppler Cyclops-D, se desató una crisis de integración: la adquisición debía salir del RDA y venir del procesador externo, lo que exigió crear VESTA|Cíclope (la nueva adquisición, asimilada por Luisi) y VESTA|RCP (nuevo control, programado en Borland Delphi), dos ejecutables en lenguajes diferentes que debían comunicarse en tiempo real. Pero el mayor desafío fue mantener un único VESTA|Process que asimilara tanto los datos Doppler (Z, V, W) del nuevo radar como los datos históricos y actuales de los radares no-Doppler (solo Z). Gracias al formato de archivos OBS, diseñado por Marco en 1996 con una flexibilidad y una súper resolución revolucionarias —que permitía guardar la varianza de los valores de potencia, proporcional a la turbulencia—, el autor impuso a Luisi y a Wilfre una «misión imposible» que lograron con éxito. El capítulo culmina con la integración del software ORPG del NEXRAD estadounidense (VESTA|ORPG) y VESTA|WEBView, que en 2010-2011 llevó a todos los radares cubanos productos terciarios como detección automática de tormentas, granizo, tornados y mesociclones, demostrando que el software cubano no solo igualaba sino que superaba en muchos aspectos al de los líderes mundiales —aunque la historia del Doppler aún guardaba muchos otros problemas por resolver. Aquí va narrado en primera persona.</p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El «pegamento» para unir las partes</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Hoy en día, con un conocimiento ligeramente avanzado, cualquier técnico adquiere las partes y se arma una computadora, luego adquiere Windows o se busca una distribución gratuita de Linux y listo, ya la tiene funcionando. Si es un emprendedor, puede montar un puestecito de barrio y vender los clones que arma, que tienen tres ventajas principales: 1) lo arma con las prestaciones que el cliente desee (asesoría incluida), 2) lo vende a un precio menor que el precio de las computadoras que vienen bajo una firma reputada y 3) él siempre está allí para el servicio de postventa, no hay que ir a un lejano centro especializado. El cliente decide: comprar «hecho» con el sello de garantía de un grande o aceptar los servicios del emprendedor de barrio, que es una persona conocida en quien ha confiado para comprar repuestos, insumos y hasta para reparaciones menores. Este es el eterno dilema: <a href="https://meteoradares.wordpress.com/2024/03/25/fabricar-o-comprar-fabricado/">¿Fabricar o comprar&nbsp;«fabricado»?</a></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Con los radares pasa más o menos lo mismo, algunos ingenieros de radar pueden comprar las diferentes partes que componen un transmisor, un receptor y una antena y ensamblar para un cliente un radar completo. Es un conocimiento de dominio público, no hay secretos (aunque tampoco es para makers y DIY). Los parámetros y prestaciones responderán al diseño y las prestaciones de las partes compradas. Sin embargo, a diferencia de las computadoras, hay un elemento que no está al doblar de la esquina: <strong>el software</strong>. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Es justamente el software el que decide quién puede fabricar un radar y quien puede solamente ensamblar las partes y recurrir a un tercero (o a varios) para que les eche ese «pegamento» que une las partes y las hace funcionar. Sobran los dedos de las manos para contar cuántos pueden hacerlo en el mundo. Orgullosamente, <a href="https://meteoradares.wordpress.com/2023/09/26/la-brecha-en-el-muro/">LADETEC</a>, ese grupito minúsculo de ingenieros, perdido <a href="https://meteoradares.wordpress.com/2025/01/13/ladetec-y-el-camaguey-legendario/">en una ciudad colonial</a> del interior de Cuba, país del tercer mundo, además, bloqueado por EE.UU., está en esa élite. Cómo llegamos hasta allí es una historia larga de <a href="https://meteoradares.wordpress.com/2021/04/27/hitos-cubanos-en-la-actividad-de-los-radares-meteorologicos/">éxitos</a>, <a href="https://metarmaeoradares.wordpress.com/2023/05/20/caminante-no-hay-camino-se-hace-camino-almontar-radares">todo un camino</a>, vayamos mejor a lo que nos interesa: el Doppler y el software, que no solo de hardware «vive» un radar.</p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">¿Qué es el software de los radares meteorológicos?</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pues resulta lo mismo que con el hardware. Si a un ingeniero de radar le preguntan ¿qué cosa es el hardware de un radar? les explicará de transmisores, receptores, guías de onda, antenas, fuentes de alimentación &#8230; en fin, no es UNA COSA uniforme, son muchas cosas. El software es igual, son muchas partes que contribuyen a un todo. Igual que Leonardo-Ichi ha sido el ingeniero integrador de radar, yo he sido el ingeniero integrador de software, sin ser programador; pero entendiéndolo bien todo. Así pues, hablamos de un conjunto de módulos o aplicaciones, cada uno con sus funciones y características propias. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Veamos las funciones. El software se encarga de adquirir las señales, procesarlas, convertirlas en datos, empaquetarlos, procesar los datos (y archivarlos), convertirlos en imágenes, y visualizar estas imágenes (local y remoto). Por otra parte el software debe <a href="https://meteoradares.wordpress.com/2021/04/20/radar-meteorologico-cubano-doppler-automatica-de-control/">controlar todo en el radar</a> y ejecutar todas las operaciones necesarias para explorar la atmósfera en diferentes regímenes. Obviamente, es «mucho para un cartucho». Son aplicaciones con características muy diferentes. Si el inquieto lector desea profundizar con ejemplos lea: <a href="https://meteoradares.wordpress.com/2023/05/24/radares-meteorologicos-aspectos-informaticos/">Radares meteorológicos: aspectos&nbsp;informáticos</a>.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Status quo antes del Doppler</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><a href="https://meteoradares.wordpress.com/2023/09/16/hablando-de-monstruos-marco/">Marco</a>, que llegó a nosotros recién graduado con apenas 22 años en 1995, ya era un super programador, participó activamente en el diseño de los prototipos industriales ELBRUS y FUJI y en el 2000 se fue a hacer una maestría y «no consiguió pasaje de regreso». Marco nos dejó todo tan bien hecho que se sigue usando hoy (escribo esto en mayo del 2026) en los radares. Marco desarrolló en el año 2000 una aplicación cliente/servidor (VESTA|RDA) que se encarga del control total del radar, y de la adquisición, procesamiento, empaquetamiento y transmisión de los datos (una aplicación IoT cuando faltaban seis años para que los radares tuvieran conectividad y el mundo comenzara a hablar de eso). Por otra parte, desde 1996 había desarrollado una aplicación de escritorio (VESTA|Process) para la generación de productos a partir de los datos (que aún no existían, hasta 1997), construcción de imágenes y visualización de las mismas. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Teníamos una completitud de funciones perfecta. Marco era su propio integrador, el hacía las dos partes: adquiría el dato y lo procesaba y todos felices. Pero pasó como con <a href="https://meteoradares.wordpress.com/2026/04/09/oriente-medio-9-el-islam-fe-caligrafia-un-solo-dios-y-muchas-huries-en-el-paraiso/">Mahoma</a>, al irse Marco «el mundo» se dividió en «<a href="https://meteoradares.wordpress.com/2026/04/04/oriente-medio-6-la-herida-de-karbala-como-una-disputa-de-hace-1-400-anos-los-sigue-dividiendo/">sunitas y chiítas</a>«. Uff, desvarío con mi serie de Oriente Medio. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">La vida no es estática, hay que ir cambiando para adaptarse. Robert se hizo cargo del VESTA|RDA y le introdujo modificaciones que se fueron necesitando, pero Robert es «un tipo de hardware». Luego vino Wilfredito (Wilfredo José Pozas Pérez, ingeniero eléctrico) y se encargó de las modificaciones y adiciones necesarias a VESTA|Process (y además creó otras como VESTA|Distribuidor, VESTA|Mosaico y muchas otras). A partir de ahí, para garantizar la continuidad del proyecto tuve que convertirme en el integrador-mediador.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Los problemas de software con el Doppler</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En realidad, desde 1988, cuando se hizo el HERMES, yo siempre fui el albacea, el depositario de todo el software que se hizo para el radar (HERMES, Operador Automático. RADEX, ARGOS y bueno, luego VESTA|Process). Yo no sabia lo suficiente para haberlo programado yo, pero sí lo suficiente para hacer modificaciones ligeras y para explicárselo al sucesor. Esta cualidad, bastante opaca (no mucho de qué vanagloriarme), fue decisiva para lo que vino con el Doppler y en general, para la continuidad de todo lo que hemos hecho de radar.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El control del radar era un asunto consolidado, muy bien hecho y lo que iba haciendo falta introducir o modificar, Robert lo iba resolviendo. Sin embargo, yo estaba muy consciente que para asimilar un procesador de señales Doppler necesitaríamos cambios radicales que solo un  programador avanzado podría lograr. Buscando por toda partes y a sugerencia de Marco, dimos con su hermano Luisi (Jorge Luis Pérez Saavedra) que trabajaba en la Delegación de la Agricultura, en un grupo de redes informáticas. Cuando se hizo público lo del Doppler muchas personas fueron solidarias, era un asunto de prioridad nacional —lo había dicho el Comandante en la TV— y nos prestaron a Luisi, tanto tiempo que Luisi pasó a nuestra plantilla. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">La tarea era separar el sistema de adquisición (digitalización de la señal de video y su promediación), que estaba integrado en la aplicación VESTA|RDA junto con el control del radar. La adquisición ahora vendría de un procesador de señales Doppler, es decir, de fuera del RDA. Finalmente, el procesador Doppler (que calcula los momentos M0, M1 y M2 y entrega Reflectividad, Velocidad y Ancho Espectral) fue el de los ingleses y Luisi lo adaptó a nuestro radar y nuestras tareas, diferentes de las de los ingleses. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Por el otro lado estaba Wilfre con una tarea no menos titánica: hacer que el sistema de procesamiento secundario (VESTA|Process hasta ese momento) pudiera asimilar los datos (Z,V,W) de <strong>nuestro </strong>radar y mostrarlos al igual que se hacía con el dato de Reflectividad (Z) que calculaba VESTA|RDA. Fíjese mi lector que recalco que la tarea era visualizar con VESTA|Process datos Doppler (V y W) de <strong>nuestro </strong>radar. Ya Marco en sus estudios de maestría y yo en mis pasantías en Canadá, EE.UU. e Italia, habíamos usado VESTA|Process para visualizar datos Doppler y Polarimétricos de <strong>otros </strong>radares.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">VESTA|Cíclope (la nueva adquisición) y VESTA|RCP (el nuevo control)</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Cada una de las cosas que describo amerita un post técnico, pero aquí me limito a la historia. Luisi asimiló el software  de procesador de señales de Cyclops-D, separó la antigua adquisición que hacíamos en el radar (digitalizar el video y promediarlo) en el VESTA|RDA y armó un nuevo sistema de control (VESTA|RCP). No era un asunto sencillo, porque VESTA|RCP seguía teniendo las funciones de interfaz con el usuario para modificar los parámetros de la adquisición Doppler (el sistema inglés es rígido, nunca se modifican los parámetros de la adquisición como tamaño en distancia y ancho del sector angular, cantidad de celdas, en Cyclops-D todo está «soldado») y además, la función de empaquetar los datos que salen del VESTA|Cíclope. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Tremendamente complejo el asunto, son dos aplicaciones (VESTA|Cíclope y VESTA!RCP), dos ejecutables (uno programado en Borland C++ y el otro en Borland Delphi, es decir Pascal), corriendo sobre Windows (por suerte apareció XP) y hablándose en tiempo real para garantizar la ejecución de observaciones completas de la atmósfera. No fueron pocos los escollos prácticos que Luisi tuvo que vencer, enyugar a esas dos bestias en una misma yunta fue una terea de programación de altos quilates. Programarlo todo desde cero (supongo que es lo que Marco hubiese gustado hacer) hubiese sido más fácil, pero no teníamos tiempo. </p>



<h2 class="wp-block-heading" style="font-size:clamp(20px, 1.25rem + ((1vw - 3.2px) * 1.176), 32px);"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El dilema del formato</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Aquí viene la parte en que tuve que actuar de réferi y sumergirme profundamente en la esencia de VESTA|RDA, VESTA|Cíclope y VESTA|Process. El sistema de procesamiento (VESTA|Process) había sido programado en 1996 para asimilar los archivos de datos que aún no teníamos y que solo tuvimos un año después. El formato de las observaciones (*.obs) era algo que Marco y yo habíamos elaborado basado en toda la herencia previa que yo traía (del HERMES, del RADEX y del ARGOS) en la cual yo tenía amplia experiencia.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Afortunadamente, el obs (de 1996-97) no se hizo como yo tenía en mente. Marco me propuso una estructura que conservaba lo que yo quería (la súper resolución), pero que fue mucho más flexible y totalmente revolucionaria. Afortunadamente también, yo seguía apegado a hacer con medios digitales lo que había sido el Dispositivo Indicador de Turbulencia de 1983. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Marco me hizo una estructura (aparte de lo de la super resolución) que me permitía guardar no solo los valores de potencia recibida, sino también la varianza de estos valores de potencia (proporcional a la turbulencia del objeto meteorológico). Esto fue lo que nos salvó para el Doppler. Digo que nos «salvó», pero el problema no era tan grave para el nuevo radar Doppler, como para la continuidad de los datos. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Yo quería algo casi imposible: ¡un solo VESTA|Process! que asimilara, procesara y visualizara los datos del nuevo radar Doppler (Z, V, W) y también los datos (históricos y actuales) de los otros radares (solo Z). Les estaba dando a Luisi y a Wilfre una «misión imposible». Diseñamos cuidadosamente «en papel» cómo sería una obs del radar Doppler y trabajamos sobre ella. Luisi para garantizar que los datos cumplieran con ese nuevo estándar y Wilfre para lograr que VESTA|Process los leyera. Yo para chequear que finalmente las dos «carreteras» se acoplara en un punto sin fracturas. Y no fue fácil. Aún le debo a mis lectores un post para cada uno de estos dos «monstruos»: Wilfre y Luisi,  su aporte fue decisivo y extraordinario, mi admiración por su talento y mi agradecimiento por su esfuerzo son eternos.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">La otra solución, la fácil, era dejar a VESTA|Process para procesar y visualizar solo los datos de los otros radares y hacer un VESTA|Process-D para el radar de Camagüey. Dios me juzgará el Día del Juicio Final y decidirá si fue correcto o no lo que les pedí. El caso es que Wilfre y Luisi lograron la hazaña (Marco me apoyó y asesoró todo el tiempo), hoy hay un VESTA|Process que asimila los datos de ambos tipos de radares (los 3 Doppler y los 5 no-Doppler) y también de otros muchos tipos de radares foráneos.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Mas allá de VESTA|Process</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Este tema sí lo he explicado con detalle en dos posts (<a href="https://meteoradares.wordpress.com/2013/04/05/vestaorpg/">VESTA|ORPG</a> y <a href="https://meteoradares.wordpress.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/">Project «Whitney»: assimilating NEXRAD-ORPG in&nbsp;Cuba</a>). En el año 2009 Wilfredo me propuso que asimiláramos el software ORPG (siglas de <em>Open Radar Product Generator</em>) que es el software que usan los radares del NEXRAD (de la red de EE.UU.) y que recién (creo que salió en 2007) se había creado la plataforma CODE (siglas de<em> Common Operational Development Environment</em>) para uso libre y abierto. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Yo, desde varios años antes, tenía ese software en papel, no pirateado, me lo habían mandado oficialmente, mucho antes de que fuera libre y abierto; pero esa es otra historia. También en mi estancia en EE.UU. pude verlo en acción. Yo acogí favorablemente la idea de Wilfre porque este software trae no solo productos como los del VESTA|Process, sino productos terciarios: software de detección y seguimiento automático de tormentas, granizo, tornados, mesociclones y frentes de racha.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Como ORPG es solamente un generador de productos (sin visualización), Wilfre pensó, muy acertadamente, en que la visualización de los productos se hiciera en cualquier navegador web y para esto mejoró su propio software anterior, VESTA|WEB, y lo llamó VESTA|WEBView y se introdujo en todos los radares cubanos en 2010-2011, antecediendo al radar Doppler de Camagüey que no estuvo listo hasta el 2012. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">A la aplicación consistente en la adaptación de los datos de entrada de nuestros radares para hacer funcionar el ORPG, y acoplar su salida para ser visualizada por medio de VESTA|WebView se llamó VESTA|ORPG. Esta aplicación funcionó con éxito con los cinco radares venezolanos también.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pues sí estimados lectores, el tema del software para un radar moderno es extremadamente complicado. En un extremo tenemos las señales eléctricas que pasan por todo el sistema receptor analógico hasta que comienza su digitalización en la frecuencia intermedia, en el otro extremos tenemos la interpretación meteorológica que va dentro del software. La misión consiste en convertir señales eléctricas (amplitud y fase de una sinusoide) en imágenes que al verlas tengan un significado para el meteorólogo. Uno puede decir que fabricó un radar Doppler cuando el meteorólogo ve estas imágenes y saca conclusiones para elaborar un aviso de fenómeno peligroso. No muchos pueden recorrer ese camino completo, nosotros en LADETEC tenemos el know-how y por eso fabricamos tres radares Doppler para el servicio meteorológico cubano. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pero calma, impaciente lector, aún quedan otros muchos problemas por resolver antes de agosto del 2012.</p>

