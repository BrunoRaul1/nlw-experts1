const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "a) define",
        "b) var",
        "c) let"
      ],
      correta: 2 // "c) let"
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "a) Este é um comentário",
        "b) Este é um comentário",
        "c) Este é um comentário"
      ],
      correta: 0 // "a) // Este é um comentário"
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
      respostas: [
        "a) func myFunction()",
        "b) function: myFunction()",
        "c) function myFunction()"
      ],
      correta: 2 // "c) function myFunction() {}"
    },
    {
      pergunta: "Qual operador é usado para comparação estrita (valor e tipo) em JavaScript?",
      respostas: [
        "a) ==",
        "b) ===",
        "c) =="
      ],
      correta: 1 // "b) ==="
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "a) push()",
        "b) addToEnd()",
        "c) append()"
      ],
      correta: 0 // "a) push()"
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "a) pop()",
        "b) removeLast()",
        "c) deleteLast()"
      ],
      correta: 0 // "a) pop()"
    },
    {
      pergunta: "Qual método é usado para converter uma string em letras minúsculas em JavaScript?",
      respostas: [
        "a) toLowerCase()",
        "b) lowerCase()",
        "c) toLower()"
      ],
      correta: 0 // "a) toLowerCase()"
    },
    {
      pergunta: "Qual método é usado para encontrar o maior número em um array em JavaScript?",
      respostas: [
        "a) Math.max()",
        "b) maximum()",
        "c) max()"
      ],
      correta: 0 // "a) Math.max()"
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "a) &",
        "b) +",
        "c) ||"
      ],
      correta: 1 // "b) +"
    },
    {
      pergunta: "Qual estrutura de controle é utilizada para tomar decisões em JavaScript?",
      respostas: [
        "a) for",
        "b) if...else",
        "c) while"
      ],
      correta: 1 // "b) if...else"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size - ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem) 
  }