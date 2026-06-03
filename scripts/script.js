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
            
            // Tarjetas de Experiencias Principales
            "titulo-experiencias": "Nuestras Experiencias Estrella",
            "desc-experiencias": "Descubre las actividades más queridas de Las Colcas. Aguas termo-medicinales y aventura viva a orillas del majestuoso río en Yanque.",
            "titulo-pozas": "Pozas Termales",
            "titulo-kayak": "Kayak",
            "label-precio-pozas": "Adulto / Niño (1h)",
            "label-precio-kayak": "Adulto / Niño (1h)",
            "btn-detalles": "Detalles",
            "btn-agendar": "Agendar",
            "btn-ubicacion": "📍 Ubicación",
            
            // Más Actividades (Sección Secundaria)
            "titulo-actividades-sec": "Más Actividades en el Establecimiento",
            "titulo-camping": "Camping",
            "titulo-pesca": "Pesca",
            "titulo-parrilla": "Parrilla",
            
            // Puntos Turísticos de Yanque
            "titulo-puntos-tur": "Puntos Turísticos en camino a las Termas",
            "titulo-mirador": "Mirador del Río Colca",
            "titulo-occolle": "Anfiteatro de Occolle",
            "titulo-tumbas": "Tumbas Colgantes",
            "titulo-uyouyo": "Uyo Uyo",
            
            // Acordeón de Políticas y Preguntas Frecuentes
            "pol-tit-seccion": "Condiciones y Políticas de Reserva",
            "faq-pagos-tit": "💰 Métodos de Pago Disponibles",
            "faq-pagos-desc": "Los pagos se realizan por adelantado y pueden hacerse en efectivo o mediante Yape / Plin.",
            "faq-reserva-tit": "📅 ¿Cómo funcionan las Reservaciones?",
            "faq-reserva-desc": "Las reservas deben realizarse con un mínimo de 8 horas de anticipación, abonando el 50 % del servicio.",
            "faq-cancel-tit": "🛡️ Política de Cancelación y Reembolso",
            "faq-cancel-intro": "El reembolso aplica bajo criterios médicos o fallas del servicio.",
            
            // Sección Artesanías
            "titulo-artesanias": "Artesanías de Yanque",
            "desc-artesanias": "En Las Colcas también valoramos y compartimos la esencia cultural del valle del Cañón del Colca a través de artesanías elaboradas con dedicación e inspiración en las tradiciones andinas de Yanque. Cada pieza refleja el arte, los colores y la identidad de nuestra tierra, combinando trabajo manual, detalles bordados y diseños únicos que transmiten calidez y autenticidad. Entre nuestras creaciones encontrarás bolsos, marcapáginas, individuales bordados y otros productos artesanales hechos con mucho detalle y dedicación por nuestras manos.",
            "titulo-galeria-taller": "Nuestro Taller y Creaciones",
            "titulo-tiktok-seccion": "Nuestros Momentos en Video",
            
            // Sección Pie de Página (Footer)
            "footer-horario-tit": "Horario de Reservas",
            "footer-horario-desc": "Lunes a Domingo<br>7:00 AM – 9:00 PM",
            "footer-contacto-tit": "Contacto Directo",
            "footer-servicios-tit": "Servicios Adicionales",
            "footer-pet-friendly": "Establecimiento Pet Friendly",
            "footer-pagos-locales": "Aceptamos Yape, Plin y Transferencias",
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
            
            // Experience Cards
            "titulo-experiencias": "Our Signature Experiences",
            "desc-experiencias": "Discover the most beloved activities at Las Colcas. Thermo-medicinal waters and live adventure on the banks of the majestic river in Yanque.",
            "titulo-pozas": "Thermal Pools",
            "titulo-kayak": "Kayak",
            "label-precio-pozas": "Adult / Child (1h)",
            "label-precio-kayak": "Adult / Child (1h)",
            "btn-detalles": "Details",
            "btn-agendar": "Book Now",
            "btn-ubicacion": "📍 Location",
            
            // More Activities (Secondary Section)
            "titulo-actividades-sec": "More On-Site Activities",
            "titulo-camping": "Camping",
            "titulo-pesca": "Fishing",
            "titulo-parrilla": "Barbecue",
            
            // Tourist Spots in Yanque
            "titulo-puntos-tur": "Tourist Attractions on the way to the Hot Springs",
            "titulo-mirador": "Colca River Viewpoint",
            "titulo-occolle": "Occolle Amphitheater",
            "titulo-tumbas": "Hanging Tombs",
            "titulo-uyouyo": "Uyo Uyo",
            
            // Booking Policies & FAQ Accordion
            "pol-tit-seccion": "Booking Terms & Policies",
            "faq-pagos-tit": "💰 Available Payment Methods",
            "faq-pagos-desc": "Payments are made in advance and can be settled in cash or via Yape / Plin.",
            "faq-reserva-tit": "📅 How Do Bookings Work?",
            "faq-reserva-desc": "Reservations must be made at least 8 hours in advance, with a 50% deposit of the service cost.",
            "faq-cancel-tit": "🛡️ Cancellation & Refund Policy",
            "faq-cancel-intro": "Refunds apply exclusively under medical criteria or service disruptions.",
            
            // Handicrafts Section
            "titulo-artesanias": "Yanque Handicrafts",
            "desc-artesanias": "At Las Colcas, we also value and share the cultural essence of the Colca Canyon Valley through handicrafts made with dedication and inspired by the Andean traditions of Yanque. Each piece reflects the art, colors, and identity of our land, combining manual work, embroidered details, and unique designs that convey warmth and authenticity. Among our creations, you will find bags, bookmarks, embroidered placemats, and other artisanal products crafted with great detail and dedication by our own hands.",
            "titulo-galeria-taller": "Our Workshop and Creations",
            "titulo-tiktok-seccion": "Our Moments on Video",

            // Footer Section
            "footer-horario-tit": "Booking Schedule",
            "footer-horario-desc": "Monday to Sunday<br>7:00 AM – 9:00 PM",
            "footer-contacto-tit": "Direct Contact",
            "footer-servicios-tit": "Additional Services",
            "footer-pet-friendly": "Pet Friendly Establishment",
            "footer-pagos-locales": "We accept Yape, Plin and Bank Transfers",
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
                // Manejo de saltos de línea estructurados para el horario u otros elementos con HTML interno
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

        // Compartimos el estado del idioma globalmente en el navegador para que otros motores sepan qué leer
        window.currentLanguage = lang;
    }

    // Inicialización del entorno web en idioma nativo español
    window.currentLanguage = "es";

    // Disparadores de eventos al hacer clic sobre los selectores de idioma
    if (btnEs) btnEs.addEventListener("click", () => cambiarIdioma("es"));
    if (btnEn) btnEn.addEventListener("click", () => cambiarIdioma("en"));

});
// NOTA: Deja esta llave abierta, aquí continuarán el resto de las funciones en los próximos pasos.


/* ==========================================================================
   SECCIÓN 2: CONTROLADOR DE VENTANAS MODALES (Inyección Dinámica de Datos)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    //Contenido extendido para los modales informativos detallados (Bilingüe) 
    const infoModales = {
        //Seccion 1: Experiencias estrellas, 
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
            },

//Seccion 2: Actividades secundarias.

            camping: {
                titulo: "Zonas de Camping",
                descripcion: `
                    <p>Las Colcas ofrece el espacio perfecto para vivir una noche diferente y aventurera, compartiendo momentos especiales con amigos o familia.</p>
                    <p>Puedes acampar sobre la arena, a orillas del río Colca, disfrutando de una fogata en medio de la naturaleza e imaginando historias bajo el cielo estrellado. También puedes instalar tu carpa en el área de pasto frente a las aguas termales, en un ambiente tranquilo y acogedor.</p>
                    <p>Vive una experiencia única de descanso y conexión con la naturaleza. Rodeado de montañas, aire puro y el sonido relajante del agua, Las Colcas es el lugar ideal para compartir noches inolvidables en un ambiente seguro y lleno de tranquilidad.</p>
                `
            },
            pesca: {
                titulo: "Pesca de Trucha",
                descripcion: `
                    <p>El río Colca mantiene viva la presencia de truchas y en Las Colcas se forman espacios ideales para disfrutar de la pesca.</p>
                    <p>Si deseas atrapar una trucha y luego cocinarla, aquí podrás vivir esa experiencia rodeado de naturaleza y tranquilidad.</p>
                `
            },
            parrilla: {
                titulo: "Zonas de Parrilla",
                descripcion: `
                    <p>Comparte momentos especiales al aire libre en nuestras zonas de parrilla, diseñadas para disfrutar reuniones familiares, encuentros con amigos y almuerzos rodeados de naturaleza.</p>
                    <p>El paisaje del río, las montañas y el ambiente cálido de Las Colcas convierten cada comida en una experiencia acogedora y memorable.</p>
                `
            },

 //Seccion 3: Puntos turísticos de Yanque. 

 mirador: {
                titulo: "Mirador del Río Colca",
                descripcion: `
                    <p>Contempla una de las vistas más impresionantes del valle desde el mirador natural del río Colca, donde el paisaje andino revela la formación del cañón, las terrazas y las formaciones naturales esculpidas por el paso del tiempo.</p>
                    <p>Es el lugar perfecto para disfrutar de la tranquilidad del entorno, tomar fotografías panorámicas y conectar con la majestuosidad del Colca.</p>
                `
            },
            anfitearo: { // Nota: Mantiene la clave "anfitearo" para coincidir exactamente con tu HTML
                titulo: "Anfiteatro de Occolle",
                descripcion: `
                    <p>El Anfiteatro de Occolle es una impresionante formación natural y agrícola compuesta por andenes construidos en las laderas de las montañas, considerados parte de la herencia ancestral del valle del Colca.</p>
                    <p>Su diseño armonioso con el paisaje muestra el ingenio de las antiguas culturas andinas y ofrece una vista única donde naturaleza e historia se unen en un escenario espectacular.</p>
                `
            },
            tumbas: {
                titulo: "Tumbas Colgantes",
                descripcion: `
                    <p>Existen dos teorías sobre este lugar. Algunas personas mencionan que eran colcas, espacios utilizados para conservar productos alimenticios como habas, maíz y otros cultivos de la zona.</p>
                    <p>Otras personas creen que se trata de tumbas relacionadas con las costumbres y creencias de las culturas preincaicas que habitaron el valle.</p>
                    <p>Hasta la actualidad no se conoce con certeza cuál fue su verdadero propósito, pero estas estructuras pueden observarse claramente desde el puente sifón.</p>
                `
            },
            uyouyo: {
                titulo: "Complejo Arqueológico Uyo Uyo",
                descripcion: `
                    <p>Uyo Uyo es un antiguo complejo arqueológico ubicado cerca de Yanque y considerado uno de los asentamientos más representativos del valle del Colca.</p>
                    <p>Sus caminos de piedra, terrazas y construcciones ancestrales permiten descubrir parte de la historia y organización de las antiguas civilizaciones andinas, en medio de un entorno natural de gran belleza y tranquilidad.</p>
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
            },
//Seccion 2: Actividades secundarias.

            camping: {
                titulo: "Camping Areas",
                descripcion: `
                    <p>Las Colcas offers the perfect space to experience a different and adventurous night, sharing special moments with friends or family.</p>
                    <p>You can camp on the sand along the banks of the Colca River, enjoying a campfire in the middle of nature and imagining stories under the starry sky. You can also pitch your tent on the grass area in front of the hot springs, in a peaceful and cozy atmosphere.</p>
                    <p>Live a unique experience of rest and connection with nature. Surrounded by mountains, fresh air, and the soothing sound of the river, Las Colcas is the ideal place to share unforgettable nights in a safe and tranquil environment.</p>
                `
            },
            pesca: {
                titulo: "Trout Fishing",
                descripcion: `
                    <p>The Colca River keeps the presence of trout alive, and at Las Colcas, ideal spaces are formed to enjoy fishing.</p>
                    <p>If you want to catch a trout and cook it later, here you can live that experience surrounded by nature and tranquility.</p>
                `
            },
            parrilla: {
                titulo: "Grill Zones",
                descripcion: `
                    <p>Share special moments outdoors in our grill areas, designed to enjoy family gatherings, meetings with friends, and lunches surrounded by nature.</p>
                    <p>The river landscape, the mountains, and the warm atmosphere of Las Colcas turn every meal into a cozy and memorable experience.</p>
                `
            },
             //Seccion 3: Puntos turísticos de Yanque. 
mirador: {
                titulo: "Colca River Viewpoint",
                descripcion: `
                    <p>Contemplate one of the most breathtaking views of the valley from the natural viewpoint of the Colca River, where the Andean landscape reveals the canyon formation, ancient terraces, and natural shapes sculpted by time.</p>
                    <p>It is the perfect place to enjoy the tranquility of the surroundings, capture panoramic photographs, and connect with the majesty of Colca.</p>
                `
            },
            anfitearo: {
                titulo: "Occolle Amphitheater",
                descripcion: `
                    <p>The Occolle Amphitheater is an impressive natural and agricultural formation made up of terraces built on the mountainsides, considered part of the ancestral heritage of the Colca Valley.</p>
                    <p>Its harmonious design with the landscape showcases the ingenuity of ancient Andean cultures and offers a unique view where nature and history come together in a spectacular setting.</p>
                `
            },
            tumbas: {
                titulo: "Hanging Tombs",
                descripcion: `
                    <p>There are two theories about this site. Some sources mention that they were colcas, storage facilities used to preserve food products such as fava beans, corn, and other local crops.</p>
                    <p>Others believe they are hanging tombs related to the customs and spiritual beliefs of the pre-Inca cultures that inhabited the valley.</p>
                    <p>To this day, their exact true purpose remains unknown, but these structures can be clearly observed from the siphon bridge.</p>
                `
            },
            uyouyo: {
                titulo: "Uyo Uyo Archaeological Site",
                descripcion: `
                    <p>Uyo Uyo is an ancient archaeological complex located near Yanque, considered one of the most representative historical settlements in the Colca Valley.</p>
                    <p>Its stone paths, terraces, and ancestral structures allow visitors to discover part of the history and social organization of ancient Andean civilizations, surrounded by a natural environment of great beauty and serenity.</p>
                `
            }

        }
    }



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
    const botonesDetalles = document.querySelectorAll(".card-btn-details, .card-btn-details-sec");
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
MOTOR 3 - GALERÍA DINÁMICA DESDE GOOGLE SHEETS
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

/**
 * MOTOR 4: Sistema Autónomo e Independiente de Carga de Imágenes
 * Las Colcas - Yanque (Conexión Directa y Forzada a Formato CSV)
 */
(function() {
    'use strict';

    // 1. CONFIGURACIÓN DEL REPOSITORIO DE DATOS EN VIVO (Formato CSV Asegurado)
    // Usamos el ID del documento base y forzamos la salida limpia de la pestaña con su GID numérico
    const DOCUMENT_ID = 'e/2PACX-1vSccxABPgnZ2bXmu1biB3js9O_6zmoJkpHKuSCKOUbifO1f347AzyOlJRpTeUaqehALwMo4xmYOx72S';
    const GID_TARJETAS = '2121933173'; // El identificador exacto de tu pestaña de tarjetas
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${DOCUMENT_ID}/pub?output=csv&gid=${GID_TARJETAS}`;

    // Mapa de ID: Conecta el 'id' de tu Sheet con el 'id' de la etiqueta <img> en tu HTML
    const MAPA_IMAGENES = {
        'pozo': 'img-pozo',
        'kayak': 'img-kayak',
        'camping': 'img-camping',
        'pesca': 'img-pesca',
        'parrilla': 'img-parrilla',
        'mirador': 'img-mirador',
        'anfitearo': 'img-anfitearo', // ID exacto de tu HTML/Sheet original
        'tumbas': 'img-tumbas',
        'uyouyo': 'img-uyouyo'
    };

    function removerSkeleton(img) {
        const padre = img.closest('.loading-skeleton');
        if (padre) padre.classList.remove('loading-skeleton');
    }

    // Procesador CSV local e independiente
    function parsearCSVLocal(texto) {
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

    async function ejecutarMotor4() {
        try {
            // Consumimos el CSV puro directo de la nube de Google
            const respuesta = await fetch(SHEET_URL);
            if (!respuesta.ok) throw new Error("Google Sheets rechazó la conexión o el enlace CSV no es válido.");
            
            const textoCSV = await respuesta.text();
            const filas = parsearCSVLocal(textoCSV);
            if (filas.length < 2) return;

            // Limpieza extrema de cabeceras para evitar espacios trampa o comillas
            const cabecera = filas[0].map(c => c.replace(/["']/g, '').trim().toLowerCase());
            
            const indexId = cabecera.indexOf('id');
            const indexLink = cabecera.indexOf('link');
            const indexAlt = cabecera.indexOf('alt_texto');

            // Fallbacks posicionales por seguridad si las cabeceras vienen alteradas
            const idxId = indexId !== -1 ? indexId : 0;
            const idxLink = indexLink !== -1 ? indexLink : 1;
            const idxAlt = indexAlt;

            const idsProcesados = new Set();

            for (let i = 1; i < filas.length; i++) {
                const fila = filas[i];
                if (!fila[idxId]) continue;

                // Limpiamos los datos de impurezas del formato CSV
                const idSheet = fila[idxId].replace(/["']/g, '').trim().toLowerCase();
                let urlImg = fila[idxLink] ? fila[idxLink].replace(/["']/g, '').trim() : '';
                const txtAlt = (idxAlt !== -1 && fila[idxAlt]) ? fila[idxAlt].replace(/["']/g, '').trim() : '';

                const idHtml = MAPA_IMAGENES[idSheet];
                
                if (idHtml) {
                    idsProcesados.add(idSheet);
                    const imgElemento = document.getElementById(idHtml);
                    
                    if (imgElemento) {
                        // Si la celda está vacía en Google Sheets, desactivamos el skeleton para ver el HTML base
                        if (!urlImg || urlImg === '') {
                            removerSkeleton(imgElemento);
                            continue;
                        }

                        // Descarga asíncrona controlada en segundo plano
                        const imgTemp = new Image();
                        imgTemp.src = urlImg;
                        
                        imgTemp.onload = () => {
                            imgElemento.src = urlImg;
                            if (txtAlt) imgElemento.alt = txtAlt;
                            removerSkeleton(imgElemento);
                        };
                        
                        imgTemp.onerror = () => {
                            console.warn(`M4: La URL de la imagen para '${idHtml}' no pudo ser cargada.`);
                            removerSkeleton(imgElemento);
                        };
                    }
                }
            }

            // Desactivar skeletons de IDs ausentes en la respuesta del Sheet
            Object.keys(MAPA_IMAGENES).forEach(idSheet => {
                if (!idsProcesados.has(idSheet)) {
                    const idHtml = MAPA_IMAGENES[idSheet];
                    const img = document.getElementById(idHtml);
                    if (img) removerSkeleton(img);
                }
            });

        } catch (error) {
            console.error("Error crítico en Motor 4 dinámico:", error);
            // Si la red falla por completo, liberamos la interfaz quitando todos los skeletons
            Object.values(MAPA_IMAGENES).forEach(id => {
                const img = document.getElementById(id);
                if (img) removerSkeleton(img);
            });
        }
    }

    // Inicializador del disparo independiente
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ejecutarMotor4);
    } else {
        ejecutarMotor4();
    }
})();

/**
 * MOTOR 5: Sistema Autónomo de Videos Verticales (Estilo Reels)
 * Las Colcas - Yanque (Edición Exclusiva para Streaming Directo desde Cloudinary / MP4)
 */
(function() {
    'use strict';

    // 1. CONFIGURACIÓN DEL REPOSITORIO DE VIDEOS (Hoja 3 del Sheet)
    const DOCUMENT_ID = 'e/2PACX-1vSccxABPgnZ2bXmu1biB3js9O_6zmoJkpHKuSCKOUbifO1f347AzyOlJRpTeUaqehALwMo4xmYOx72S';
    const GID_TIKTOK = '713023803'; 
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${DOCUMENT_ID}/pub?output=csv&gid=${GID_TIKTOK}`;

    const CONTENEDOR_DINAMICO = document.getElementById('contenedor-tiktok-dinamico');
    const BTN_PREV = document.getElementById('btn-tiktok-prev');
    const BTN_NEXT = document.getElementById('btn-tiktok-next');

    // Procesador CSV local e independiente
    function parsearCSVLocal(texto) {
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

    /**
     * GENERADOR NATIVO DE VIDEO (Optimizado para Enlaces Cloudinary .mp4)
     * Diseñado quirúrgicamente para adaptación perfecta en pantallas Samsung Galaxy S6 / A21
     */
    function generarEstructuraVideo(url, idVideo, descripcionText) {
        if (!url) return '';
        let urlLimpia = url.replace(/["']/g, '').trim();

        // Si por error pusiste un link de Drive, te damos soporte de fallback temporal,
        // pero lo ideal es usar el enlace de Cloudinary directo.
        if (urlLimpia.includes('drive.google.com')) {
            let idDrive = '';
            if (urlLimpia.includes('/file/d/')) {
                idDrive = urlLimpia.split('/file/d/')[1].split('/')[0];
            } else if (urlLimpia.includes('id=')) {
                idDrive = urlLimpia.split('id=')[1].split('&')[0];
            }
            if (idDrive) {
                urlLimpia = `https://docs.google.com/uc?export=download&id=${idDrive}`;
            }
        }

        // RETORNO DE INTERFAZ: Renderizado HTML5 puro estilo TikTok/Reels
        // El uso de controlslist e inline evita que se abran reproductores nativos del sistema en Galaxy antiguos
        return `
            <div class="video-wrapper" style="width:100%; height:100%; position:relative; background-color:#000; border-radius:12px; overflow:hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                <video 
                    src="${urlLimpia}" 
                    class="tiktok-player" 
                    loop
                    muted
                    controls
                    playsinline 
                    controlslist="nodownload nofullscreen noremoteplayback"
                    disablepictureinpicture
                    preload="metadata"
                    style="width:100%; height:100%; object-fit:cover; object-position:center; display:block; border-radius:12px; background-color:#000;">
                </video>
                <div class="video-overlay" style="position:absolute; bottom:12px; left:10px; right:10px; color:#fff; text-shadow:1px 1px 4px rgba(0,0,0,0.9); pointer-events:none; font-size:0.8rem; font-weight:bold; z-index:10; background:linear-gradient(transparent, rgba(0,0,0,0.7)); padding:20px 10px 8px 10px; border-radius:0 0 12px 12px; box-sizing:border-box;">
                    <p class="video-desc-text" style="margin:0; line-height:1.2; white-space:normal; word-wrap:break-word;">${descripcionText}</p>
                </div>
            </div>`;
    }

    function configurarControlesCarrusel() {
        if (!CONTENEDOR_DINAMICO || !BTN_PREV || !BTN_NEXT) return;

        const obtenerDistanciaDesplazamiento = () => {
            const primeraTarjeta = CONTENEDOR_DINAMICO.querySelector('.tiktok-video-card');
            if (primeraTarjeta) {
                const estiloContenedor = window.getComputedStyle(CONTENEDOR_DINAMICO);
                const gap = parseInt(estiloContenedor.gap) || 16;
                return primeraTarjeta.offsetWidth + gap;
            }
            return 300;
        };

        BTN_PREV.addEventListener('click', () => {
            CONTENEDOR_DINAMICO.scrollBy({ left: -obtenerDistanciaDesplazamiento(), behavior: 'smooth' });
        });

        BTN_NEXT.addEventListener('click', () => {
            CONTENEDOR_DINAMICO.scrollBy({ left: obtenerDistanciaDesplazamiento(), behavior: 'smooth' });
        });
    }

    async function ejecutarMotor5() {
        if (!CONTENEDOR_DINAMICO) return;

        try {
            const respuesta = await fetch(SHEET_URL);
            if (!respuesta.ok) throw new Error("No se pudo conectar con el repositorio.");

            const textoCSV = await respuesta.text();
            const filas = parsearCSVLocal(textoCSV);
            if (filas.length < 2) {
                CONTENEDOR_DINAMICO.innerHTML = '<p style="text-align:center; width:100%;">Pronto subiremos más videos de nuestras experiencias.</p>';
                return;
            }

            const cabecera = filas[0].map(c => c.replace(/["']/g, '').trim().toLowerCase());
            const indexId = cabecera.indexOf('id');
            const indexLink = cabecera.indexOf('link');
            const indexDesc = cabecera.indexOf('descripcion');

            const idxId = indexId !== -1 ? indexId : 0;
            const idxLink = indexLink !== -1 ? indexLink : 1;
            const idxDesc = indexDesc !== -1 ? indexDesc : 2;

            CONTENEDOR_DINAMICO.innerHTML = '';

            for (let i = 1; i < filas.length; i++) {
                const fila = filas[i];
                if (!fila[idxId] || !fila[idxLink]) continue;

                const idVideo = fila[idxId].replace(/["']/g, '').trim();
                const linkOriginal = fila[idxLink].trim();
                const descripcionText = fila[idxDesc] ? fila[idxDesc].replace(/["']/g, '').trim() : 'Momentos Las Colcas';

                const contenidoEstructura = generarEstructuraVideo(linkOriginal, idVideo, descripcionText);

                if (contenidoEstructura) {
                    const tarjetaVideo = document.createElement('div');
                    tarjetaVideo.className = 'tiktok-video-card';
                    tarjetaVideo.setAttribute('data-id', idVideo);
                    tarjetaVideo.innerHTML = contenidoEstructura;

                    CONTENEDOR_DINAMICO.appendChild(tarjetaVideo);
                }
            }

            configurarControlesCarrusel();

        } catch (error) {
            console.error("Error crítico en Motor 5 (Videos):", error);
            if (CONTENEDOR_DINAMICO) {
                CONTENEDOR_DINAMICO.innerHTML = '<p style="text-align:center; width:100%;">Disfruta de nuestros contenidos multimedia en nuestras redes sociales oficiales.</p>';
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ejecutarMotor5);
    } else {
        ejecutarMotor5();
    }
})();