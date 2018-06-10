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
    flexDirection: 'column',
    alignItems: 'center',
    '& > div': {
      flex: 1,
      textAlign: 'center',
      padding: 20
    },
    '& h1': {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    '& span': {
      border: '1px solid white',
      padding: 10,
      margin: 5,
      cursor: 'pointer',
      fontSize: 25,
      color: 'white'
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
          <h1>Your hand - {userTotal}</h1>
          <div className={classes.cardContainer}>
            {user.map(item => <Card key={item} card={item} />)}
          </div>
        </div>
        <div>
          <h1>Dealer</h1>
          <div className={classes.cardContainer}>
            {dealer.map((item, index) => (
              <Card key={item} card={item} dealer index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <h1>{done && `${done} - Dealers total - ${dealerTotal}`}</h1>
      </div>

      <div className={classes.container}>
        <div>
          {!done && <span onClick={() => props.drawCard()}>Draw Card</span>}
          {!done && <span onClick={() => props.stick()}>Stick</span>}
          {done && <span onClick={() => props.drawNewHand()}>Deal Cards</span>}
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
