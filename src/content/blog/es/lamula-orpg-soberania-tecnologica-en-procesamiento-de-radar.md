---
title: "LAMULA™ ORPG: Soberanía Tecnológica en Procesamiento de Radar"
date: "2026-02-14"
slug: "lamula-orpg-soberania-tecnologica-en-procesamiento-de-radar"
sourceId: "23543"
sourceUrl: "https://meteoradares.ladetec.com/2026/02/14/lamula-orpg-soberania-tecnologica-en-procesamiento-de-radar/"
sourceHash: "2e2fa6a547dd472e"
lang: "es"
excerpt: "LAMULA™ ORPG es una implementación libre y abierta del ORPG Build 19 (Open Radar Product Generator de NEXRAD). Su función principal es el procesamiento secundario de datos crudos de cualquier radar meteorológico convencional, transformando la información volumétrica en bruto en productos visuales y "
canonical: "https://meteoradares.ladetec.com/2026/02/14/lamula-orpg-soberania-tecnologica-en-procesamiento-de-radar/"
---


<figure class="wp-block-image size-large"><a href="https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47.png"><img loading="lazy" decoding="async" width="1024" height="1536" src="https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47.png?w=683" alt="" class="wp-image-23687" srcset="https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47.png 1024w, https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47-200x300.png 200w, https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47-683x1024.png 683w, https://blog-media.ladetec.com/wp-content/uploads/2026/02/image-47-768x1152.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></a></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>LAMULA™ ORPG</strong> es una implementación libre y abierta del&nbsp;<strong>ORPG Build 19</strong>&nbsp;(Open Radar Product Generator de NEXRAD). Su función principal es el&nbsp;<strong>procesamiento secundario</strong>&nbsp;de datos crudos de&nbsp;<em>cualquier</em>&nbsp;radar meteorológico convencional, transformando la información volumétrica en bruto en productos visuales y analíticos de alto valor. Su gran innovación técnica radica en haber modificado el núcleo del algoritmo de&nbsp;<strong>Data Quality Assurance (DQA)</strong>. El ORPG original, a partir de su Build 13, incorporó el&nbsp;<strong>uso obligatorio de variables polarimétricas</strong>&nbsp;en este módulo. LAMULA™ ORPG elimina esta dependencia, haciéndolo compatible con: <strong>Radares no polarimétricos</strong>&nbsp;(como los ocho radares de la red cubana). <strong>Radares Doppler convencionales.</strong> <strong>Radares Doppler polarimétricos modernos</strong>&nbsp;(como los WSR-88DP), sin importar el fabricante. Además, hemos modificado ciertos productos para ofrecer una&nbsp;<strong>resolución espacial mejorada</strong>, adaptándolos a las características específicas de cada radar. En un mercado dominado por ecosistemas cerrados y propietarios (<strong>Rainbow®</strong>,&nbsp;<strong>Edge®</strong>&nbsp;o&nbsp;<strong>Iris®</strong>), LAMULA™ ORPG se posiciona como la herramienta definitiva para servicios meteorológicos y operadores de redes que buscan&nbsp;<strong>independencia tecnológica</strong>. Permite el control total sobre los algoritmos y los datos, eliminando las «cajas negras» de los fabricantes y devolviendo el poder del análisis al experto local.</p>



<!--more-->



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">¿Qué son los Procesadores de Datos?</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Para comprender el valor de LAMULA™ ORPG, es esencial entender el proceso de adquisición y visualización de datos de radar. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Los sistemas de radar meteorológico adquieren la información digitalizando la señal recibida en pequeñas unidades tridimensionales llamadas&nbsp;<strong>celdas</strong>. Estas celdas suelen tener un tamaño de entre 100 y 300 metros, dependiendo de la frecuencia de muestreo. El radar explora el espacio, llenando estas celdas en todas las direcciones (360° en azimut) y a diferentes ángulos de elevación (generalmente de 12 a 14 barridos). Este conjunto de datos brutos se almacena en coordenadas esféricas (distancia, azimut, elevación), formando el archivo de datos nativos del radar. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Sin embargo, este archivo tridimensional es de escasa utilidad práctica para un meteorólogo operativo o un pronosticador. Los humanos necesitamos imágenes «comestibles», mapas planos y coloreados que nos permitan interpretar qué está sucediendo a cientos de kilómetros de distancia.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">El primer paso es disponer de un&nbsp;<strong>Generador de Productos de Radar (RPG)</strong>. Este software procesa el dato crudo y genera los conocidos como «productos» (reflectividad, velocidad, VIL, etc.). Posteriormente, un visor convierte estos productos en imágenes. Cada gran fabricante de radares provee su propio software propietario para este fin: Leonardo Germany (antiguo SELEX, antes Gematronik) utiliza&nbsp;<strong>RAINBOW</strong>. Enterprise Electronics Corporation (EEC) utiliza&nbsp;<strong>EDGE</strong>. Vaisala (que absorbió a Sigmet) utiliza&nbsp;<strong>IRIS</strong>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Frente a estas opciones cerradas, la red de 159 radares NEXRAD de EE. UU. utiliza el RPG, que a inicios de los 2000 se convirtió en un software abierto y pasó a llamarse&nbsp;<strong>ORPG</strong>.</p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">¿Por qué ORPG es el mejor software del mundo?</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Sin duda, ORPG es el software de procesamiento de datos de radar más avanzado del planeta. Para quien lo dude, ofrezco dos argumentos contundentes: </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>La prueba del acero:</strong>&nbsp;Cuando la red NEXRAD modernizó sus procesadores de señal y controladores con los prestigiosos RVP-8 y RCP-8 de la firma Sigmet,&nbsp;<strong>no reemplazó su ORPG por el IRIS de Sigmet</strong>. Esto ocurrió cuando Sigmet Inc. era aún una compañía norteamericana independiente y su producto estrella, IRIS, era una alternativa viable. La decisión de mantener ORPG fue una validación definitiva de su superioridad. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>El poder de la comunidad:</strong>&nbsp;Ningún fabricante comercial puede igualar la potencia de los algoritmos de NEXRAD-ORPG. Estos no fueron creados por un único equipo de una empresa, sino por una nutrida comunidad de decenas de universidades y centros de investigación de Estados Unidos (y de otros países). Una vez implementados en los radares, esta comunidad tuvo acceso a una enorme base de datos con la meteorología diversa de todo EE. UU. durante años, lo que permitió la validación y el ajuste continuo de los algoritmos. Un fabricante de radares, por sí solo, no puede costearse una comunidad científica tan amplia y diversa para desarrollar y perfeccionar sus algoritmos.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Si existiera un software mejor, NEXRAD, con su amplio financiamiento, ya lo tendría.</p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El entorno CODE y su legado</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Para entender por qué existe LAMULA™ ORPG, es necesario conocer&nbsp;<strong>CODE</strong>&nbsp;(Common Operational Development Environment). CODE es la plataforma que permite a usuarios fuera del NWS (National Weather Service) de EE. UU. descargar e instalar una versión de ORPG. Es, en esencia, un entorno de desarrollo que contiene el software y la guía necesarios para crear un «clon» de un generador de productos WSR-88D en una PC Intel con Linux.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">CODE tiene dos usos principales: <strong>Desarrollo de algoritmos:</strong>&nbsp;Los usuarios pueden ejecutar algoritmos existentes y desarrollar los suyos propios mediante la ingesta de datos de nivel 2 del archivo NEXRAD. <strong>Análisis forense:</strong>&nbsp;Permite estudiar eventos climáticos pasados, ingiriendo datos históricos de Nivel 2 obtenidos del sitio web de NCEI (antes NCDC) para recrear y analizar fenómenos.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Es importante destacar que CODE se produce en dos versiones: <strong>Edición del Servicio Meteorológico Nacional:</strong>&nbsp;La versión completa, de distribución limitada a agencias gubernamentales de EE. UU. <strong>Edición Pública:</strong>&nbsp;Destinada al uso público, con ciertos componentes de software propietario eliminados para permitir su distribución fuera del gobierno de EE. UU.</p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">El Linaje cubano: de VESTA a LAMULA</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>LAMULA™ ORPG </strong>no surgió de la nada. Es el heredero de un esfuerzo que comenzó hace casi dos décadas en Cuba. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Una vez concluida la automatización y modernización de la red de radares cubanos en 2006, el&nbsp;<strong><a href="https://meteoradares.wordpress.com/2021/06/03/whitney-project-assimilating-nexrad-orpg-in-cuba/">Proyecto Whitney</a></strong>&nbsp;se puso en marcha con el objetivo de utilizar operativamente el software ORPG del NWS. El resultado, que entró en funcionamiento en 2009 para todos los radares cubanos (y posteriormente para los cinco radares venezolanos), se denominó&nbsp;<strong><a href="https://meteoradares.wordpress.com/2013/04/05/vestaorpg/">VESTA|ORPG</a></strong>. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">Esta fue una hazaña tecnológica, liderada por el Ing. Wilfredo Pozas Pérez de LADETEC, y tuvo tres momentos clave: <strong>Libertad de plataforma:</strong>&nbsp;Wilfredo demostró que era posible montar ORPG sobre&nbsp;<strong>CentOS</strong>, una distribución libre, en lugar de Red Hat Enterprise, que es de pago y la recomendación oficial de CODE. Ahora ya se recomienda esta variante, tal vez tuvimos influencia en eso. <strong>La interfaz con el radar:</strong>&nbsp;Desarrolló un código llamado&nbsp;<strong>RDA-BackEnd</strong>&nbsp;(integrado en su creación previa, VESTA|Distribuidor). Este software lee los archivos «*.obs» de los radares cubanos y los traduce a los mensajes específicos que ORPG requiere para ingestar los datos, simulando a la perfección las acciones del NEXRAD-ORDA. <strong>La visualización:</strong>&nbsp;Para ver los productos de Nivel 3 generados por ORPG, Wilfredo creó&nbsp;<strong>VESTA|WebView</strong>, una aplicación web. Posteriormente, Darío Vázquez Soto desarrolló una segunda versión mejorada,&nbsp;<strong>VESTA|WebView2</strong>.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">LAMULA™ ORPG recoge este legado, lo actualiza a la Build 19 y lo refina, manteniendo el espíritu de soberanía tecnológica y permitiendo su uso por parte de radares no-polarimétricos, como los ocho cubanos.</p>



<p class="has-medium-font-size wp-block-paragraph" style="line-height:1.6"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-blue-color">Funcionalidades: Algoritmos y Productos</mark></strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">LAMULA™ ORPG hereda el impresionante conjunto de algoritmos científicos desarrollados durante más de 30 años para la red NEXRAD. Estos algoritmos no solo generan productos para visualización, sino que analizan los datos en tiempo real para generar alertas tempranas de fenómenos peligrosos. </p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Detección de Tormentas y Fenómenos Peligrosos</strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Storm Cell Identification and Tracking (SCIT):</strong>&nbsp;Identifica y rastrea células de tormenta individuales. <strong>Hail Algorithm:</strong>&nbsp;Calcula la probabilidad de granizo y su tamaño esperado. <strong>Mesocyclone Detection Algorithm:</strong>&nbsp;Detecta rotaciones en la tormenta, precursoras de tornados. <strong>Tornado Detection Algorithm:</strong>&nbsp;Identifica firmas Doppler específicas de tornados.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Precipitación y Contenido de Agua</strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Quantitative Precipitation Estimation (QPE):</strong>&nbsp;Estima la acumulación de lluvia. <strong>Vertically Integrated Liquid (VIL):</strong>&nbsp;Mide la cantidad de agua líquida en la columna atmosférica. <strong>High Resolution VIL (HRVIL):</strong>&nbsp;Versión de mayor resolución del VIL para mejor detalle estructural.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Calidad de Datos y Procesamiento</strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Clutter Mitigation Decision (CMD):</strong>&nbsp;Detecta y filtra ecos fijos (terreno, edificios).<strong>GMAP (Gaussian Model Adaptive Processing):</strong>&nbsp;Filtro avanzado de clutter. <strong>Data Quality Assurance (DQA):</strong>&nbsp;Asegura la calidad de los datos meteorológicos.&nbsp;<em>(Aquí reside la modificación clave de LAMULA™ para radares no polarimétricos)</em>. <strong>MPDA (Multi-Pulse Doppler Algorithm):</strong>&nbsp;Mitiga el aliasamiento (aliasing) de velocidad.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Algoritmos Especializados (Aviación)</strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Machine Intelligent Gust Front Algorithm (MIGFA):</strong>&nbsp;Detecta frentes de rachas para seguridad aérea. <strong>In-flight Icing Detection Algorithm:</strong>&nbsp;Detecta condiciones de engelamiento.</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Tipos de Productos Generados</strong></p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">LAMULA™ ORPG implementa una amplia gama de productos. La disponibilidad de algunos de ellos depende del tipo de radar (Convencional, Doppler o Polarimétrico).</p>



<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th class="has-text-align-left" data-align="left">Categoría</th><th class="has-text-align-left" data-align="left">Productos (Código)</th></tr></thead><tbody><tr><td><strong>Reflectividad</strong></td><td>Base (N0R, N1R&#8230;), Digital (NXQ, NYQ, NZQ&#8230;), Compuesta (NCO, NCR, NCZ), en Capas (NLL, NML, NHL)</td></tr><tr><td><strong>Velocidad</strong></td><td>Base (N0V, N1V&#8230;), Digital (NXU, NYU, NZU&#8230;), Relativa a la Tormenta (N0S, N1S&#8230;), Perfil VAD (NVW)</td></tr><tr><td><strong>Derivados</strong></td><td>VIL (NVL, DVL), Echo Tops (NET, EET), Espectro de Velocidades (NSW)</td></tr><tr><td><strong>Polarimétricos (Dual-Pol)</strong></td><td>Reflectividad Diferencial (ZDR &#8211; N0X&#8230;), Coeficiente de Correlación (CC &#8211; N0C&#8230;), Fase Diferencial Específica (KDP &#8211; N0K&#8230;), Clasificación de Hidrometeoros (HC &#8211; N0H&#8230;)</td></tr><tr><td><strong>Especiales</strong></td><td>Capa de Fusión (ML) &#8211;&nbsp;<em>modificado en LAMULA™ para funcionar sin polarimetría</em>.</td></tr></tbody></table></figure>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6"><strong>Personalización en LAMULA™ ORPG:</strong>&nbsp;Además de la adaptación del DQA, hemos modificado productos como el&nbsp;<strong>Composite Reflectivity</strong>&nbsp;y el&nbsp;<strong>VIL</strong>&nbsp;para que puedan ser calculados dentro de los límites verticales que el usuario desee, optimizando así su resolución y utilidad para cada radar en particular.</p>



<p class="has-text-align-center wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">*****</p>



<p class="wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.392), 18px);line-height:1.6">LAMULA™ ORPG es más que un software; es una declaración de principios. Es la prueba de que la excelencia tecnológica no tiene por qué estar recluida en sistemas caros y cerrados. Al poner el poder del ORPG de NEXRAD al alcance de cualquier red de radares, especialmente aquellas con equipamiento no polarimétrico, ofrecemos un camino hacia la&nbsp;<strong>soberanía tecnológica</strong>, la independencia de proveedores y el control total sobre los datos y algoritmos que definen la vigilancia meteorológica de una nación.</p>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="qZyR2I0DS4"><a href="https://meteoradares.wordpress.com/2026/02/12/lamula-el-nombre-que-forja-la-resiliencia-tecnologica-en-radares/">LAMULA™: El Nombre que Forja la Resiliencia Tecnológica en&nbsp;Radares</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«LAMULA™: El Nombre que Forja la Resiliencia Tecnológica en&nbsp;Radares» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2026/02/12/lamula-el-nombre-que-forja-la-resiliencia-tecnologica-en-radares/embed/#?secret=kQ8fDJ8k9P#?secret=qZyR2I0DS4" data-secret="qZyR2I0DS4" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="GtxLawZqt1"><a href="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/">LAMULA™ DRx-DSP: La Definición de Independencia Tecnológica en&nbsp;Radares</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«LAMULA™ DRx-DSP: La Definición de Independencia Tecnológica en&nbsp;Radares» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2026/02/07/lamula-drx-dsp-la-definicion-de-independencia-tecnologica-en-radares/embed/#?secret=jpRAloG2Hb#?secret=GtxLawZqt1" data-secret="GtxLawZqt1" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="UMNETAotK7"><a href="https://meteoradares.wordpress.com/2026/02/08/lamula-rcp-el-control-del-radar-en-tu-bolsillo/">LAMULA™ RCP: El Control del Radar en tu&nbsp;Bolsillo</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«LAMULA™ RCP: El Control del Radar en tu&nbsp;Bolsillo» — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2026/02/08/lamula-rcp-el-control-del-radar-en-tu-bolsillo/embed/#?secret=SxXAm4j5xu#?secret=UMNETAotK7" data-secret="UMNETAotK7" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed is-type-wp-embed is-provider-radares-mirando-al-sur wp-block-embed-radares-mirando-al-sur"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="VDl00D6nDP"><a href="https://meteoradares.wordpress.com/2026/02/15/lamula-webviewer-la-ventana-abierta-a-tus-datos-de-radar/">LAMULA™ WebViewer: La Ventana Abierta a tus Datos de Radar </a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; visibility: hidden;" title="«LAMULA™ WebViewer: La Ventana Abierta a tus Datos de Radar » — Radares mirando al Sur" src="https://meteoradares.wordpress.com/2026/02/15/lamula-webviewer-la-ventana-abierta-a-tus-datos-de-radar/embed/#?secret=dJb5i60djg#?secret=VDl00D6nDP" data-secret="VDl00D6nDP" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>

