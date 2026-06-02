/* ==========================================================================
   SECCIÓN 1: MOTOR DE TRADUCCIÓN GENERAL (Base Multilenguaje ES / EN)
   ========================================================================== */

// Garantizamos que el árbol de elementos HTML (DOM) esté listo antes de leer selectores
document.addEventListener("DOMContentLoaded", () => {
    
    // Diccionario maestro indexado por claves de traducción correspondientes al HTML
    const traducciones = {
        es: {
            // Navegación
            "nav-inicio": "Inicio",
            "nav-actividades": "Actividades",
            "nav-artesanias": "Artesanías",
            "nav-contacto": "Contáctanos",
            
            // Sección Sobre Nosotros (Filosofía)
            "titulo-filosofia": "Sobre Nosotros",
            "sub-mision": "Misión",
            "text-mision": "En Las Colcas brindamos experiencias de descanso, aventura y conexión con la naturaleza en el corazón del valle del Colca, ofreciendo pozas termales naturales, kayak, camping y espacios recreativos en un entorno tranquilo y seguro. Nos comprometemos a ofrecer un servicio de calidad, haciendo que el visitante construya experiencia inolvidables a la lado de sus amigos , familia o simplemente para el o ella.",
            "sub-vision": "Visión",
            "text-vision": "Ser un destino turístico reconocido en el valle del Colca por ofrecer experiences naturales auténticas, sostenibles con la naturaleza y memorables, destacando por la calidad de nuestros servicios, el cuidado del entorno natural y la promoción de la cultura local, convirtiéndonos en un lugar donde las personas encuentren descanso, aventura y conexión con la esencia del Colca.",
            
            // Tarjetas de Experiencias
            "titulo-experiencias": "Nuestras Experiencias Estrella",
            "desc-experiencias": "Descubre las actividades más queridas de Las Colcas. Aguas termo-medicinales y aventura viva a orillas del majestuoso río en Yanque.",
            "titulo-pozas": "Pozas Termales",
            "titulo-kayak": "Kayak",
            "label-precio-pozas": "Adulto / Niño (1h)",
            "label-precio-kayak": "Adulto / Niño (1h)",
            "btn-detalles": "Detalles",
            "btn-agendar": "Agendar",
            
            // Sección Artesanías
           "titulo-artesanias": "Artesanías de Yanque",
            "desc-artesanias": "En Las Colcas también valoramos y compartimos la esencia cultural del valle del Cañón del Colca a través de artesanías elaboradas con dedicación e inspiración en las tradiciones andinas de Yanque. Cada pieza refleja el arte, los colores y la identidad de nuestra tierra, combinando trabajo manual, detalles bordados y diseños únicos que transmiten calidez y autenticidad. Entre nuestras creaciones encontrarás bolsos, marcapáginas, individuales bordados y otros productos artesanales hechos con mucho detalle y dedicación por nuestras manos.",
            "titulo-galeria-taller": "Nuestro Taller y Creaciones",
            
            // Sección Pie de Página (Footer)
            "footer-horario-tit": "Horario de Reservas",
            "footer-horario-desc": "Lunes a Domingo<br>7:00 AM – 9:00 PM",
            "footer-contacto-tit": "Contacto Directo",
            "footer-ubicacion-tit": "Nuestra Ubicación",
            "footer-ubicacion-desc": "Baños Termales Chininia, Yanque, Valle del Colca, Arequipa, Perú.",
            "ver-mapa": "📍 Ubicación en las Orillas del Río"
        },
        en: {
            // Navigation Links
            "nav-inicio": "Home",
            "nav-actividades": "Activities",
            "nav-artesanias": "Handicrafts",
            "nav-contacto": "Contact",
            
            // About Us Section (Philosophy)
            "titulo-filosofia": "About Us",
            "sub-mision": "Mission",
            "text-mision": "At Las Colcas, we provide experiences of rest, adventure, and connection with nature in the heart of the Colca Valley, offering natural thermal pools, kayaking, camping, and recreational spaces in a quiet and safe environment. We are committed to offering a quality service, ensuring that visitors build unforgettable experiences alongside their friends, family, or simply by themselves.",
            "sub-vision": "Vision",
            "text-vision": "To be a recognized tourist destination in the Colca Valley for offering authentic, sustainable, and memorable natural experiences, standing out for the quality of our services, the care of the natural environment, and the promotion of local culture, becoming a place where people find rest, adventure, and connection with the essence of Colca.",
            
            // Experience Cards (Prices are preserved strictly in Soles 'S/')
            "titulo-experiencias": "Our Signature Experiences",
            "desc-experiencias": "Discover the most beloved activities at Las Colcas. Thermo-medicinal waters and live adventure on the banks of the majestic river in Yanque.",
            "titulo-pozas": "Thermal Pools",
            "titulo-kayak": "Kayak",
            "label-precio-pozas": "Adult / Child (1h)",
            "label-precio-kayak": "Adult / Child (1h)",
            "btn-detalles": "Details",
            "btn-agendar": "Book Now",
            
            // Handicrafts Section
            "titulo-artesanias": "Yanque Handicrafts",
            "desc-artesanias": "At Las Colcas, we also value and share the cultural essence of the Colca Canyon Valley through handicrafts made with dedication and inspired by the Andean traditions of Yanque. Each piece reflects the art, colors, and identity of our land, combining manual work, embroidered details, and unique designs that convey warmth and authenticity. Among our creations, you will find bags, bookmarks, embroidered placemats, and other artisanal products crafted with great detail and dedication by our own hands.",
            "titulo-galeria-taller": "Our Workshop and Creations",

            // Footer Section
            "footer-horario-tit": "Booking Schedule",
            "footer-horario-desc": "Monday to Sunday<br>7:00 AM – 9:00 PM",
            "footer-contacto-tit": "Direct Contact",
            "footer-ubicacion-tit": "Our Location",
            "footer-ubicacion-desc": "Chininia Hot Springs, Yanque, Colca Valley, Arequipa, Peru.",
            "ver-mapa": "📍 Location on the River Banks"
        }
    };

    // Referencias directas a los botones selectores del encabezado
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    // Procesador dinámico de textos estructurales
    function cambiarIdioma(lang) {
        // Buscamos colectivamente cualquier etiqueta que contenga la propiedad de traducción
        const elementos = document.querySelectorAll("[data-translate]");
        
        elementos.forEach(elemento => {
            const clave = elemento.getAttribute("data-translate");
            
            // Si la clave existe dentro de nuestra base de datos lingüística procedemos
            if (traducciones[lang] && traducciones[lang][clave]) {
                // Manejo de saltos de línea con innerHTML para mantener el formato del horario
                if (clave === "footer-horario-desc") {
                    elemento.innerHTML = traducciones[lang][clave];
                } else {
                    elemento.textContent = traducciones[lang][clave];
                }
            }
        });

        // Alternancia de clases de estilo activo para los selectores interactivos
        if (btnEs && btnEn) {
            if (lang === "es") {
                btnEs.classList.add("active");
                btnEn.classList.remove("active");
            } else {
                btnEn.classList.add("active");
                btnEs.classList.remove("active");
            }
        }

        // Compartimos el estado del idioma globalmente en el navegador para que el modal sepa qué leer
        window.currentLanguage = lang;
    }

    // Inicialización del entorno web en idioma nativo español
    window.currentLanguage = "es";

    // Disparadores de eventos al hacer clic sobre los selectores de idioma
    if (btnEs) btnEs.addEventListener("click", () => cambiarIdioma("es"));
    if (btnEn) btnEn.addEventListener("click", () => cambiarIdioma("en"));

});


/* ==========================================================================
   SECCIÓN 2: CONTROLADOR DE VENTANAS MODALES (Inyección Dinámica de Datos)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Contenido extendido para los modales informativos detallados (Bilingüe)
    const infoModales = {
        es: {
            pozas: {
                titulo: "Pozas Termales",
                descripcion: `
                    <p>Las pozas termales están ubicadas a orillas del majestuoso río Colca. Contamos con tres pozas en total: dos pequeñas y una mediana. Una de ellas se encuentra dentro de una cueva de roca, lo que permite que el agua conserve una temperatura aún más cálida.</p>
                    <p>Estas pozas son completamente naturales y emergen directamente de la montaña, manteniendo temperaturas aproximadas entre 39 °C y 40 °C, ideales para disfrutar de una experiencia de relajación y conexión profunda con la naturaleza.</p>
                    <p>Nuestras aguas termales tienen características únicas en comparación con otras termas de Yanque: son cristalinas e inodoras. Además, por su origen natural, contienen minerales como calcio y magnesio, comúnmente presentes en fuentes termales volcánicas, que ayudan a aliviar la tensión muscular, favorecer la relajación física, mejorar la circulación y brindar bienestar general.</p>
                `
            },
            kayak: {
                titulo: "Navegación en Kayak",
                descripcion: `
                    <p>Navegar en kayak por las tranquilas aguas del río del Cañón del Colca es una experiencia que combina aventura, naturaleza y contemplación en uno de los landscapes más especiales de Yanque.</p>
                    <p>Las Colcas está rodeado de imponentes montañas que forman un pequeño cañón esculpido por el río Colca, creando un espacio sereno, seguro y libre de corrientes fuertes, ideal tanto para quienes desean remar por primera vez como para quienes buscan disfrutar del paisaje de una manera diferente.</p>
                    <p>La experiencia incluye chalecos salvavidas, remos y una breve guía con técnicas básicas de remo antes de ingresar al agua, brindando seguridad y confianza durante toda la actividad.</p>
                `
            }
        },
        en: {
            pozas: {
                titulo: "Thermal Pools",
                descripcion: `
                    <p>The thermal pools are located on the banks of the majestic Colca River. We feature three pools in total: two small and one medium-sized. One of them is nestled inside a natural rock cave, allowing the water to retain an even warmer temperature.</p>
                    <p>These pools are completely natural and emerge directly from the mountain, maintaining temperatures between 39°C and 40°C (102°F - 104°F), ideal for enjoying deep relaxation and a profound connection with nature.</p>
                    <p>Our hot springs possess unique features compared to other springs in Yanque: they are crystal clear and odorless. Due to their natural volcanic origin, they contain essential minerals such as calcium and magnesium, which help soothe muscular tension, promote physical relaxation, improve circulation, and enhance overall well-being.</p>
                `
            },
            kayak: {
                titulo: "Kayak Navigation",
                descripcion: `
                    <p>Kayaking through the calm waters of the Colca Canyon River is an experience that perfectly combines adventure, nature, and contemplation in one of Yanque's most breathtaking settings.</p>
                    <p>Las Colcas is surrounded by towering mountains forming a small canyon sculpted by the Colca River, creating a serene, safe space free of strong currents. This makes it ideal both for beginners paddling for the first time and for those seeking to enjoy the scenery from a different perspective.</p>
                    <p>The experience includes life jackets, paddles, and a brief briefing on basic paddling techniques before entering the water, ensuring safety and confidence throughout the entire activity.</p>
                `
            }
        }
    };

    // Mapeo exhaustivo de componentes de la interfaz modal ocultos
    const modal = document.getElementById("modal-dinamico");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalCuerpo = document.getElementById("modal-cuerpo");
    const btnCerrarModal = document.getElementById("modal-cerrar");

    // Función encargada de estructurar el modal según el servicio y el idioma activo
    function abrirModal(servicio) {
        const idiomaActivo = window.currentLanguage || "es";
        
        if (!modal || !modalTitulo || !modalCuerpo || !infoModales[idiomaActivo] || !infoModales[idiomaActivo][servicio]) {
            return;
        }

        // Inyección de textos estructurados
        modalTitulo.textContent = infoModales[idiomaActivo][servicio].titulo;
        modalCuerpo.innerHTML = infoModales[idiomaActivo][servicio].descripcion;

        // Quitamos la clase oculta para permitir que el modal use su display nativo
        modal.classList.remove("hidden");
        
        // Bloqueamos el scroll de fondo
        document.body.style.overflow = "hidden";
    }

    // Función encargada de restaurar el estado original oculto
    function cerrarModal() {
        if (!modal) return;
        
        // Simplemente añadimos de nuevo la clase de control oculto
        modal.classList.add("hidden");
        document.body.style.overflow = ""; 
    }

    // Vinculación de los eventos de clic en los botones de detalles
    const botonesDetalles = document.querySelectorAll(".card-btn-details");
    botonesDetalles.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const servicio = e.target.getAttribute("data-modal");
            abrirModal(servicio);
        });
    });

    // Control de cierre al presionar el botón de aspa (X)
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener("click", cerrarModal);
    }
    
    // Control de cierre de confort al hacer clic en el fondo gris externo
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }

});

/* ==========================================================================
       SECCIÓN 6: MOTOR 3 - GALERÍA DINÁMICA DESDE GOOGLE SHEETS
       ========================================================================== */

    // 1. CONFIGURACIÓN DEL REPOSITORIO DE DATOS REAL DE LAS COLCAS
    const SHEET_ID = 'e/2PACX-1vSccxABPgnZ2bXmu1biB3js9O_6zmoJkpHKuSCKOUbifO1f347AzyOlJRpTeUaqehALwMo4xmYOx72S'; 
    const TAB_NAME = 'Hoja1'; 
    
    // URL optimizada en formato CSV usando el enlace de publicación directo
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/pub?output=csv&sheet=${TAB_NAME}`;

    const contenedorGaleria = document.getElementById("galeria-taller-dinamica");

    // 2. FUNCIÓN PRINCIPAL DEL MOTOR 3
    async function cargarGaleriaDesdeSheets() {
        if (!contenedorGaleria) return;

        try {
            // Hacemos la llamada HTTP para despertar al Sheets en tiempo real
            const respuesta = await fetch(SHEET_URL);
            if (!respuesta.ok) throw new Error("Error de conexión con la base de datos de Sheets");
            
            const textoCsv = await respuesta.text();
            
            // Convertimos el texto CSV crudo en un array limpio de filas y columnas
            const filas = parsearCSV(textoCsv);

            // Si la hoja está vacía o solo tiene los títulos, avisamos al usuario con estilo
            if (filas.length <= 1) {
                contenedorGaleria.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--color-secundario); font-style: italic;">Próximamente más artesanías disponibles...</p>`;
                return;
            }

            // Limpiamos el contenedor (borra cualquier mensaje de carga anterior)
            contenedorGaleria.innerHTML = "";

            // Empezamos en i = 1 para saltarnos la fila de títulos (id, link, titulo)
            for (let i = 1; i < filas.length; i++) {
                const columnas = filas[i];
                
                // Si la fila está rota o no tiene link, la ignoramos para que no rompa la web
                if (columnas.length < 2 || !columnas[1]) continue;

                const id = columnas[0].trim();
                const linkImg = columnas[1].trim();
                // Si no pusiste título, le clavamos uno por defecto muy profesional
                const tituloText = columnas[2] ? columnas[2].trim() : "Artesanía Tradicional - Las Colcas";

                // FABRICAMOS EL CONTENEDOR EN EL DOM (El bloque que tu CSS vuelve cuadrado)
                const itemGaleria = document.createElement("div");
                itemGaleria.classList.add("galeria-item");
                itemGaleria.setAttribute("data-id", id);

                // Inyectamos la imagen con carga perezosa (lazy) para que la web vuele en celulares
                itemGaleria.innerHTML = `
                    <img src="${linkImg}" alt="${tituloText}" title="${tituloText}" loading="lazy">
                `;

                // Lo metemos de cabeza a la malla inteligente (.grid-galeria-taller)
                contenedorGaleria.appendChild(itemGaleria);
            }

        } catch (error) {
            console.error("Falla crítica en Motor 3:", error);
            contenedorGaleria.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--color-secundario);">Hubo un inconveniente al conectar con la galería. Por favor, refresca la página.</p>`;
        }
    }

    // 3. PROCESADOR DE TEXTO PLANO (Parsea las comas y comillas del formato CSV)
    function parsearCSV(texto) {
        const lineas = texto.split(/\r?\n/);
        return lineas.map(linea => {
            const resultado = [];
            let dentroDeComillas = false;
            let entradaActual = "";

            for (let i = 0; i < linea.length; i++) {
                const char = linea[i];
                if (char === '"') {
                    dentroDeComillas = !dentroDeComillas;
                } else if (char === ',' && !dentroDeComillas) {
                    resultado.push(entradaActual);
                    entradaActual = "";
                } else {
                    entradaActual += char;
                }
            }
            resultado.push(entradaActual);
            return resultado;
        });
    }

    // 4. ARRANQUE AUTOMÁTICO
    cargarGaleriaDesdeSheets();