<?php
$dbname = 'n260m_30602522_oriol';
$connection = mysqli_connect(
	'sql104.260mb.net',
	'n260m_30602522',
	'1234qwer',
	'n260m_30602522_oriol'
);
$connection->set_charset("utf8");
if($_POST){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$content = $_POST['content'];
	$query = "INSERT INTO `messages` (`id`, `name`, `email`, `subject`, `date`, `content`) VALUES (NULL, '$name', '$email', '$subject', NOW(), '$content')";
	mysqli_query($connection, $query);
	die('OK');
}
else {
	die("ERROR");
}

?>