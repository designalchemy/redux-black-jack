const countTotals = arr =>
  arr.reduce((acc, str) => acc + Number(str.split('-')[1]), 0)

const getRandom = deck => Math.floor(Math.random() * deck.length)

const getCard = deck => deck.splice(getRandom(deck), 1)

const intialState = () => {
  const allCards = [
    'c-1',
    'c-2',
    'c-3',
    'c-4',
    'c-5',
    'c-6',
    'c-7',
    'c-8',
    'c-9',
    'c-10',
    'c-11',
    'c-12',
    's-1',
    's-2',
    's-3',
    's-4',
    's-5',
    's-6',
    's-7',
    's-8',
    's-9',
    's-10',
    's-11',
    's-12',
    'h-1',
    'h-2',
    'h-3',
    'h-4',
    'h-5',
    'h-6',
    'h-7',
    'h-8',
    'h-9',
    'h-10',
    'h-11',
    'h-12',
    'd-1',
    'd-2',
    'd-3',
    'd-4',
    'd-5',
    'd-6',
    'd-7',
    'd-8',
    'd-9',
    'd-10',
    'd-11',
    'd-12'
  ]

  const user = [...getCard(allCards), ...getCard(allCards)]
  const dealer = [...getCard(allCards), ...getCard(allCards)]
  const userTotal = countTotals(user)

  return {
    cards: allCards,
    user,
    userTotal,
    dealer,
    dealerTotal: countTotals(dealer),
    done: userTotal === 21 ? 'BLACK JACK - User Wins' : false
  }
}

const drawCard = state => {
  const deck = state.cards
  const user = [...state.user, ...getCard(deck)]
  const userTotal = countTotals(user)

  return {
    cards: deck,
    user,
    userTotal,
    dealer: state.dealer,
    dealerTotal: state.dealerTotal,
    done: userTotal > 21 ? 'Bust - Dealer Wins' : false
  }
}

const stick = state => {
  const deck = state.cards
  let dealer = [...state.dealer]
  let dealerTotal = countTotals(dealer)

  while (dealerTotal < 17) {
    dealer = [...dealer, ...getCard(deck)]
    dealerTotal = countTotals(dealer)
  }

  return {
    cards: deck,
    user: state.user,
    userTotal: state.userTotal,
    dealer: dealer,
    dealerTotal: dealerTotal,
    done:
      dealerTotal > 21
        ? 'User Wins'
        : dealerTotal > state.userTotal ? 'Dealer Wins' : 'User Wins'
  }
}

const blackJack = (state = intialState(), action) => {
  switch (action.type) {
    case 'DRAW_NEW_HAND':
      return intialState()
    case 'DRAW_CARD':
      return drawCard(state)
    case 'STICK':
      return stick(state)
    default:
      return state
  }
}

export default blackJack
