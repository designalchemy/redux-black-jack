const DRAW_NEW_HAND = 'DRAW_NEW_HAND'
const DRAW_CARD = 'DRAW_CARD'
const STICK = 'STICK'
const STAKE = 'STAKE'

export { DRAW_NEW_HAND, DRAW_CARD, STICK, STAKE }

const drawNewHand = () => ({
  type: DRAW_NEW_HAND
})

const drawCard = () => ({
  type: DRAW_CARD
})

const stick = () => ({
  type: STICK
})

const stake = stake => ({
  type: STAKE,
  stake
})

export { drawNewHand, drawCard, stick, stake }
