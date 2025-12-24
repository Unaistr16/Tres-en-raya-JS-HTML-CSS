const tablero = document.querySelector("#tablero")
const cuadrados = document.querySelectorAll(".cuadrado")
const jugar = document.getElementById("jugar")
const titulo = document.getElementById("tituloHolder")

titulo.classList.add("hidden");
let turno = 1;
let jugando = false;

let arrayTablero = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]




jugar.addEventListener("click", () => {
        jugando = true;
        titulo.textContent = "Turno del jugador 1"
        turno = 1
        jugar.classList.add("hidden");
        console.log('jugando')
        titulo.classList.remove("hidden");
        jugar.classList.add("hidden");

        clearTablero(arrayTablero);
        

        titulo.classList.remove("hidden");

        
    }
    
)


function win(player){
    
    for (let i = 0; i < 3; i++){
        // filas
        if (arrayTablero[i][0] == player && arrayTablero[i][1] == player && arrayTablero[i][2] == player){
                return true;
            }
        // columnas
        if (arrayTablero[0][i] == player && arrayTablero[1][i] == player && arrayTablero[2][i] == player){
            return true;
        }
        // diagonal
        if (arrayTablero[0][0] == player && arrayTablero[1][1] == player && arrayTablero[2][2] == player){
            return true
        } else if (arrayTablero[0][2] == player && arrayTablero[1][1] == player && arrayTablero[2][0] == player){
            return true
        }
        
    }
}


function clearTablero(tablero){


    for (let i = 0; i < arrayTablero.length; i++){
        for (let j=0; j < arrayTablero.length; j++){
            arrayTablero[i][j] = 0;
        }
    }
    
    cuadrados.forEach(cuadrado => {
        cuadrado.textContent = '';
    })

    
}

cuadrados.forEach(boton => {
            boton.addEventListener("click", () => {
                if (jugando == false) return;

                switch (turno){
                    case 1:
                        if (boton.textContent != ''){
                            titulo.textContent = "Invalido!"
                            setTimeout(() => {
                                titulo.textContent = (turno === 1) ? "Turno del jugador 1" : "Turno del jugador 2";
                            }, 1000);

                        } else{
                                titulo.textContent = "Turno del jugador 2"
                                boton.textContent = "X"
                                const column = boton.dataset.column;
                                const row = boton.dataset.row;
                                
                                arrayTablero[row][column] = 1;
                                if (win(turno) == true){
                                    titulo.textContent = "Felicidades Jugador 1!"
                                    jugando = false;
                                    
                                    setTimeout(() => {
                                        titulo.classList.add("hidden")
                                        jugar.classList.remove("hidden")} ,2000)
                                    
                                        
        
                                }

                                

                                turno = 2;
                        }

                        

                        
                        break;
                    case 2:
                        if (boton.textContent != ''){
                            titulo.textContent = "Invalido!"
                            setTimeout(() => {
                                titulo.textContent = (turno === 1) ? "Turno del jugador 1" : "Turno del jugador 2";
                            }, 1000);
                        } else {
                            titulo.textContent = "Turno del jugador 1"
                            boton.textContent = "O"
                            const column = boton.dataset.column;
                            const row = boton.dataset.row;

                            arrayTablero[row][column] = 2;
                            if (win(turno) == true){
                                    titulo.textContent = "Felicidades Jugador 2!"
                                    jugando = false;

                                    setTimeout(() => {
                                        titulo.classList.add("hidden")
                                        jugar.classList.remove("hidden")} ,2000)
                                    
                                }


                            

                            turno = 1;
                        }
                        
                        break;
                }
            })
        })