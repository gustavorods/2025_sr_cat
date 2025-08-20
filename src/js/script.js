    // const textoInicial = "Olá Nanda, meu nome é Sr. Gato. O Gustavo me construiu para te animar quando você estiver meio xoxa e precisar ouvir algo bonito que ele tenha a dizer.";
    const textoInicial = "Olá Nanda, quanto tempo! Lembra meu nome? Meu nome é Sr. Gato, o Gustavo me contou algumas coisinhas e eu vou falar pra você :) Mas antes, olha meu relógio e meu café, gostou?";

        const frasesBonitas = [
      "Gustavo tem medo de você abandoná-lo, ele te ama muito.",
      "Gustavo está toda hora pensando numa maneira de casar com você logo.",
      "Gustavo gosta quando você se abre para ele e fala sobre seus sentimentos.",
      "Gustavo pode falar coisas bem bobas do nada, mas tudo que ele quer no final é conseguir tirar uma risada sua.",
      "Você não tem ideia do quanto ele te ama.",
      "Gustavo é um cara que tem ciúmes, às vezes não fala por medo de parecer controlador, mas saiba que, no fundo, ele só tem medo de te perder.",
      "Ele chora quando está com muita saudade sua e chora porque ama demais você.",
      "Gustavo ama sua risada.",
      "Ele adora quando você complementa as piadas bobas dele.",
      "Ele nunca te trocaria.",
      "Ele se sente especial quando você fala 'não fale com Molieres'.",
      "Ele te ama e te quer muito.",
      "Ele ama seus beijinhos.",
      "Ele te acha MUITO linda.",
      "Gustavo às vezes fica meio pra baixo, porque a mente dele pensa demais 24 horas por dia, e tudo que ele precisa nesses momentos é seu beijinho, um abraço e uma confirmação de que você o ama.",
      "Você vive na mente dele, é o melhor pensamento dele.",
      "Você tira as risadas mais sinceras dele.",
      "Ele fica te admirando do nada, porque fica fascinado com sua beleza e com o fato de você ser um sonho realizado.",
      "ELE TE AMA MUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUITO!",
      "Mensagem dele agora:",
      "Bom diaaa, minha gatita linda! Espero que seu dia seja maravilhoso e que minha presença ajude nisso. Eu te amo muito, beijos, linda!"
    ];

    const elemento = document.querySelector(".cat_text");
    const catImage = document.getElementById("catImage");
    const botao = document.querySelector(".btn");

    let fraseIndex = 0;
    let talkingInterval;
    let iniciou = false;
    let escreverTimeout; // para controlar o setTimeout

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

    digitar(textoInicial);

    botao.addEventListener("click", () => {
      if (!iniciou) {
        botao.value = "Quero escutar mais";
        iniciou = true;
      }

      if (fraseIndex < frasesBonitas.length) {
        digitar(frasesBonitas[fraseIndex]);
        fraseIndex++;
      } else {
        digitar("Acabaram as frases por enquanto, Nanda, mas o amor que ele sente por você nunca vai acabar. O Gustavo está trabalhando para adicionar mais frases e me melhorar. E se você estiver um pouquinho xoxa, precisando de carinho ou querendo desabafar, manda uma mensagem pra ele, liga pra ele, demonstra isso, porque eu garanto que tudo o que ele mais quer é poder te ajudar. E, se não puder ajudar, ele vai estar ao seu lado, te apoiando e te dando carinho. Tenta, Nanda, e eu te garanto que você não vai se arrepender. ❤️");
        botao.disabled = true;
        botao.style.opacity = 0.6;
      }
    });

    // Botão da música
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