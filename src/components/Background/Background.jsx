import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { drawCard, drawNewHand, stick } from '../../actions'
import Card from 'components/Card/Card'

const styles = {
  container: {
    display: 'flex',
    padding: 50,
    '& > div': {
      flex: 1,
      textAlign: 'center'
    },
    '& h1': {
      marginBottom: 20,
      fontSize: 20
    },
    '& span': {
      border: '1px solid black',
      padding: 5,
      margin: 5,
      cursor: 'pointer',
      fontSize: 20
    }
  },
  cardContainer: {
    display: 'flex'
  }
}

const Background = props => {
  const { classes, blackJack } = props
  const { userTotal, done, dealerTotal, user, dealer } = blackJack

  return (
    <div>
      <div className={classes.container}>
        <div>
          <h1>
            Your hand {userTotal}
            {done && ` - ${done} - ${dealerTotal}`}
          </h1>
          <div className={classes.cardContainer}>
            {user.map(item => <Card key={item} card={item} />)}
          </div>
        </div>
        <div>
          <h1>Dealer</h1>
          <div className={classes.cardContainer}>
            {dealer.map(item => <Card key={item} card={item} />)}
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div>
          <span onClick={() => props.drawCard()}>Draw Card</span>
          <span onClick={() => props.stick()}>Stick</span>
          <span onClick={() => props.drawNewHand()}>Deal Cards</span>
        </div>
      </div>
    </div>
  )
}

Background.propTypes = {
  classes: PropTypes.object,
  blackJack: PropTypes.object,
  drawNewHand: PropTypes.func,
  drawCard: PropTypes.func,
  stick: PropTypes.func
}

const mapStateToProps = state => ({
  blackJack: state.blackJack
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({ drawNewHand, drawCard, stick }, dispatch)

export default injectSheet(styles)(
  connect(mapStateToProps, matchDispatchToProps)(Background)
)
