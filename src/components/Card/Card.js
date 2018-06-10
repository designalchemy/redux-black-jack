import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: 100,
    height: 160,
    border: '1px solid black',
    borderRadius: 6,
    marginRight: 20,
    backgroundColor: 'white',
    color: 'red',
    position: 'relative',
    textTransform: 'uppercase'
  },
  topLeft: {
    position: 'absolute',
    left: 5,
    top: 5
  },
  bottomRight: {
    position: 'absolute',
    right: 5,
    bottom: 5
  }
}

const symbol = letter => {
  switch (letter) {
    case 'h':
      return '♥️'
    case 'd':
      return '♦️'
    case 's':
      return '♠️'
    case 'c':
      return '♣️'
    default:
      return '?'
  }
}

const Card = props => {
  const card = props.card.split('-')
  const char = `${symbol(card[0])}${card[1]}`
  return (
    <div className={props.classes.container}>
      <div className={props.classes.topLeft}>{char}</div>
      <div className={props.classes.bottomRight}>{char}</div>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object,
  card: PropTypes.string
}

export default injectSheet(styles)(Card)
