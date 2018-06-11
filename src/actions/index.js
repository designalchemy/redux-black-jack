const DRAW_NEW_HAND = 'DRAW_NEW_HAND'
const DRAW_CARD = 'DRAW_CARD'
const STICK = 'STICK'

export { DRAW_NEW_HAND, DRAW_CARD, STICK }

const drawNewHand = () => ({
  type: DRAW_NEW_HAND
})

const drawCard = () => ({
  type: DRAW_CARD
})

const stick = () => ({
  type: STICK
})

export { drawNewHand, drawCard, stick }
