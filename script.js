
const story = {
  start: {
    text: "Você chega à escola como o novo treinador. Mini te recebe com um sorriso estranho.",
    choices: [
      { text: "Falar com Mini", next: "mini" },
      { text: "Explorar o corredor", next: "hall" }
    ]
  },
  mini: {
    text: "Mini: 'Eu estava te esperando... você lembra da última vez?'",
    choices: [
      { text: "Perguntar o que ela quer dizer", next: "glitch1" }
    ]
  },
  hall: {
    text: "O corredor parece normal... mas você sente que algo te observa.",
    choices: [
      { text: "Continuar andando", next: "glitch1" }
    ]
  },
  glitch1: {
    text: "ERRO... ERRO... Isso já aconteceu antes.",
    choices: []
  }
};

let current = "start";

function render() {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");
  textDiv.innerText = story[current].text;
  choicesDiv.innerHTML = "";

  if (story[current].choices) {
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
}

render();
