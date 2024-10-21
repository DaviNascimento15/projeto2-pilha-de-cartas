let deck = []
let option

while (option !== '3') {
  alert(`Quantidade de cartas no baralho: ${deck.length}
    1. Adicionar uma carta
    2. Puxar uma carta
    3. Sair
`)

option = prompt('Escolha uma opção: ')

  switch (option) {
    case '1':
      const nameCard = prompt('Digite o nome da carta: ')
      if (nameCard) {
        deck.push(nameCard)
        alert(`Carta ${nameCard} adicionada ao topo do baralho`)
      } else {
        alert('Nome da carta não pode ser vazio')
      }
      break
    
    case '2':
      const cardPulled = deck.pop()
      if (cardPulled) {
        alert(`Você puxou a carta: ${cardPulled}`)
      } else {
        alert('O baralho está vazio')
      }
      break

    case '3':
      alert('Saindo')
      break

    default:
      alert('Opção inválida Tente novamente.')
      break
  }
}
