// VALIDAR INICIO DE SESIÓN

const correo = document.getElementById('correo_iniciar_sesion');
const contra = document.getElementById('contrasena_iniciar_sesion');
const iniciarSesion = document.getElementById("iniciarSesion")

// Funcion que verifica campos vacios de EMAIL y CONTRASEÑA
iniciarSesion.onclick = function() { 
	if (correo.value == "" || contra.value == "") {
		correo.classList.add("is-invalid");
		contra.classList.add("is-invalid");
	}else{
		const datos_insertar = {
			correo: correo.value,
			contrasena: contra.value,
		  }
	  
		  axios({
			method: "POST",
			url: "http://127.0.0.1:4000/iniciar_sesion",
			data: datos_insertar
		  })
			.then(res => {
				if (res.data == "1"){
					location.href = "paginas/inicio.html";
				}else{
					console.log("el usuario y contraseña no existe papu")
					correo.classList.add("is-invalid");
					contra.classList.add("is-invalid");
				}
			})
			.catch(err => console.log('Error:', err))
	}

}