function encriptar(e){
	var secret;
	do {
		secret = prompt ("Digite uma Chave Secreta:");
	}while (secret == null || secret == "");	
	/*var secret = document.getElementById('crip').value;  
	if(secret==""){
		alert("Deve digitar uma chave antes!");
		location.reload();
		return
	}*/
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var encriptado = CryptoJS.AES.encrypt(e.target.result, secret);

        var a = document.getElementById('download-cript'); 
        var button = document.getElementById('encriptado-button');
        a.href = 'data:application/octet-stream,' + encriptado;
        a.download = file.name + '.aes';
        a.classList.remove("disabled");
        button.classList.remove("disabled");
    };
    reader.readAsText(file);
	//document.getElementById('crip').value="";
    alert("arquivo criptografado");
}

function decriptar(e){
	var secretd;
	do {
		secretd = prompt ("Digite uma Chave Secreta:");
	}while (secretd == null || secretd == "");
	/* var secretd = document.getElementById('desc').value;
	if(secretd==""){
		alert("Deve digitar uma chave antes!");
		location.reload();
		return
	}*/
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var decriptado = CryptoJS.AES.decrypt(e.target.result, secretd).toString(CryptoJS.enc.Latin1);
        var a = document.getElementById('download-decript');
        var button = document.getElementById('decriptado-button');
        a.href = 'data:application/octet-stream,' + decriptado;
        a.download = file.name + '.txt';
        a.classList.remove("disabled");
        button.classList.remove("disabled");
    };
    reader.readAsText(file);
	//document.getElementById('desc').value="";
    alert("arquivo descriptografado");
}

document.getElementById('cript-input')
.addEventListener('change', encriptar, false);

document.getElementById('decript-input')
.addEventListener('change', decriptar, false);
