import { DRAW_NEW_HAND, DRAW_CARD, STICK, STAKE } from '../actions'

const countTotals = arr => arr.reduce((acc, item) => acc + item.value, 0)

const getRandom = deck => Math.floor(Math.random() * deck.length)

const getCard = deck => deck.splice(getRandom(deck), 1)

const intialState = state => {
  const cards = [].concat.apply(
    // cheeky flatmap
    [],
    ['h', 'd', 'c', 's'].map(suit =>
      [...Array(12).keys()].map(item => {
        const value = item >= 9 ? 10 : item + 1
        const key =
          item === 0
            ? 'ace'
            : item === 9
              ? 'jack'
              : item === 10 ? 'queen' : item === 11 ? 'king' : ''

        return {
          value,
          suit,
          key
        }
      })
    )
  )

  const user = [...getCard(cards), ...getCard(cards)]
  const dealer = [...getCard(cards), ...getCard(cards)]
  const userTotal = countTotals(user)

  return {
    cards: cards,
    user,
    userTotal,
    dealer,
    dealerTotal: countTotals(dealer),
    done: userTotal === 21 ? 'BLACK JACK - User Wins' : false,
    stake: 50,
    bank: state.bank || 300
  }
}

const drawCard = state => {
  const deck = state.cards
  const user = [...state.user, ...getCard(deck)]
  const userTotal = countTotals(user)
  const lose = userTotal > 21

  return {
    ...state,
    cards: deck,
    user,
    userTotal,
    done: lose ? 'Bust - Dealer Wins' : false,
    bank: lose ? state.bank - state.stake : state.bank
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

  const userWin = dealerTotal > 21 || dealerTotal < state.userTotal

  const done =
    dealerTotal > 21
      ? 'User Wins'
      : dealerTotal > state.userTotal ? 'Dealer Wins' : 'User Wins'

  console.log('have i won ?', userWin)

  return {
    ...state,
    cards: deck,
    dealer: dealer,
    dealerTotal: dealerTotal,
    done,
    bank: userWin ? state.bank + state.stake : state.bank - state.stake
  }
}

const blackJack = (state = intialState({}), action) => {
  switch (action.type) {
    case DRAW_NEW_HAND:
      return intialState(state)
    case DRAW_CARD:
      return drawCard(state)
    case STICK:
      return stick(state)
    case STAKE:
      return { ...state, stake: action.stake }
    default:
      return state
  }
}

export default blackJack
