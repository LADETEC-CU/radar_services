---
title: "El receptor superheterodino: del radio de AM al radar Doppler meteorológico"
date: "2026-06-03"
slug: "el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico"
sourceId: "27896"
sourceUrl: "https://meteoradares.ladetec.com/2026/06/03/el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico/"
sourceHash: "0c8efa0dfa2ec70d"
lang: "es"
excerpt: "Seguramente la mayoría de mis lectores se quedan en el limbo al escuchar que los receptores de radar son «súper heterodinos». Pues bien, no es una palabra de otro mundo como «kriptonita» (que todo el mundo sabe que es la piedra que viene del planeta Kriptón y que le quita los superpoderes a Superman"
canonical: "https://meteoradares.ladetec.com/2026/06/03/el-receptor-superheterodino-del-radio-de-am-al-radar-doppler-meteorologico/"
---


<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png"><img loading="lazy" decoding="async" width="1251" height="596" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png?w=1024" alt="" class="wp-image-28115" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2.png 1251w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-300x143.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-1024x488.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-2-768x366.png 768w" sizes="auto, (max-width: 1251px) 100vw, 1251px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Seguramente la mayoría de mis lectores se quedan en el limbo al escuchar que los receptores de radar son «súper heterodinos». Pues bien, no es una palabra de otro mundo como «kriptonita» (que todo el mundo sabe que es la piedra que viene del planeta Kriptón y que le quita los superpoderes a Superman). La palabra heterodino viene del griego: <em>heteros</em> (diferente) y <em>dynamis</em> (fuerza). En radiofrecuencia, <strong>heterodino</strong> es el proceso de combinar (batir en radiotecnia, multiplicar dos sinusoides en matemáticas) dos señales de distinta frecuencia para obtener nuevas frecuencias: la suma y la diferencia. El prefijo <strong>super</strong> (por encima) indica que la frecuencia resultante (la intermedia, FI) es <em>superior</em> a las frecuencias de audio, lo que permite amplificarla de forma eficiente y estable. Este post es de corte técnico, para que los que lean mi serie histórica: <a href="https://meteoradares.wordpress.com/2026/05/03/radar-doppler-cubano-la-semilla-el-fruto-y-el-olvido-4-la-necesidad-los-obstaculos-y-el-desafio-tecnologico/">Radar Doppler Cubano: La semilla, el fruto y el olvido. 4. La necesidad, los obstáculos y el desafío tecnológico</a> comprendan por qué debíamos buscar un heterodino súper estable.</p>



<!--more-->



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Por qué nació el superheterodino: el problema de la radio AM</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En los años 20, los receptores de radio eran de amplificación directa (TRF). Cada etapa sintonizaba y amplificaba la misma frecuencia de la emisora. El problema: la ganancia de los amplificadores a válvula variaba mucho con la frecuencia (a 1600 kHz amplificaban menos que a 550 kHz) y sintonizar múltiples circuitos era crítico.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">La solución genial de Armstrong (1918, popularizada en los 30) fue:&nbsp;<strong>convertir siempre la frecuencia recibida a una frecuencia intermedia (FI) fija y más baja</strong>&nbsp;(p.ej., 455 kHz). Así, la ganancia y la selectividad se mantienen constantes, independientemente de la emisora sintonizada.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Por qué el radar también adoptó el superheterodino</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Un radar de pulsos necesita detectar ecos extremadamente débiles. El superheterodino aporta:</p>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Ganancia estable y alta</strong>&nbsp;en la FI (hasta 100 dB).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Filtrado selectivo</strong>&nbsp;que define la sensibilidad y resolución.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Detección de fase</strong>: para medir el efecto Doppler, el receptor debe poder comparar la fase de la señal recibida con una referencia. El superheterodino permite hacerlo en la frecuencia intermedia, que es mucho más baja que la frecuencia de microondas en la que transmite y recibe el radar.</li>
</ul>



<h2 class="wp-block-heading"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color"><strong>Esquema básico de un receptor superheterodino para radar</strong></mark></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En los radares soviéticos MRL-5 el oscilador heterodino en ambas longitudes de onda (Banda X, 3.2 cm y Banda S, 10 cm) era transistorizado con un circuito multiplicador de frecuencia por 4). En los radares japoneses RC-32B el oscilador heterodino era un klistrón. El heterodino de los radares MRL-5 era mucho más estable y duradero por ser a semiconductores. Ambos radares fueron diseños de finales de los años 60.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png"><img loading="lazy" decoding="async" width="1024" height="572" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png?w=1024" alt="" class="wp-image-28092" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-300x168.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-768x429.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El oscilador local en radares no-Doppler: estabilidad típica y el Control Automático de Sintonía (AFC)</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Antes de que se quisiera medir el efecto Doppler, los radares meteorológicos usaban, generalmente, transmisores con elemento de salida a <strong>magnetrón</strong>, muy potentes, sencillos y duraderos, pero inestables en frecuencia (la frecuencia de oscilación varía de un pulso transmitido al siguiente). El oscilador local (heterodino) debe seguirlos para mantener la frecuencia intermedia (FI) en el valor establecido, obviamente dentro del ancho de banda del amplificador de FI. Para eso se emplea un <strong>Control Automático de Frecuencia</strong>, aunque en realidad, de lo que se trata es de mantener la <strong>sintonía </strong>entre el transmisor, que es el que decide la frecuencia del radar (por la frecuencia de oscilación del magnetrón) y el receptor que la recibe, pero en inglés se popularizó usar las siglas AFC, de Automatic Frequency Control, referida a controlar la frecuencia del oscilador heterodino en el receptor.</p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png"><img loading="lazy" decoding="async" width="1024" height="572" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png?w=1024" alt="" class="wp-image-28097" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1-300x168.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-1-768x429.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<p class="wp-block-paragraph"><strong>¿Cómo funciona un AFC típico en un radar de magnetrón?</strong></p>



<ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Se toma una pequeña muestra del pulso transmitido (que por supuesto, la duración de la muestra es la misma del pulso transmitido</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Se mezcla con la señal del heterodino para obtener la frecuencia intermedia (FI).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Un&nbsp;<strong>discriminador de frecuencia</strong>&nbsp;(circuito resonante desbalanceado) entrega un voltaje nulo cuando la FI es exactamente la nominal (p.ej., 30 MHz). Si la FI se desvía, el voltaje cambia de signo y magnitud y corre la frecuencia del oscilador local para corregir la desviación.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Un circuito <strong>sample-and-hold</strong> captura ese voltaje de error durante el pulso y lo almacena en un condensador para mantenerlo durante el resto del periodo de repetición, cuando ya no hay muestra del transmisor, porque el pulso transmitido es muy breve con respecto al período en que se repite..</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Ese voltaje se aplica a un&nbsp;<strong>oscilador controlado por voltaje (VCO)</strong>&nbsp;(el heterodino), ajustando su frecuencia para que la FI vuelva al centro del discriminador.</li>
</ol>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El problema está en que la muestra se toma en un intervalo muy pequeño (1-4 microsegundos que es lo que dura el pulso del transmisor), esa muestra genera un voltaje que controla frecuencia del oscilador (heterodino) y debe mantenerse el resto del período hasta que aparezca un nuevo pulso del transmisor. Este período es de 1-2 milisegundos. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El circuito de <strong>sample-and-hold es analógico</strong>, se basa en el voltaje en un condensador; pero este se descarga por fugas y corrientes de polarización. El voltaje aplicado al VCO (heterodino), por tanto <strong>decae</strong> durante todo el periodo de recepción, haciendo que la frecuencia del heterodino vaya variando a lo largo del período (recuerde mi lector, que en el radar, el tiempo de recepción equivale a la distancia del blanco). Los ecos (blancos) lejanos están ligeramente desintonizados, por tanto, la ganancia en el amplificador de FI es peor que al inicio del período. Esta deriva (de cientos de Hz o incluso kHz) es tolerable para un radar en el que solo detectamos la amplitud del blanco, pero mortalmente inadmisible para el Doppler porque el heterodino nos estaría regalando un corrimiento de frecuencia que no es atribuible al efecto Doppler que es lo que deseamos detectar.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Estabilidad típica de los osciladores locales en radares no-Doppler</strong><br>En estos sistemas, la estabilidad de corto plazo solía ser del orden de <strong>10⁻⁵ a 10⁻⁶</strong> (partes por millón). </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El circuito de AFC tiene que cumplir <strong>dos tareas</strong> diferentes para llevar a cabo su misión de mantener la frecuencia del heterodino exactamente a X MHz (donde X es el valor de la FI que escogimos para el radar, en el caso de los radares MRL-5 y RC-32B este valor es de 30 MHz). Estas tareas se llaman <strong>búsqueda </strong>y <strong>seguimiento </strong>y son contradictorias en cuanto a las características del circuito de AFC. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En el momento que se enciende el radar, no se sabe a priori  cuál es la frecuencia del transmisor, por tanto, el AFC debe iniciar un proceso de <strong>búsqueda</strong>, es decir, hace que el heterodino barra dentro de un rango de frecuencias. En el instante en que esta frecuencia sea exactamente igual a X MHz (30 en nuestro caso) por encima de la del transmisor, el discriminador del AFC da cero voltaje a su salida y se produce la <strong>captura</strong>. En lo adelante, el AFC ejecuta el <strong>seguimiento</strong>, manteniendo de un periodo a otro el receptor sintonizado al transmisor. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El AFC de los radares soviéticos MRL-5 era una maravilla. Sin importar cuan lejos estaba la frecuencia del magnetrón de la del heterodino, su barrido enganchaba sin problemas. En los radares japoneses, el rango de barrido era más limitado, había que presintonizar manual. El del MRL-5 me gustaba no solo por su efectividad buscando y siguiendo, sino porque era un fantastrón hecho con UN SOLO transistor de efecto de campo y variándole su punto de operación pasaba de búsqueda a seguimiento y viceversa.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El salto al Doppler: el concepto de coherencia, y dos caminos posibles</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Para medir velocidades de partículas (del orden de 0.5 a 50 m/s) se necesita un receptor&nbsp;<strong>coherente</strong>: debe poder comparar la fase de la señal recibida con una referencia que mantenga la memoria de la fase del pulso transmitido. Existen dos formas de lograr esto:</p>



<ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Transmisor coherente (klistrón, TWT, estado sólido):</strong> El transmisor y el oscilador local se derivan de una misma fuente maestra (STALO, siglas de <em>STable LOcal Oscillator,</em> es decir, un heterodino súper estable). La fase de cada pulso es idéntica y conocida. Es la solución más limpia, pero cara y compleja.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Coherencia en recepción (<em>coherent-on-receive</em>):</strong> Se sigue usando un magnetrón (barato y potente), pero en cada pulso se <strong>captura la fase real con la que el magnetrón radió</strong> (tomando una muestra del pulso transmitido) y se la compara con un oscilador local estable (STALO). Un circuito de corrección (lazo de fase) ajusta la fase de un oscilador coherente (COHO, siglas de <em>Coherent Oscillator</em>) que servirá de referencia durante la recepción de ese pulso. En el pulso siguiente, la fase del magnetrón será diferente, pero el circuito vuelve a engancharse a la nueva fase. De este modo, aunque el magnetrón sea incoherente de pulso a pulso, el receptor se comporta como si lo fuera. <strong>Esta es la técnica que usamos en Cuba para convertir nuestros radares a Doppler.</strong></li>
</ol>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Por tanto, no es obligatorio cambiar el magnetrón por un klistrón. El camino al Doppler pasa por lograr la&nbsp;<strong>coherencia</strong>, y la coherencia en recepción es una solución práctica y elegante. (En otro post discutiremos en detalle la estabilidad de fase de magnetrones, magnetrones coaxiales, klistrones y estado sólido. Aquí solo nos interesa dejar claro que el salto cualitativo es la coherencia, no el tipo de transmisor.)</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El STALO: el corazón estable del radar Doppler</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Tanto en el sistema coherente total como en el coherente en recepción, se necesita un oscilador local de muy alta estabilidad: el&nbsp;<strong>STALO</strong>&nbsp;(<em>Stable Local Oscillator</em>). Su función es proporcionar una frecuencia de referencia contra la cual medir la fase del magnetrón y mezclarse con el eco para obtener la FI. La estabilidad requerida es de al menos&nbsp;<strong>10⁻⁹ a 10⁻¹⁰</strong>&nbsp;(partes por billón), muy por encima de los heterodinos de los radares no-Doppler (10⁻⁶). Pero, ¿cómo se logra esa estabilidad?</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Principio del PLL: la base de todo STALO (analógico y digital)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Todo STALO, ya sea analógico de la vieja escuela o digital moderno, se basa en un <strong>Lazo de Fase y Frecuencia</strong> (<em>Phase Locked Loop</em>, PLL). Un PLL es un circuito realimentado que compara la fase y frecuencia de una señal de salida (generada por un oscilador controlado) con una señal de referencia muy estable. Si hay diferencia, el lazo corrige automáticamente la salida hasta que ambas coinciden en frecuencia y su fase es constante (están «clavadas»).</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Componentes básicos de un PLL</strong></h3>



<ol start="1" class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Oscilador de referencia:</strong> Es la fuente de estabilidad. Típicamente un oscilador de cuarzo (TCXO, OCXO) o un receptor GPS disciplinado que entrega una frecuencia baja y extremadamente estable: 5 MHz, 10 MHz o 100 MHz. La estabilidad a largo plazo del STALO no puede ser mejor que la de esta referencia.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Oscilador controlado:</strong> Genera la frecuencia de salida deseada (p.ej., 9.4 GHz para banda X). En un PLL analógico es un VCO (oscilador controlado por voltaje con diodo varactor). En un PLL digital puede ser un DDS (Síntesis Directa Digital) o un NCO (Oscilador Controlado Numéricamente) combinado con un PLL analógico.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Divisor de frecuencia (÷N):</strong> Reduce la frecuencia de salida (que es alta) dividiéndola por un número entero N, para que sea comparable con la frecuencia de referencia (baja). Por ejemplo, si la referencia es 10 MHz y queremos 9.4 GHz, necesitamos dividir 9.4 GHz / 10 MHz = 940. Así que N = 940.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Detector de fase/frecuencia (PFD):</strong> Compara la señal de referencia con la señal dividida (salida/N). Produce un voltaje proporcional a la diferencia de fase (y frecuencia) entre ambas.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Filtro de lazo (<em>Loop Filter</em>):</strong> Suaviza el voltaje de error y determina la estabilidad dinámica del PLL (tiempo de enganche, rechazo de ruido).</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Realimentación:</strong> El voltaje filtrado se aplica al oscilador controlado para corregir su frecuencia hasta que el error sea cero. En régimen, la salida cumple: <strong>f_salida = N × f_referencia</strong>.</li>
</ol>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>¿Por qué la estabilidad la da el cuarzo o el GPS?</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">La fórmula anterior muestra que la frecuencia de salida es un múltiplo exacto de la frecuencia de referencia. Por tanto, <strong>la estabilidad relativa del STALO (Δf/f) es la misma que la de la referencia</strong>, porque la multiplicación no mejora ni empeora la estabilidad fraccional. Si el cuarzo tiene una estabilidad de 10⁻⁹, el STALO también la tendrá. De ahí la obsesión por usar referencias de alta calidad: OCXO (10⁻⁹ a 10⁻¹¹), o GPS disciplinado (10⁻¹² a 10⁻¹³).</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>PLL analógico vs. PLL digital (sintetizador de frecuencia):</strong></h3>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Analógico:</strong> Todo el circuito es analógico (detector de fase con diodos o multiplicador analógico, VCO con varactor, divisor con contadores digitales rápidos). El filtro de lazo es de componentes discretos (R, C). El enganche es continuo. Típico de los primeros STALO.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Digital:</strong> El detector de fase, el divisor y el filtro se implementan digitalmente (o el DDS reemplaza al VCO y divisor). Se programan mediante registros y tienen ventajas: resolución de fracciones de hercio, conmutación rápida, bajo ruido de fase. <strong>A los PLL digitales que generan una frecuencia de salida programable se les conoce como sintetizadores de frecuencia.</strong> Esta es la tecnología que usamos en nuestros STALO.</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Ejemplo concreto:</strong>&nbsp;Referencia de 10 MHz (estabilidad 10⁻⁹). Queremos un STALO para banda S (2.9 GHz). Elegimos N = 290 (porque 10 MHz × 290 = 2.9 GHz). La frecuencia de salida será 2.9 GHz con estabilidad 10⁻⁹, es decir, deriva absoluta de ±2.9 GHz × 10⁻⁹ = ±2.9 Hz. Ese error produce un error de velocidad Δv ≈ 0.15 m/s (para λ=0.1034 m), perfectamente aceptable. Con GPS disciplinado (10⁻¹²), la deriva es 0.0029 Hz y el error de velocidad 0.00015 m/s, despreciable.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Conclusión del principio:</strong>&nbsp;El STALO no es más que un PLL que multiplica una frecuencia de referencia estable (cuarzo o GPS) hasta la frecuencia de microondas deseada. La tecnología puede ser analógica o digital (sintetizador de frecuencia), pero el principio es el mismo. Es crucial entenderlo porque desmitifica la falsa dicotomía: ambos son PLL, solo cambia la implementación.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Primera generación: PLL analógico con VCO y cristal de horno (OCXO)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Los primeros STALO eran osciladores controlados por voltaje (VCO) enclavados en un lazo analógico. El bloque clave era un&nbsp;<strong>oscilador de referencia de altísima estabilidad</strong>: un cristal de cuarzo cortado especialmente y alojado dentro de un&nbsp;<strong>horno</strong>&nbsp;(OCXO). El horno mantenía el cristal a temperatura constante (50-70 °C), eliminando la deriva térmica.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El PLL analógico comparaba la fase del VCO (dividida) con la del OCXO y realimentaba. El lazo se enganchaba y la frecuencia de salida quedaba fijada con la estabilidad del OCXO (10⁻⁹ a 10⁻¹¹). Eran voluminosos, consumían potencia (por el horno) y requerían ajustes periódicos, pero fueron la base de los primeros radares Doppler.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Segunda generación: enganche a referencia de GPS (10 MHz)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Con los receptores GPS de alta precisión, se dispuso de una referencia de frecuencia absoluta extremadamente estable: la señal de 10 MHz de los receptores GPS disciplinados. Estos contienen un oscilador de cuarzo (no necesariamente de horno) que se corrige continuamente con los satélites, logrando estabilidad a largo plazo de 10⁻¹² a 10⁻¹³.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Enganchar un PLL a esa referencia de 10 MHz permite construir un STALO compacto y sin deriva apreciable, aunque muchos sistemas siguen usando un OCXO interno disciplinado por GPS para mejor corto plazo. Esta solución se popularizó en los años 90-2000.</p>



<h3 class="wp-block-heading" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);"><strong>Tercera generación: sintetizadores de frecuencia (PLL digitales / DDS)</strong></h3>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Cuando nosotros (en Cuba) comenzamos nuestras conversiones a Doppler, ya habíamos avanzado en electrónica digital. Conseguimos STALO <strong>digitales</strong>, es decir, <strong>sintetizadores de frecuencia</strong> (DDS o PLL digitales de alta resolución). Estos dispositivos generan cualquier frecuencia deseada a partir de un oscilador de referencia estable (OCXO o GPS) usando técnicas digitales: acumulador de fase, tabla seno/coseno y DAC. Sin embargo, en el radar del Observatorio Marshall, de la Universidad McGill en Montreal, usaban una variante analógica que se enganchaba a un GPS domesticado.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6"><strong>Ventajas:</strong></p>



<ul class="wp-block-list">
<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Flexibilidad: programables para cambiar de frecuencia rápidamente.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Estabilidad: heredada de la referencia, sin deriva adicional.</li>



<li>Ruido de fase bajo.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Control digital (SPI, I2C) eliminando potenciómetros.</li>



<li style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Tamaño y consumo reducidos.</li>
</ul>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Nosotros utilizamos STALO digitales (sintetizadores de frecuencia) que nos permitieron programar la frecuencia con resolución de hercios y estabilidad de corto plazo &lt;10⁻¹⁰. Fue un salto cualitativo: olvidarnos de deriva, hornos y ajustes.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">La estabilidad del STALO y su impacto en la medición Doppler</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Independientemente de la tecnología (analógica o sintetizador digital), la estabilidad fraccional del STALO es la de su referencia. El error en velocidad Doppler es:<math display="block"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mo>⋅</mo><mo stretchy="false">(</mo><mi mathvariant="normal">Δ</mi><mi>f</mi><mi mathvariant="normal">/</mi><mi>f</mi><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac></mrow></semantics></math>Δ<em>v</em>=2<em>c</em>⋅(Δ<em>f</em>/<em>f</em>)​</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Si la estabilidad es 10⁻⁸, Δv = 1.5 m/s. Para aplicaciones meteorológicas serias se necesita 10⁻⁹ o mejor (Δv ≤ 0.15 m/s). Los STALO con OCXO alcanzan 10⁻⁹ – 10⁻¹¹; con GPS disciplinado 10⁻¹²; los sintetizadores digitales heredan esa estabilidad de su referencia.</p>



<p class="wp-block-paragraph"><strong>Ejemplo por banda (con inestabilidad hipotética de 10 Hz del STALO, caso didáctico):</strong></p>



<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th class="has-text-align-left" data-align="left">Banda</th><th class="has-text-align-left" data-align="left">Frecuencia (MHz)</th><th class="has-text-align-left" data-align="left">λ (cm)</th><th class="has-text-align-left" data-align="left">Error de velocidad por 10 Hz</th></tr></thead><tbody><tr><td>S</td><td>2900</td><td>10.34</td><td>0.52 m/s</td></tr><tr><td>C</td><td>5600</td><td>5.36</td><td>0.27 m/s</td></tr><tr><td>X</td><td>9400</td><td>3.19</td><td>0.16 m/s</td></tr></tbody></table></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">En realidad, un STALO digital referenciado a GPS tiene deriva &lt; 0.01 Hz, error despreciable (&lt;0.001 m/s). Esto permitió que nuestros radares, con magnetrones, midieran velocidades con precisión de centímetros por segundo.</p>



<h2 class="wp-block-heading"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Conclusión</mark></strong></h2>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">El receptor superheterodino, nacido para la radio comercial, se convirtió en la columna vertebral del radar. Pero mientras un receptor de AM tolera osciladores locales inestables, un radar Doppler exige un&nbsp;<strong>STALO</strong>&nbsp;con estabilidad extrema. Los viejos radares soviéticos y cubanos de magnetrón, con su AFC de enganche manual, podían medir reflectividad y dar una vaga indicación de turbulencia, pero no podían medir la velocidad del viento con precisión.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Convertirlos a Doppler no obligó a cambiar el magnetrón por un klistrón: se logró con&nbsp;<strong>coherencia en recepción</strong>, capturando la fase de cada pulso y usando un STALO estable y un lazo de fase (COHO). El componente clave fue el&nbsp;<strong>STALO digital (sintetizador de frecuencia)</strong>&nbsp;que, con referencia de GPS o cuarzo de horno, nos dio la estabilidad necesaria sin complejidades analógicas. Ya no hubo condensadores que se descargan, hornos que fallan ni ajustes manuales. Bastaba programar la frecuencia y dejar que el radar trabajara.</p>



<p class="wp-block-paragraph"><em><strong>Nota para los del bloqueo</strong>: Nada de lo que ven aquí es lo que usamos ahora, esto es solo «de entrenamiento», como dicen los fabricantes cuando no te dan el plano verdadero. Esto es solo para que mis eruditos lectores entiendan el tema.</em></p>



<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png"><img loading="lazy" decoding="async" width="1187" height="679" src="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png?w=1024" alt="" class="wp-image-28116" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3.png 1187w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-300x172.png 300w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-1024x586.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/06/image-3-768x439.png 768w" sizes="auto, (max-width: 1187px) 100vw, 1187px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.294), 17px);line-height:1.6">Pues sí, así como quien se toma una Coca Cola o se fuma un Popular o un Criollo, dominamos el tema del Heterodino súper estable y fabricamos tres radares Doppler 100% cubanos (como el Popular y el Criollo), a pesar de los pesares, gústele a quien le guste y pésele a quien le pese.</p>

