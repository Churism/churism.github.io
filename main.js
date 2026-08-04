<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Conoce más sobre nuestra empresa y equipo">
    <title>Mi Sitio Web - About Us</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap" rel="stylesheet">

    <style>
        /* =============================================
           VARIABLES CSS - TEMA DÍA
           ============================================= */
        :root {
            --bg-color: #fafafa;
            --text-color: #000000;
            --navbar-bg: #f5f5f5;
            --navbar-text: #000000;
            --btn-bg: #ff7227;                      /* NARANJA */
            --btn-text: #ffffff;
            --card-bg: #ffffff;
            --card-shadow: rgba(0,0,0,0.08);
            --footer-bg: #1a1a1a;
            --footer-text: #ffffff;
            --accent-color: #ff7227;                /* NARANJA */
        }

        /* =============================================
           VARIABLES CSS - TEMA NOCHE
           ============================================= */
        body.dark-mode {
            --bg-color: #121212;
            --text-color: #ffffff;
            --navbar-bg: #1a1a1a;
            --navbar-text: #ffffff;
            --btn-bg: #ff7227;                      /* NARANJA */
            --btn-text: #ffffff;
            --card-bg: #1e1e1e;
            --card-shadow: rgba(0,0,0,0.3);
            --footer-bg: #0a0a0a;
            --footer-text: #ffffff;
            --accent-color: #ff7227;                /* NARANJA */
        }

        /* =============================================
           RESET Y BASE
           ============================================= */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            font-family: 'Mochiy Pop One', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            overflow-x: hidden;
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        a { text-decoration: none; color: inherit; transition: 0.3s; }
        img { max-width: 100%; display: block; }
        ul { list-style: none; }

        /* =============================================
           NAVBAR
           ============================================= */
        .navbar {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 40px);
            max-width: 1200px;
            background: var(--navbar-bg);
            z-index: 1000;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .navbar:hover {
            box-shadow: 0 6px 30px rgba(0,0,0,0.15);
            transform: translateX(-50%) translateY(-2px);
        }

        .nav-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .nav-links a {
            color: var(--navbar-text);
            font-weight: bold;
            text-transform: uppercase;
            font-size: 13px;
            padding: 8px 16px;
            border-radius: 25px;
            transition: all 0.3s ease;
        }

        .nav-links a:hover {
            background: var(--btn-bg);
            color: var(--btn-text);
            transform: translateY(-2px);
        }

        /* =============================================
           BOTÓN TEMA
           ============================================= */
        .theme-toggle {
            background: transparent;
            border: 2px solid var(--navbar-text);
            color: var(--navbar-text);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            transition: all 0.3s ease;
            margin-left: 15px;
        }

        .theme-toggle:hover {
            background: var(--btn-bg);
            color: var(--btn-text);
            transform: rotate(15deg) scale(1.1);
            border-color: var(--btn-bg);
        }

        .theme-toggle .icon-sun { display: none; }
        .theme-toggle .icon-moon { display: block; }
        body.dark-mode .theme-toggle .icon-sun { display: block; }
        body.dark-mode .theme-toggle .icon-moon { display: none; }

        /* =============================================
           HERO ESTÁTICO
           ============================================= */
        .hero-static {
            position: relative;
            height: 60vh;
            min-height: 400px;
            width: 100%;
            overflow: hidden;
            margin-top: 0;
        }

        .hero-static img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            z-index: 1;
        }

        .hero-static::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
            z-index: 2;
        }

        .hero-static-content {
            position: relative;
            z-index: 3;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #fff;
            padding: 20px;
        }

        .hero-static-content h1 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            text-transform: uppercase;
            margin-bottom: 20px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        .hero-static-content p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            max-width: 600px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.8);
        }

        /* =============================================
           MISIÓN Y VISIÓN
           ============================================= */
        .mission-section,
        .vision-section {
            padding: 80px 5%;
            max-width: 1200px;
            margin: 0 auto;
            background: var(--card-bg);
            border-radius: 30px;
            box-shadow: 0 4px 20px var(--card-shadow);
            transition: background-color 0.3s ease;
        }

        .mission-section { margin-top: 60px; }
        .vision-section { margin-top: 40px; }
        
        .mv-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .mv-content h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--accent-color);  /* NARANJA */
        }

        .mv-content p {
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .mv-icon {
            font-size: 80px;
            text-align: center;
            margin-bottom: 20px;
        }

        .mv-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 4px 15px var(--card-shadow);
        }

        /* =============================================
           EQUIPO
           ============================================= */
        .team-section {
            padding: 80px 5%;
            max-width: 1200px;
            margin: 60px auto;
            text-align: center;
        }

        .team-section h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .team-section .subtitle {
            font-size: 1.2rem;
            color: #888;
            margin-bottom: 50px;
            opacity: 0.8;
        }

        body.dark-mode .team-section .subtitle {
            color: #aaa;
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        
        .team-card {
            background: var(--card-bg);
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 4px 15px var(--card-shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }

        .team-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 35px var(--card-shadow);
        }

        .team-card-img {
            width: 100%;
            height: 300px;
            overflow: hidden;
        }

        .team-card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .team-card:hover .team-card-img img {
            transform: scale(1.05);
        }

        .team-card-info {
            padding: 25px;
        }

        .team-card-info h3 {
            font-size: 1.4rem;
            margin-bottom: 8px;
        }

        .team-card-info .role {
            font-size: 1rem;
            color: var(--accent-color);  /* NARANJA */
            margin-bottom: 15px;
            display: block;
        }

        .team-card-info p {
            font-size: 0.95rem;
            line-height: 1.6;
            opacity: 0.9;
        }

        .team-social {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }

        .team-social a {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: var(--btn-bg);  /* NARANJA */
            color: var(--btn-text);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .team-social a:hover {
            transform: scale(1.15);
            opacity: 0.8;
        }

        /* =============================================
           FOOTER
           ============================================= */
        footer {
            background: var(--footer-bg);
            color: var(--footer-text);
            text-align: center;
            padding: 50px 20px;
            margin: 80px 20px 20px;
            border-radius: 30px;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        footer:hover {
            box-shadow: 0 6px 30px rgba(0,0,0,0.2);
            transform: translateY(-3px);
        }

        footer a { color: var(--footer-text); text-decoration: underline; }
        footer a:hover { opacity: 0.8; }

        /* =============================================
           RESPONSIVE
           ============================================= */
        @media (max-width: 768px) {
            .navbar {
                top: 10px;
                width: calc(100% - 20px);
                flex-direction: column;
                height: auto;
                padding: 15px;
                border-radius: 30px;
            }

            .nav-links { margin: 15px 0; gap: 10px; }
            .nav-links a { padding: 6px 12px; font-size: 11px; }
            .theme-toggle { margin: 10px auto 0; }

            .hero-static { height: 50vh; min-height: 300px; }
            .hero-static-content h1 { font-size: 2rem; }

            .mv-grid { grid-template-columns: 1fr; }

            .mission-section, .vision-section {
                margin-top: 30px;
                padding: 40px 20px;
            }

            .team-section { padding: 40px 20px; }
            footer { margin: 40px 10px 10px; border-radius: 20px; }
        }
    </style>
</head>
<body>

    <!-- NAVBAR -->
    <nav class="navbar">
        <ul class="nav-links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#about">Nosotros</a></li>
            <li><a href="index.html#servicios">Servicios</a></li>
            <li><a href="index.html#galeria">Galería</a></li>
            <li><a href="index.html#contacto">Contacto</a></li>
            <li><a href="index.html#blog">Blog</a></li>
        </ul>
        <button class="theme-toggle" id="themeToggle" aria-label="Cambiar tema">
            <span class="icon-sun">☀️</span>
            <span class="icon-moon">🌙</span>
        </button>
    </nav>

    <!-- HERO -->
    <section class="hero-static">
        <img src="assets/about-hero.jpg" alt="Sobre Nosotros">
        <div class="hero-static-content">
            <h1>Sobre Nosotros</h1>
            <p>Conoce la historia, misión y visión detrás de nuestra empresa</p>
        </div>
    </section>

    <!-- MISIÓN -->
    <section class="mission-section">
        <div class="mv-grid">
            <div class="mv-content">
                <div class="mv-icon">🎯</div>
                <h2>Nuestra Misión</h2>
                <p>Crear experiencias únicas que inspiren y conecten a las personas con el mundo que las rodea.</p>
            </div>
            <div class="mv-image">
                <img src="assets/mission.jpg" alt="Nuestra Misión">
            </div>
        </div>
    </section>

    <!-- VISIÓN -->
    <section class="vision-section">
        <div class="mv-grid">
            <div class="mv-image">
                <img src="assets/vision.jpg" alt="Nuestra Visión">
            </div>
            <div class="mv-content">
                <div class="mv-icon">👁️</div>
                <h2>Nuestra Visión</h2>
                <p>Ser líderes en innovación y calidad, reconocidos mundialmente por nuestro compromiso con la excelencia.</p>
            </div>
        </div>
    </section>

    <!-- EQUIPO -->
    <section class="team-section">
        <h2>Nuestro Equipo</h2>
        <p class="subtitle">Las personas increíbles detrás de nuestro éxito</p>
        
        <div class="team-grid">
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team1.jpg" alt="María González">
                </div>
                <div class="team-card-info">
                    <h3>María González</h3>
                    <span class="role">CEO & Fundadora</span>
                    <p>Líder visionaria con más de 15 años de experiencia.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
            
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team2.jpg" alt="Carlos Rodríguez">
                </div>
                <div class="team-card-info">
                    <h3>Carlos Rodríguez</h3>
                    <span class="role">Director de Tecnología</span>
                    <p>Ingeniero de software con experiencia en soluciones escalables.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="GitHub">🐙</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
            
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team3.jpg" alt="Ana Martínez">
                </div>
                <div class="team-card-info">
                    <h3>Ana Martínez</h3>
                    <span class="role">Directora de Marketing</span>
                    <p>Experta en estrategias digitales y branding.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
            
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team4.jpg" alt="Luis Fernández">
                </div>
                <div class="team-card-info">
                    <h3>Luis Fernández</h3>
                    <span class="role">Diseñador Principal</span>
                    <p>Creativo especializado en UX/UI.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Behance">🎨</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
            
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team5.jpg" alt="Sofía López">
                </div>
                <div class="team-card-info">
                    <h3>Sofía López</h3>
                    <span class="role">Gerente de Ventas</span>
                    <p>Especialista en relaciones con clientes.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
            
            <div class="team-card">
                <div class="team-card-img">
                    <img src="assets/team6.jpg" alt="David Ruiz">
                </div>
                <div class="team-card-info">
                    <h3>David Ruiz</h3>
                    <span class="role">Coordinador de Proyectos</span>
                    <p>Experto en metodologías ágiles.</p>
                    <div class="team-social">
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Email">📧</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>

    <!-- JAVASCRIPT -->
    <script>
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    </script>
</body>
</html>
