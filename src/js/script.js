    const textoInicial = "Olá Nanda, meu nome é Sr. Gato. O Gustavo me construiu para te animar quando você estiver meio xoxa e precisar ouvir algo bonito que ele tenha a dizer.";

    const frasesBonitas = [
      "Ele te ama mais que tudo.",
      "Se ele pudesse, estaria aí agora mesmo, te enchendo de abraços e beijos.",
      "O Gustavo nunca vai invalidar o que você sente. Ele te ama muito e valoriza sua vulnerabilidade. Você é o que ele tem de mais precioso.",
      "Ele NUNCA vai desistir de você.",
      "Só de estar perto de você, ele já se sente em paz.",
      "Tudo o que ele quer nesta vida é te fazer feliz.",
      "Ele ama o seu sorriso.",
      "Ele ama a sua risada.",
      "Ele acha seu cabelo a coisa mais cheirosa do mundo.",
      "Ele te acha absurdamente linda.",
      "Ele se sente muito amado, feliz e sortudo por ter você.",
      "Você é o amor da vida dele.",
      "Você faz o Gustavo ser melhor a cada dia.",
      "O Gustavo quer ficar ao seu lado o tempo inteiro, porque valoriza muito o tempo com você.",
      "Você é muito importante para ele.",
      "O Gustavo às vezes pode ser meio confuso de entender, mas tenta todos os dias ser melhor. Ele tenta porque quer ser melhor para você.",
      "Tudo pode estar desmoronando em volta dele, mas se você estiver com ele, ele consegue ficar calmo e dar um jeito.",
      "Para o Gustavo, não importa se momentos difíceis virão. O que importa é enfrentarem isso juntos.",
      "O Gustavo ama suas habilidades artísticas.",
      "Desde o dia em que você permitiu que o Gustavo entrasse no seu mundo, ele tem se esforçado para compreendê-lo, porque sabe que, entendendo o seu mundo, pode te amar melhor.",
      "O Gustavo vai te dar o negócio da Fran já já, mas não conta que eu te falei isso.",
      "Você faz o Gustavo ser melhor.",
      "O Gustavo só quer você!",
      "O Gustavo te quer muito.",
      "O Gustavo gosta de palavras de afirmação, por isso ama quando você o elogia e diz palavras carinhosas.",
      "O sonho do Gustavo é casar com você.",
      "Conversas importantes são necessárias, e o Gustavo ama quando você expressa sua opinião e jeito de pensar.",
      "O Gustavo ama suas artes.",
      "O Gustavo acha você uma mulher muito forte, dedicada e determinada.",
      "O Gustavo nunca vai desistir de você (de novo, porque não custa reforçar).",
      "O Gustavo adora quando vocês começam a falar de algo bobo e acabam rindo juntos. KKKKKK",
      "Você é o amor da vida do Gustavo."
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
        digitar("Acabaram as frases por enquanto, Nanda, mas o amor que ele sente por você nunca vai acabar. O Gustavo está trabalhando para adicionar mais frases e me melhorar. E se você ainda estiver um pouquinho xoxa, precisando de carinho ou querendo desabafar, manda uma mensagem pra ele, liga pra ele, demonstra isso, porque eu garanto que tudo o que ele mais quer é poder te ajudar. E, se não puder ajudar, ele vai estar ao seu lado, te apoiando e te dando carinho. Tenta, Nanda, e eu te garanto que você não vai se arrepender. ❤️");
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