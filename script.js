const dino = document.querySelector('.dino');   // comando para selecionar o arquivo; parecido com o css
const fundo = document.querySelector('.fundo');
let isJumping = false;
let position = 0;  

function handleKeyUp(event) {                   // o argumento event é enviado para a função toda vez que alguém pressiona uma tecla; com ele identificamos qual tecla foi pressionada
    if (event.keyCode === 32) {                // 32 é o código da tecla espaço
        if(!isJumping) {
        jump();
        }
    }                
}

function jump() {
                            // posição inicial do dino

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

        //descendo
        let downInterval = setInterval(() => {
            if (position <= 0){
                clearInterval(downInterval);
                isJumping = false;
            } else {
            position -= 20;
            dino.style.bottom = position + 'px';
            }
        }, 20);

        } else {

        //subindo
        position += 20;

        dino.style.bottom = position + 'px';
        }

    }, 20);
                          
}

function criaCactos() {
    const cactos = document.createElement('div');
    let posicaoCactos = 1000;
    let randomTime = Math.random() * 6000;

   

    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    fundo.appendChild(cactos);                      //appendchild = método para adicionar filhos

    let leftInterval = setInterval(() => {
        posicaoCactos -= 10;
        cactos.style.left = posicaoCactos + 'px';
    
        if (posicaoCactos < -60) {
            clearInterval(leftInterval);
            fundo.removeChild(cactos);
        } else if (posicaoCactos > 0 && posicaoCactos < 60 && position < 60) {
            //Game Over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {

            posicaoCactos -= 10;
            cactos.style.left = posicaoCactos + 'px';
        
        }

    }, 20);

    setTimeout(criaCactos, randomTime);

}

criaCactos();

document.addEventListener('keyup', handleKeyUp);
