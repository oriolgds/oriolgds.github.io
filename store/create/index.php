<?php
require_once "../valoration/database.php";
require_once "../valoration/alerts.php";
$alerts = new Alerts();

function checkUsernameExists($username, $database)
{
  $query = "SELECT COUNT(`id`) AS `COUNT` FROM `users` WHERE `username` = '$username'";
  $sql = mysqli_query($database, $query);
  $val = mysqli_fetch_array($sql)[0];
  return $val >= 1;
}
$username = "";
$password = "";
// When the user sends the form
if($_POST){
  $username = $_POST['username'];
  $password = $_POST['password'];
  $gender = $_POST['gender'];
  // Comprovar longitud nombre de usuario y contraseña
  if(strlen($username) < 1 || strlen($username) > 30 || strlen($password) < 6 || strlen($password) > 30){
    $alerts->add("El tamaño del nombre de usuario o contraseña es incorrecto", "danger");
  }
  else {
    // Check si el usuario existe
    if(checkUsernameExists($username, $database)){
      $alerts->add("Lo sentimos, pero el usuario <b>ya existe</b>, escoge otro por favor", "warning");
    }
    else {
      // Insert the user in the database
      $query = "INSERT INTO `users` (`id`, `username`, `password`, `creationDate`, `gender`) VALUES (NULL, '$username', '$password', NOW(), '$gender');";
      mysqli_query($database, $query);
      $alerts->add('Su cuenta se ha creado correctamente. <a href="../login" class="alert-link">Iniciar sesión</a>', "success");
    }
  }
}
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Crear cuenta</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="shortcut icon" href="../icon 64.png" type="image/x-icon">
    <style>
      main + div {
        display: none !important;
      }
    </style>
  </head>
  <body class="d-flex align-items-center py-4 bg-body-tertiary container" style="max-width: 500px;">  
    <main class="form-signin w-100 m-auto">
      <?php
      // Show the alerts
      $alerts->eHtml();
      ?>
        <form method="post" autocomplete="off" autocapitalize="off">
            <img class="mb-4 rounded" src="../icon.png" alt="" width="72" height="72" loading="lazy">
            <h1 class="h3 mb-3 fw-normal">Necesitamos algunos datos para crear tu cuenta</h1>
            <div class="form-floating my-1">
                <input type="text" class="form-control" id="inputUsername" placeholder="Nombre de usuario" minlength="1" maxlength="30" required name="username" value="<?php echo $username; ?>">
                <label for="inputUsername">Nombre de usuario</label>
            </div>
            <div class="form-floating my-1">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" minlength="6" maxlength="30" required name="password" value="<?php echo $password; ?>">
                <label for="inputPassword">Contraseña</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="gender1" required value="1">
              <label class="form-check-label user-select-none" for="gender1">
                Hombre
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="gender2" required value="0">
              <label class="form-check-label user-select-none" for="gender2">
                Mujer
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="gender3" required value="NULL">
              <label class="form-check-label user-select-none" for="gender3">
                Prefiero no decirlo
              </label>
            </div>            
            <button class="btn btn-warning w-100 py-2 my-3" type="submit">Crear</button>
            <small class="text-muted">¿Ya tienes cuenta? Inicia sesión <a href="../login/" class="text-primary">aquí</a></small>
            <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
    </main>
  </body>


<div class="d-none">
</html>
</div>