import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
  },
  black: {
    color: 'black'
  },
  bigImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40
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
  const { classes, card } = props
  const { value, suit, key } = card
  const char = symbol(suit)
  const colorLogic = suit === 's' || suit === 'c'
  return (
    <div
      className={cx(classes.container, {
        [classes.black]: colorLogic
      })}
    >
      <div
        className={cx(classes.bigImage, {
          [classes.black]: colorLogic
        })}
      >
        {char}
      </div>

      <div className={classes.topLeft}>
        <div>{value}</div>
        <div>&nbsp;{char}</div>
      </div>

      <div className={classes.bottomRight}>
        <div>{value}</div>
        <div>&nbsp;{char}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object,
  card: PropTypes.object
}

export default injectSheet(styles)(Card)
