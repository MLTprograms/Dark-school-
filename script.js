
const story = {
  start: {
    text: "Você entra em uma escola japonesa abandonada... (廃校に入った...)",
    choices: [
      { text: "Explorar o corredor", next: "hall" },
      { text: "Entrar na sala 3-B", next: "room" }
    ]
  },
  hall: {
    text: "Você escuta passos atrás de você... (後ろに足音が聞こえる...)",
    choices: [
      { text: "Correr", next: "badEnd" },
      { text: "Se virar", next: "secretEnd" }
    ]
  },
  room: {
    text: "Uma lousa começa a sangrar lentamente... (黒板が血を流し始める...)",
    choices: [
      { text: "Tocar na lousa", next: "badEnd" },
      { text: "Sair em silêncio", next: "goodEnd" }
    ]
  },
  badEnd: {
    text: "Você nunca saiu da escola... (あなたは二度と出られなかった...)",
    choices: []
  },
  goodEnd: {
    text: "Você escapou, mas algo te seguiu... (何かがあなたについてきた...)",
    choices: []
  },
  secretEnd: {
    text: "Você descobre que já estava morto... (あなたはすでに死んでいた...)",
    choices: []
  }
};

let current = "start";

function render() {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");
  textDiv.innerText = story[current].text;
  choicesDiv.innerHTML = "";

  story[current].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      current = choice.next;
      render();
    };
    choicesDiv.appendChild(btn);
  });
}

render();
