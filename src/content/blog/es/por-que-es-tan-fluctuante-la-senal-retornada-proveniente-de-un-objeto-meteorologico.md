---
title: "¿Por qué es tan fluctuante la señal retornada proveniente de un objeto meteorológico?"
date: "2026-03-01"
slug: "por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico"
sourceId: "24244"
sourceUrl: "https://meteoradares.ladetec.com/2026/03/01/por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico/"
sourceHash: "40618d9d51428363"
lang: "es"
excerpt: "La señal en el osciloscopio revela no solo la intensidad de una tormenta, sino su turbulencia interna. En este artículo explico por qué la fluctuación de los ecos meteorológicos no es ruido, sino la clave para estimar reflectividad, velocidad y peligrosidad mediante procesamiento Doppler, y por qué "
canonical: "https://meteoradares.ladetec.com/2026/03/01/por-que-es-tan-fluctuante-la-senal-retornada-proveniente-de-un-objeto-meteorologico/"
---


<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg"><img loading="lazy" decoding="async" width="1024" height="495" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg?w=1024" alt="Orlando (ingeniero novel) recibiendo explicaciones de José Mario (experimentado jefe del radar MRL-5 de Camagüey) sobre la naturaleza fluctuante de los ecos meteorológicos allá por 1983. Orlando señala ecos en el PPI mientras analiza señales en el A-Scope." class="wp-image-24251" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983.jpg 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983-300x145.jpg 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/mrl5-orlando-mario-1983-768x371.jpg 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.098), 15px);line-height:1.6"><strong><em>La señal en el osciloscopio revela no solo la intensidad de una tormenta, sino su turbulencia interna. En este artículo explico por qué la fluctuación de los ecos meteorológicos no es ruido, sino la clave para estimar reflectividad, velocidad y peligrosidad mediante procesamiento Doppler, y por qué automatizar esta tarea me ha tomado<a href="https://meteoradares.wordpress.com/2021/01/25/radar-meteorologico-cubano-doppler-estrategia-y-tactica/"> toda una vida</a></em></strong>. <strong><em>El procesamiento de las <a href="https://meteoradares.wordpress.com/2026/02/27/senales-en-los-radares-meteorologicos/">señales</a> en los radares meteorológicos es mi pasión.</em></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Desde mis inicios como ingeniero en el radar MRL-5 de Camagüey (el primero de su tipo en Cuba), me resultó fascinante ver lo informativa que resultaban las señales en el osciloscopio (A-Scope) que muestra la amplitud en función de la distancia del eco (tiempo de retorno). Por una parte la amplitud te muestra la intensidad del objeto meteorológico y por otro, el grado de fluctuación de la señal te indica cuan «turbulento» es.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">A la mirada de un experto de radar esta información es muy relevante, en tanto en el indicador PPI se puede cotejar las dimensiones espaciales del eco y su posición con respecto al radar. En aquellos primeros años pensé que sería sencillo automatizar esa detección y estimación de las características del eco para identificar su peligrosidad.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Estaba equivocado, esta tarea me ha tomado toda mi vida laboral y aún estoy enfrascado en ella. En este post trataré de explicar de forma sencilla por qué no es una tarea simple. Para esto hay que zambullirse en la naturaleza de las señales retornadas de objetos meteorológicos (nubes, lluvia, granizo, hielo, etc.). </p>



<!--more-->



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Blancos puntuales y blancos distribuidos</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Lo primero que uno nota en el osciloscopio es que hay ecos muy poco fluctuantes, que son los provenientes de objetos fijos terrestres (torres de televisión y radio, tanques elevados, edificios altos, montañas y colinas) y objetos móviles (aviones y barcos) que aunque se mueven rápido, su señal se percibe en el osciloscopio, en cada instante, como poco fluctuante de un pulso transmitido a otro. A este tipo de blancos solemos llamarlos <strong>Blancos Puntuales</strong>. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Por otra parte tenemos a las señales retornadas de objetos meteorológicos. Estas se muestran como muy «ruidosas» porque el mecanismo de visión del ojo humano y la persistencia de la imagen en el osciloscopio nos permiten ver a la vez la amplitud retornada de varios pulsos transmitidos del radar, es decir, de varias realizaciones de la señal de video a la salida del receptor y por eso la percibimos como muy fluctuantes. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">La fluctuación de la señal de un blanco meteorológico no es un fallo del radar, sino una propiedad física fundamental del objetivo. Mientras que un blanco puntual (como un avión o una torre de televisión) tiene una forma y posición más o menos fija durante la iluminación por el haz del radar, un blanco meteorológico es un conjunto de innumerables partículas (gotas de agua, cristales de hielo, copos de nieve, granizos) en constante movimiento. A diferencia de los blancos puntuales, a estos les llamamos <strong>Blancos Distribuidos</strong> que provienen de objetos meteorológicos. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Es importante señalar que la diferencia fundamental entre los blancos puntuales y los distribuidos radica en la relación entre el el tamaño del blanco y el volumen iluminado por el radar. El volumen iluminado se llama volumen de resolución y sus dimensiones están dadas en dos direcciones. En la dirección axial está dado por la extensión en la distancia del pulso transmitido. En la dirección tangencial alrededor del eje axial, está dado por el ancho del haz de la antena del radar. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">En el volumen de resolución iluminado por el radar generalmente hay <strong>un solo blanco puntual</strong> (<em>si hay más de uno dentro del mismo volumen de resolución, sus ecos se suman y el radar los percibe como un único blanco</em>) y este no llena el volumen de radiolocalización.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">En cambio, para el caso de un <strong>blanco distribuido</strong>, en el volumen de resolución iluminado por el radar hay millones de partículas individuales que llenan el volumen. Los blancos distribuidos suelen ocupar varios kilómetros  y son mucho mayores que este volumen.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">La fluctuación que observamos es el resultado de la interferencia constructiva y destructiva de las ondas reflejadas por cada una de estas partículas. Para un experto en radar, esto se modela estadísticamente y tiene implicaciones directas en cómo procesamos la señal y estimamos variables como la reflectividad o la velocidad. </p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Causas principales</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Estas son las causas principales, explicadas desde el punto de vista del fenómeno físico y su impacto en la señal recibida.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>1. El Movimiento Relativo de las Partículas (La Causa Fundamental)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Este es el mecanismo dominante. Imagina el volumen de resolución del radar (un «pulso» de energía en una dirección y distancia concretas). Dentro de ese volumen hay miles o millones de hidrometeoros.</p>



<ul class="wp-block-list">
<li><strong>Movimiento Diferencial:</strong>&nbsp;Cada partícula se mueve a una velocidad ligeramente diferente debido a la turbulencia, el cizallamiento del viento, o simplemente por su diferente tamaño y peso (velocidad de caída terminal). Unas se acercan al radar, otras se alejan, unas más rápido, otras más lento.</li>



<li><strong>El Efecto Doppler:</strong>&nbsp;Este movimiento diferencial hace que cada partícula refleje la onda con un pequeño desplazamiento Doppler&nbsp;<em>distinto</em>. La señal total que llega al radar es la&nbsp;<strong>suma fasorial</strong>&nbsp;(vectorial) de todas estas contribuciones individuales.</li>



<li><strong>Interferencia:</strong>&nbsp;Como las partículas se mueven, sus fases relativas cambian constantemente. En un instante, muchas ondas pueden sumarse en fase (interferencia constructiva) y la señal total es grande. Un instante después, las fases se han desordenado y pueden cancelarse parcialmente (interferencia destructiva), haciendo que la señal total sea pequeña.</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>En resumen:</strong>&nbsp;Lo que vemos como fluctuación de la amplitud (potencia) de la señal es la consecuencia directa de que los «ecos» individuales se suman y se restan de manera variable en el tiempo. El periodo de esta fluctuación está inversamente relacionado con la anchura del espectro Doppler (la dispersión de velocidades de las partículas).</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>2. El Tamaño, la Forma y la Constante Dieléctrica</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">No todas las partículas son iguales, y esto introduce otra capa de variabilidad, especialmente de un pulso a otro si el volumen iluminado cambia. Esta característica se evidencia cuando el radar meteorológico posee <a href="https://meteoradares.wordpress.com/2025/08/03/doble-polarizacion-ventajas-y-desventajas/">la cualidad polarimétrica</a>.</p>



<ul class="wp-block-list">
<li><strong>Tamaño (Efecto Rayleigh vs. Mie):</strong>&nbsp;La cantidad de energía que retro-dispersa una partícula es extremadamente sensible a su tamaño en relación con la longitud de onda del radar. Una pequeña variación en el tamaño de las gotas más grandes dentro del volumen puede causar una gran variación en la potencia total reflejada. La fluctuación no es solo por la fase, sino también por la «brillantez» cambiante de los dispersores.</li>



<li><strong>Forma y Orientación:</strong>&nbsp;Las gotas grandes no son esféricas, sino que se aplanan. Los cristales de hielo tienen formas complejas. A medida que caen, pueden rotar u oscilar. Un cambio en la orientación de un cristal de hielo plano puede cambiar drásticamente su sección transversal radar (RCS), introduciendo fluctuaciones en la señal.</li>



<li><strong>Cambios de Fase (Agua/Hielo):</strong>&nbsp;La constante dieléctrica del agua líquida es mucho mayor que la del hielo. Si en el volumen de resolución hay una mezcla y las partículas están cambiando de fase (fundiéndose o congelándose), la reflectividad puede fluctuar significativamente.</li>
</ul>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>3. El «Tiempo de Vida» de las Partículas</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Aunque parezca estable, la composición del volumen meteorológico cambia constantemente debido a los <strong>Procesos Microfísicos</strong>. En estos procesos las partículas chocan y se fusionan (coalescencia), se rompen por las turbulencias, se evaporan o subliman. Un hidrometeoro no es una entidad eterna dentro del volumen de resolución. Cuando una gota grande se rompe en varias más pequeñas, o cuando dos colisionan y forman una más grande, la firma radar del conjunto cambia de forma abrupta, contribuyendo a la fluctuación. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Por otra parte, la composición del volumen varía también porque la antena se está moviendo, entonces una parte de las partículas sale del volumen y otras nuevas entran, cambiando la composición del volumen y contribuyendo a la fluctuación de la señal.</p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Consecuencias de la fluctuación para el Procesamiento de las Señales</mark></strong></h2>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>1. Tiempo de Decorrelación</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El tiempo que tarda la señal en fluctuar hasta volverse estadísticamente independiente de su valor anterior se llama&nbsp;<strong>tiempo de decorrelación</strong>. Para la meteorología, este tiempo es muy corto, típicamente del orden de&nbsp;<strong>milisegundos</strong>&nbsp;(debido al movimiento de las partículas). Esto es crucial porque:</p>



<ul class="wp-block-list">
<li>Si promediamos durante un tiempo mayor al de decorrelación, la integración&nbsp;<strong>no será coherente</strong>&nbsp;(la fase ya no es útil), sino que pasaremos a una integración&nbsp;<strong>no coherente</strong>&nbsp;(de potencia o amplitud). Esto es exactamente lo que se hace en los radares meteorológicos para estimar la reflectividad (Z) con precisión.</li>



<li>El famoso&nbsp;<strong>filtro Doppler </strong>(procesamiento Doppler) se usa para estimar la velocidad media y la anchura del espectro (la&nbsp;<em>varianza</em>&nbsp;de velocidades), que es una medida directa de la turbulencia (aunque en determinados casos la cizalladura también produce ensanchamiento del espectro de velocidades) y está relacionada con esta fluctuación.</li>
</ul>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>2. Número de Muestras Independientes</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Para obtener una buena estimación de la potencia media (reflectividad), necesitamos promediar un número suficiente de muestras&nbsp;<em>independientes</em>&nbsp;(separadas en el tiempo más allá del tiempo de decorrelación). Si el tiempo de decorrelación es de 10 ms, y enviamos un pulso cada 1 ms, los pulsos consecutivos estarán correlacionados. Necesitaremos esperar al menos 10 pulsos para obtener una muestra realmente independiente. Por eso los radares meteorológicos a veces utilizan frecuencias de repetición de pulso (PRF) más bajas o procesan bloques de pulsos para asegurar la independencia estadística.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.49), 19px);"><strong>3. Número equivalente de muestras independientes</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">En la práctica operativa, no es posible tomar muestras totalmente independientes porque la antena se está moviendo, entonces es necesario calcular con las <em>N </em>muestras que tomamos cuál sería su efecto en la estimación de los parámetros. Para esto usamos el <strong>Número Equivalente de Muestras Independientes</strong> (comúnmente denotado como <math><semantics><mrow><mi>M</mi></mrow></semantics></math> o <math><semantics><mrow><mi>I</mi></mrow></semantics></math>) que es un concepto fundamental en el procesamiento de señales de radar meteorológico. Define cuántas muestras estadísticamente independientes pueden obtenerse de un conjunto de datos dado, teniendo en cuenta la correlación temporal inherente a la señal debida al movimiento de los hidrometeoros.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Dada una secuencia de <math><semantics><mrow><mi>N</mi></mrow></semantics></math> muestras de la señal compleja (I/Q) procedente de un blanco meteorológico, el número equivalente de muestras independientes <math><semantics><mrow><mi>M</mi></mrow></semantics></math> es el número de muestras que, siendo totalmente independientes, proporcionarían la misma varianza en la estimación de un parámetro (por ejemplo, la potencia media) que las <math><semantics><mrow><mi>N</mi></mrow></semantics></math> muestras correlacionadas disponibles.</p>



<h2 class="wp-block-heading has-medium-font-size"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Conclusión</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">La fluctuación de la señal meteorológica es una&nbsp;<strong>propiedad intrínseca y esencial</strong>&nbsp;del blanco. No es un ruido indeseado que queremos eliminar por completo, sino una&nbsp;<strong>señal portadora de información</strong>&nbsp;sobre la dinámica interna de la tormenta.</p>



<ul class="wp-block-list">
<li>El&nbsp;<strong>cambio de fase</strong>&nbsp;debido al movimiento diferencial nos da información sobre la&nbsp;<strong>turbulencia</strong>&nbsp;(ensanchamiento del espectro Doppler).</li>



<li>El&nbsp;<strong>cambio de amplitud</strong>&nbsp;debido a la distribución de tamaños y formas nos da información sobre la&nbsp;<strong>microfísica</strong>&nbsp;(tipo de hidrometeoro, intensidad de la precipitación).</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El arte del diseño del <a href="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/">procesador radar meteorológico</a> consiste en <strong>promediar lo suficiente para obtener una estimación estable de la reflectividad (Z), pero preservando la información de la fluctuación para extraer la velocidad y la turbulencia (espectro de potencias Doppler)</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<figure class="wp-block-image aligncenter size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png"><img loading="lazy" decoding="async" width="314" height="305" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png?w=314" alt="Dr. Orlando L. Rodríguez González, experto en `procesamiento de las señales en los radares meteorológicos." class="wp-image-24285" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3.png 314w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-3-300x291.png 300w" sizes="auto, (max-width: 314px) 100vw, 314px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El objetivo de este post es dar una breve introducción a tan complejo tema. Si  te ha interesado y quieres profundizar —ya sea por curiosidad o por necesidad profesional— estaré encantado de compartir más. Puedes contactarme para solicitar un curso o entrenamiento, o simplemente para conversar sobre radar. Mientras tanto, te invito a leer <a href="https://www.researchgate.net/publication/297702582_Optimizacion_del_Procesamiento_de_Senales_de_Video_en_el_radar_MRL-5">mi tesis doctoral</a>, donde desarrollo estos conceptos con ejemplos reales del MRL-5. Y si además te apetece conocer <a href="https://meteoradares.wordpress.com/2022/01/15/mas-sabe-el-diablo-por-viejo-que-por-doctor/">las peripecias de cómo llegué a doctorarme</a>… también están ahí.» </p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png"><img loading="lazy" decoding="async" width="975" height="391" src="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png?w=975" alt="Portada de la Tesis en opción del grado de Doctor en Ciencias Técnicas con el título Optimización del Procesamiento de las Señales de Video en los radares MRL-5" class="wp-image-24282" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1.png 975w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1-300x120.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/03/image-1-768x308.png 768w" sizes="auto, (max-width: 975px) 100vw, 975px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"></p>

