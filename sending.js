const URL = window.location;
document.getElementById('contact-form').addEventListener('submit', (e)=>{
	e.preventDefault();
	const sbtBTN = document.querySelector('#contact-form button[type="submit"]');
	sbtBTN.setAttribute('disabled', 'true');
	sbtBTN.innerHTML = "Enviando...";
	function returnData(){
		let result = {};
		document.querySelectorAll('#contact-form .form-control').forEach(element => {
			result[element.getAttribute('json-name')] = element.value;
		});
		return result;
	}
	const postData = returnData();
	console.log(postData);
	$.ajax({
		type: "POST",
		url: "send.php",
		data: postData,
		success: function (response) {
			console.log(response);
			sbtBTN.innerHTML = "Mensaje enviado";
			if(response == "OK"){
				document.getElementById('contact-form').reset();
				setTimeout(() => {
					sbtBTN.innerHTML = "Enviar mensaje";
				}, 10000);
			}
			else {
				sbtBTN.innerHTML = "Error al enviar el mensaje";
			}
			
			sbtBTN.removeAttribute('disabled');
		}
	});
});