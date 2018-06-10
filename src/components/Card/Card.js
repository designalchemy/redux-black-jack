import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '100px',
    height: '160px',
    border: '1px solid black',
    borderRadius: '6px',
    marginRight: '20px',
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
