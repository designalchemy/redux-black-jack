import reset from './reset'
import felt from 'assets/felt.jpg'

const styles = {
  container: {
    height: '100%'
  },
  '@global': {
    ...reset,
    body: {
      fontFamily: '"Lato", sans-serif',
      background: `green url(${felt})`,
      backgroundSize: 'cover'
    },
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      boxSizing: 'border-box'
    },
    '#root': {
      height: '100%'
    }
  }
}

export default styles
