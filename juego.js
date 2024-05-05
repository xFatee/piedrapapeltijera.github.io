
function juego(){
let indice=document.getElementById("options").selectedIndex;
let contenido=document.getElementById("options")
document.getElementById("eleccion").value=contenido[indice].textContent;
}
function jugar(){
    const victoria=document.getElementById("victoria");
    const derrota=document.getElementById("derrota");
    let eleccion=document.getElementById("options").value;
    const opciones= ["Piedra","Papel","Tijera"];
    let indiceAleatorio = Math.floor(Math.random() * opciones.length);
    let botEleccion=opciones[indiceAleatorio];
    document.getElementById("botSeleccion").value=botEleccion;
    if (eleccion===document.getElementById("error").value) {
        alert("Elige una opcion")

    }
    if (eleccion===botEleccion){
        document.getElementById("result").textContent="EMPATE"
        document.getElementById("result").style.color = "blue"; 
        document.getElementById("result").style.fontWeight = "bold";
    }
    switch(eleccion){
        case "Piedra":
        switch (botEleccion){
            case "Papel":
                document.getElementById("result").textContent="¡PERDISTE!";
                document.getElementById("result").style.color = "red"; 
                document.getElementById("result").style.fontWeight = "bold";
                derrota.play();
                break;
            case "Tijera":
                document.getElementById("result").textContent="¡GANASTE!";
                document.getElementById("result").style.color = "green"; 
                document.getElementById("result").style.fontWeight = "bold";
                victoria.play();
                break;
        }
            break;
        case "Papel":
            switch (botEleccion){
                case "Piedra":
                    document.getElementById("result").textContent="¡GANASTE!";
                    document.getElementById("result").style.color = "green"; 
                    document.getElementById("result").style.fontWeight = "bold";
                    victoria.play();
                    break;
            
                case "Tijera":
                    document.getElementById("result").textContent="¡PERDISTE!";
                    document.getElementById("result").style.color = "red"; 
                    document.getElementById("result").style.fontWeight = "bold";
                    derrota.play();
                    break;
                }
                break;
        case "Tijera":
            switch (botEleccion){
                case "Papel":
                    document.getElementById("result").textContent="¡GANASTE!";
                    document.getElementById("result").style.color = "green"; 
                    document.getElementById("result").style.fontWeight = "bold";
                    victoria.play();
                    break;

                case "Piedra":
                    document.getElementById("result").textContent="¡PERDISTE!";  
                    document.getElementById("result").style.color = "red"; 
                    document.getElementById("result").style.fontWeight = "bold";
                    derrota.play();
                    break; 
                    }
                    break;
            }




    }
