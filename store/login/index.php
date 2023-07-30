<?php
require_once "../valoration/database.php";
require_once "../valoration/alerts.php";
$alerts = new Alerts();
if($_POST){
  $username = $_POST['username'];
  $password = $_POST['password'];
  $query = 'SELECT COUNT(`id`) AS "COUNT" FROM `users` WHERE username = "$username" AND password = "$password"';
  $sql = mysqli_query($database, $query);
  $sql = mysqli_fetch_array($sql)[0];
  // This means user exits
  if(intval($sql) >= 1){
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;    
    header("Location: ../");
    exit;
  }
  // This means password or username is incorrect
  else {
    $alerts->add("El usuario o la contraseña son <b>incorrectos</b>", "danger");
  }
}
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="shortcut icon" href="../icon 64.png" type="image/x-icon">
  </head>
  <body class="d-flex align-items-center py-4 bg-body-tertiary container" style="max-width: 500px;">  
    <main class="form-signin w-100 m-auto">
      <?php
      $alerts->eHtml();
      ?>
      <form method="post" autocomplete="off" autocapitalize="off">
            <img class="mb-4 rounded" src="../icon.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">Introduce tus datos para iniciar sesión</h1>
            <div class="form-floating my-1">
                <input type="text" class="form-control" id="inputUsername" placeholder="Nombre de usuario" minlength="1" maxlength="30" required name="username">
                <label for="inputUsername">Nombre de usuario</label>
            </div>
            <div class="form-floating my-1">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" minlength="6" maxlength="30" required name="password">
                <label for="inputPassword">Contraseña</label>
            </div>
            <button class="btn btn-primary w-100 py-2 mt-3" type="submit">Iniciar sesión</button>
            <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
    </main>
  </body>




</html>