// var - nao utilizem
// let -  
// const - não muda valor 
// DOM Document Object Model(Modelo de objeto do Documento)


///function CalcularSoma(numero1, numero2) {
            //let total = numero1 + numero2;
            //console.log(total);
///}
//CalcularSoma(7, 9)
//CalcularSoma(1, 3)
//CalcularSoma(2, 7)
///CalcularSoma(3, 1)





const cabecalho = document.querySelector('header')

/** 1º passo: capturar o valor da textarea para criar o tweet 
 *   2º passo: construir o tweet
 *   3º passo: imprimir o tweet
*/

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {
    event.preventDefault();

   

    const tweetTextarea= textarea.value;
    criarTweet(tweetTextarea)
} 
tweetar.addEventListener('click', pegarTweet);




function criarTweet( tweetTexto) {

        let data = new Date();
        let hora    = data.getHours();
        let minutos = data.getMinutes();
        //objeto
        const tweet = {
                nome:  "Brenno  ",
                foto: "./assets/img/Design sem nome (1).png",
                usuario:  " @brenno_",
                texto: tweetTexto,
                tempo: `${hora}:${minutos}`,
                tempo2: hora+":"+minutos
       
        }

        listarTemplateTweet(tweet)
    }

    function listarTemplateTweet(tweet) {


        const {nome, foto, usuario, texto, tempo} = tweet
       



        //criando elementos para listar o template
            let li              = document.createElement("li");
            li.classList.add("conteudoPrincipal__tweet")
            let img          = document.createElement("img");
            img.src = foto
            img.classList.add("tweet__fotoPerfil")

            let div           = document.createElement("div");
            div.classList.add("tweet__conteudo")
            let h2            = document.createElement("h2");
            h2.innerText = nome
            
            let span        = document.createElement("span");
            span.innerText = ` ${usuario} - ${tempo}`

            let p              = document.createElement("p");
            p.innerText = texto
            
            //adicionado elementos dentro da div
            div.appendChild(h2);
            div.appendChild(span);
            div.appendChild(p);

            //adicionado elementos dentro da li 
            li.appendChild(img);
            li.appendChild(div)
            
            feed.appendChild(li)
            textarea.value= ""
    }