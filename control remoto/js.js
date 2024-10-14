const display = document.getElementById("display");
const play = document.getElementById("play");
function changeChannel(canales){
    switch (canales){
        case 1:
            display.src="https://www.youtube.com/embed/A_g3lMcWVy0?si=HcQJ1dTI57ZDWdnR";
            display.load;
            play.innerText=" Usted eligio canal musica"
            break;
        case 2:
            display.src="https://www.youtube.com/embed/aqs0aXBBC8g?si=yyl0ALaFoW5iNXFw";
            display.load;
            play.innerText="esta sonando luna de feid "
            break
        case 3:
            display.src="https://www.youtube.com/embed/GCdwKhTtNNw?si=qB5Vp2RPvvgoHbY2" ;
            display.load;
            play.innerText=" esta escuchando a The Neighbourhood "
            break    
        case 4:
            display.src="https://www.youtube.com/embed/M0lUdywLMQs?si=XoCuQF1cbjkwekwQ";
            display.load;
            play.innerText="usted esta escuchando a billie eilish "
            break
        case 5:
            display.src="https://www.youtube.com/embed/MwpMEbgC7DA?si=zhg0ZHvsHlAR4u1v" ;
            display.load;
            play.innerText="esta sonando another love "
            break  
        case 6:
            display.src="https://www.youtube.com/embed/TdrL3QxjyVw?si=xAOr0STPtrbaYCI8" ;
            display.load;
            play.innerText=" esta escuchando a lana del rey"
            break  
        case 7:
            display.src="https://www.youtube.com/embed/isZqHE_yY00?si=uyZ2CxNJLuWZyPaE" ;
            display.load;
            play.innerText=" esta escuchando daddy issues"
            break      
        case 8:
            display.src="https://www.youtube.com/embed/GyTi8Q8ujIg?si=jKocvI0axXeYOCzJ" ;
            display.load;
            play.innerText=" esta escuchando a avaion "
            break  
        case 9:
            display.src="https://www.youtube.com/embed/5UpGvpqFZCA?si=_ZdZcxuj4aOBhibq" ;
            display.load;
            play.innerText="esta escuchando a natalia lafourcade"
            break      
        case 10:
            display.src="https://www.youtube.com/embed/vRaYvf0-uR8?si=ha4CV2TuU56dc1F8";
            display.load;
            play.innerText="eligio un temazo"
            break    
        case "salir":
            display.src="salir del programa"
            play.innerText="canal no disponible";
            display.load;
            break  
        case "apagar": 
            display.src=""
            display.innerHTML=" apagado pantalla";
            play.innerText=" se la pantalla  apago"
            display.none;
            display.borderradius;
            break
    
    }
}  