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
    color: 'red'
  }
}

const Card = props => (
  <div className={props.classes.container}>{props.card}</div>
)

Card.propTypes = {
  classes: PropTypes.object,
  card: PropTypes.string
}

export default injectSheet(styles)(Card)
