const elemento = document.querySelector(".cat_text");
const boxCat = document.querySelector("#imagens");
const catImage = document.getElementById("catImage");
const botao = document.querySelector(".btn");

const hairBow = document.getElementById("hair_bow");
const cake = document.getElementById("cake");
const juice = document.getElementById("juice");

hairBow.style.display = "none";
cake.style.display = "none";
juice.style.display = "none";

const frasesBonitas = [
  "Sei que você sente muita falta dela, porque ela não era só um gato, era sua filha, sua companheira, o seu amor da forma mais pura e inocente.",
  "Mesmo fazendo 1 ano hoje, essa dor não some, essa dor não some porque ela era muito especial e esse amor nunca vai acabar.",
  "Com toda a certeza do mundo, a Nina ainda lembra de você, do jeito que ela dormia no seu colo, nas suas pernas, do jeito que você cuidava e brincava com ela.",
  "Ela sente sua falta também, muito, e eu tenho certeza que ela ainda quer te encontrar de novo, te ver, te abraçar e te ronronar enquanto você faz carinho nela.",
  "Quando a saudade apertar, lembra dos bons momentos que teve com ela e de como ela te deixava feliz, e se a saudade apertar mais e mais, abre o colar que o Gustavo te deu, ela tá lá com você.",
  "Você ama muito ele e ela te ama muito, assim como o Gustavo te ama muito também.",
  "Abraça o Gato Nina o mais forte que você conseguir (um pouco difícil porque ele é bem grande), mas eu tenho certeza que ele vai te confortar um pouco.",
  "Abraços apertados e muito amor e carinho pra ti, Nanda.",
  "Com todo amor, senhor gato ❤️🐱🐾"
];

let fraseIndex = 0;
let talkingInterval;
let iniciou = false;
let escreverTimeout;
let mostrandoGatos = false;
let fotoIndex = 1;

const totalFotos = 10;

// ------------------------- ANIMAÇÕES -------------------------
function startTalkingAnimation() {
  let talking = false;
  talkingInterval = setInterval(() => {
    catImage.src = talking ? "./src/img/normal.png" : "./src/img/talking.png";
    talking = !talking;
  }, 200);
}

function stopTalkingAnimation() {
  clearInterval(talkingInterval);
  catImage.src = "./src/img/normal.png";
}

function cancelarDigitacao() {
  clearTimeout(escreverTimeout);
  stopTalkingAnimation();
}

function digitar(frase, callback) {
  cancelarDigitacao();
  elemento.innerHTML = "";
  let index = 0;
  startTalkingAnimation();

  function escreverLetra() {
    if (index < frase.length) {
      elemento.innerHTML += frase.charAt(index);
      index++;
      escreverTimeout = setTimeout(escreverLetra, 50);
    } else {
      stopTalkingAnimation();
      if (callback) callback();
    }
  }

  escreverLetra();
}

// ------------------------- SEQUÊNCIA INICIAL -------------------------
function sequenciaInicial() {
  digitar("Oiiii Nanda, quanto tempo! Eu tava com MUITA saudade de você. Antes da gente conversar, olha o que eu ganhei do Gustavo e acho que você vai amar.", () => {
    setTimeout(() => {
      hairBow.style.display = "block";
      digitar("Fofo, né?", () => {
        setTimeout(() => {
          digitar("Ananda, eu sei que hoje faz 1 ano que você não vê a Nina. Antes de falar o que tenho pra te falar, eu trouxe um bolinho, porque sei que você ama — é de cenoura! 🍰 Além disso, um suco de laranja que você gosta também. 🧃", () => {
            setTimeout(() => {
              cake.style.display = "block";
              juice.style.display = "block";
              setTimeout(() => {
                digitar("Agora sim, vamos conversar?");
              }, 1500);
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  });
}

sequenciaInicial();

// ------------------------- BOTÃO PRINCIPAL -------------------------
botao.addEventListener("click", () => {
  // Se estiver mostrando fotos de gatos
  if (mostrandoGatos) {
    mostrarFotos();
    return;
  }

  if (!iniciou) {
    botao.value = "Quero escutar mais";
    iniciou = true;
  }

  if (fraseIndex < frasesBonitas.length) {
    digitar(frasesBonitas[fraseIndex]);
    fraseIndex++;
  } else {
    // Terminou as frases
    digitar("Quer ver gatos engraçados?", () => {
      botao.value = "Sim";
      mostrandoGatos = true;
      fotoIndex = 1;
    });
  }
});

// ------------------------- MOSTRAR FOTOS -------------------------
function mostrarFotos() {
  if (fotoIndex <= totalFotos) {
    boxCat.src = `./src/img/gatos/gato${fotoIndex}.jpeg`;
    boxCat.style.display = "block";
    elemento.innerHTML = "";
    elemento.innerHTML = `Olha esse gato número ${fotoIndex}, Nanda! 😹`;
    fotoIndex++;
  } else {
    mostrandoGatos = false;
    botao.disabled = true;
    botao.style.opacity = 0.6;
    digitar(
      "Acabaram as frases e fotos por enquanto, Nanda, mas o amor que ele sente por você nunca vai acabar. O Gustavo está trabalhando para adicionar mais frases e me melhorar. E se você estiver um pouquinho xoxa, precisando de carinho ou querendo desabafar, manda uma mensagem pra ele, liga pra ele, demonstra isso, porque eu garanto que tudo o que ele mais quer é poder te ajudar. E, se não puder ajudar, ele vai estar ao seu lado, te apoiando e te dando carinho. Tenta, Nanda, e eu te garanto que você não vai se arrepender. ❤️"
    );
  }
}

// ------------------------- MÚSICA -------------------------
const botaoMusica = document.querySelector(".music_btn");
const audio = document.querySelector(".audio");

let tocando = false;

botaoMusica.addEventListener("click", () => {
  if (!tocando) {
    audio.style.display = "block";
    audio.play();
    botaoMusica.value = "Parar música";
    tocando = true;
  } else {
    audio.pause();
    audio.currentTime = 0;
    audio.style.display = "none";
    botaoMusica.value = "Uma músiquinha pra relaxar? ;)";
    tocando = false;
  }
});
