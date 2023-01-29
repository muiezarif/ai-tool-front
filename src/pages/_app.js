import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {Provider} from "react-redux";
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunkMiddleware from 'redux-thunk'
import reducers from '/redux/reducers'
import Script from "next/script";
import dynamic from 'next/dynamic'
let store
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
      <div>
          <Provider store={store}><React.Fragment>
            <Head>
              <title>AI-tool</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
              <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
            </Head>
            <Component {...pageProps} />

          </React.Fragment>
          </Provider>
      </div>);
}
function initStore(initialState) {
  return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
