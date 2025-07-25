<?php
require_once "valoration/userCorrect.php";
session_start();
$userOK = false;
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ors Store</title>
    <meta name="description" content="Descubre y descarga las mejores aplicaciones para dispositivos móviles en nuestra tienda. Amplia selección en diversas categorías, actualizaciones regulares y experiencia segura. Haz que tu dispositivo sea más poderoso y personalizado con nuestras aplicaciones de calidad.">
    <link rel="shortcut icon" href="icon 64.png" type="image/x-icon">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/appbar.css">
    <link rel="stylesheet" href="css/ripple.css">
    <link rel="stylesheet" href="css/carrousel.css">
    <link rel="stylesheet" href="css/carrouselCardClick.css">
    <link rel="stylesheet" href="css/detailView.css">
    <link rel="stylesheet" href="css/writeValoration.css">
    <link rel="stylesheet" href="css/CandyButtons/candyButtons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-01BQ22MDW3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-01BQ22MDW3');
    </script>

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Carter+One&family=Comfortaa&family=Fasthand&family=Foldit&family=Frijole&family=Great+Vibes&family=Kablammo&family=Lobster&family=Luckiest+Guy&family=Monoton&family=Press+Start+2P&family=Yellowtail&display=swap" rel="stylesheet">
    <style>
        body {
            transition: 500ms all;
            background-color: #212121;
            /* background-color: #e2e2e2; */
        }
    </style>
    <style>
        /* width */
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    </style>
    <style>
      main + div {
        display: none !important;
      }
    </style>
    <!-- https://fonts.google.com/share?selection.family=Carter%2BOne%7CComfortaa%7CFasthand%7CFoldit%7CFrijole%7CGreat%2BVibes%7CKablammo%7CLobster%7CLuckiest%2BGuy%7CMonoton%7CPress%2BStart%2B2P%7CYellowtail -->
</head>

<body>
    <appbar>
        <div class="title">Ors Store</div>
        <div class="phrases"></div>
    </appbar>
    <nav class="text-end me-4" style="align-content: center;">
        <?php
        if ($userCorrect->check($_SESSION['username'], $_SESSION['password'])) {
            $userOK = true;
        ?>
            <button class="btn btn-secondary">Hola @<?php echo $_SESSION['username']; ?>!</button>
            <a href="logout/" type="button" class="btn btn-danger">Cerrar sesión</a>
        <?php
        } else {
            unset($_SESSION['username']);
            unset($_SESSION['password']);
        ?>
            <div class="btn-group text-end" role="group" aria-label="Sign in and sign up">
                <a href="create/" type="button" class="btn btn-outline-warning m-0">Crear cuenta</a>
                <a href="login/" type="button" class="btn btn-outline-primary m-0">Login</a>
            </div>
        <?php
        }
        ?>

    </nav>
        <div id="detail-view">
            <button class="custom-btn btn-14" id="detail-close" onclick="toggleDetailView(false); resetContentTextValorations();"><span><i class="bi bi-x-lg"></i> Cerrar</span></button>
            <div id="detail-view-top-container">
                <div class="description">
                    <section class="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla magnam odio asperiores quasi itaque nisi ut omnis! Reprehenderit facere porro accusamus odio nesciunt mollitia quo possimus cupiditate vero quod!
                    </section>
                    <section id="download-buttons" class="row text-start mt-3">
                        <div class="col text-center" id="proximately-text">Disponible proximamente</div>
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="col text-start"><button class="custom-btn btn-7" data-bs-toggle="tooltip" id="btn-link-android" data-bs-title="Android app"><span><i class="bi bi-android2 fs-3"></i></span></button></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="col text-start"><button class="custom-btn btn-8" data-bs-toggle="tooltip" id="btn-link-web" data-bs-title="Web"><span><i class="bi bi-globe2"></i></span></button></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="col text-start"><button class="custom-btn btn-3" data-bs-toggle="tooltip" id="btn-link-windows" data-bs-title="Windows app"><span><i class="bi bi-windows"></i></span></button></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="col text-start"><button class="custom-btn btn-5" data-bs-toggle="tooltip" id="btn-link-external" data-bs-title="Ver la web del proyecto"><span><i class="bi bi-box-arrow-up-right"></i></span></button></a>
                    </section>
                    <?php
                    if ($userOK) {
                    ?>
                        <section id="valoration" class="mt-4 mx-0">
                            <h2>Calificaciones y opiniones</h2>
                            <button class="btn btn-primary mb-3" id="add-valoration-btn" role="button" type="button" onclick="toggleDetailView(false); resetContentTextValorations()"><i class="bi bi-pencil-square"></i> Escribir reseña</button>
                            <h3 class="ms-0 my-3"><span id="stars-avg"></span><i class="bi bi-star ms-2"></i></h3>
                            <div id="valoration-bars">
                                <!-- Estrellas -->

                            </div>

                            <article id="valorations-display" class="mt-5">
                                <small>Aqui apareceran las valoraciones con texto:</small>
                                <div id="valorations-display-content" class="mt-2">

                                    <div class="container">
                                    </div>

                                </div>
                                <div class="container text-center">
                                    <button type="button" class="btn btn-secondary" onclick="loadMoreTextValorations();"><i class="bi bi-arrow-down-short"></i> Cargar más <i class="bi bi-arrow-down-short"></i></button>
                                </div>
                            </article>
                        </section>
                    <?php } else { ?>
                        <h2 class="mt-4 mx-0 text-start">Calificaciones y opiniones</h2>
                        <small>Para poder acceder a las reseñas inicia sesión con una cuenta de Ors Store o crearte una</small>
                        <br>
                        <div class="text-center d-flex row mt-3" role="group" aria-label="Sign in and sign up">
                            <a href="create/" type="button" class="btn btn-warning m-0 col mx-1">Crear cuenta</a>
                            <a href="login/" type="button" class="btn btn-primary m-0 col mx-1">Login</a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <div id="write-valoration">
            <h2 class="display-2 text-break">Reseña de <span class="title">Adventure Jam</span></h2>
            <form action="" method="POST" id="send-valoration-form">
                <div class="mb-3">
                    <div class="d-flex" id="stars-valoration" style="flex-wrap: wrap;"></div>
                    <label for="valoration-observations" class="form-label">¿Algo más que añadir? ¿Detalles?</label>
                    <textarea class="form-control" id="valoration-observations" style="height: 200px;"></textarea>
                    <button type="button" class="btn btn-danger" id="btn-close-valoration"><i class="bi bi-box-arrow-left"></i> Cerrar</button>
                    <button type="submit" class="btn btn-success"><i class="bi bi-send"></i> Publicar</button>
                </div>
            </form>
        </div>
        <main></main>


    <script src="bootstrap/js/bootstrap.bundle.js"></script>
    <script>
        function enableTooltips() {
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        }
        enableTooltips();
    </script>
    <script src="js/json.js"></script>
    <script src="js/jquery-3.7.0.min.js"></script>
    <script src="js/detailView.js"></script>
    <script src="js/detailViewContentManager.js"></script>
    <script src="js/cardClick.js"></script>
    <script src="js/carrouselButtons.js"></script>
    <script src="js/fetchAndWrite.js"></script>
    <script src="js/backgroundColor.js"></script>
    <script src="js/valorationFetch.js"></script>
    <script src="js/writeValorationContentManager.js"></script>
    <script src="js/writeValoration.js"></script>
    <script>
        window.scrollTo(0, 0);
    </script>
    <!-- <h3>Para comunicarse</h3>
    <carrousel>
        <div class="btn-cr-container left">
            <button class="ripple btn-cr cr-previous"><i class="bi bi-caret-left"></i></button>
        </div>        
        <div class="cr-content">
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat" loading="lazy">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
            <div class="card cr-card">
                <div class="title">Ors Chat</div>
                <img src="logos/Ors Chat.jpg" width="0" height="0" alt="Ors Chat">
                <div class="description">Un sistema de mensajeria privado, revolucionario y seguro en el que puedes confiar</div>
            </div>
        </div>
        <div class="btn-cr-container right">
            <button class="ripple btn-cr cr-posterior"><i class="bi bi-caret-right"></i></button>
        </div>
    </carrousel> -->
    <div class="d-none">
</body>

</html>
</div>