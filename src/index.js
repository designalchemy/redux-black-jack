import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { Provider } from 'react-redux'

import Container from 'components/Container/Container'
import Background from 'components/Background/Background'

import store from './store'
import theme from './styles'

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Switch>
          <Container>
            <Route exact path="/" component={Background} />
          </Container>
        </Switch>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
