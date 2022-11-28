import "../styles/main.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import allReducers from "../redux/reducers";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  allReducers,
  composeWithDevTools(),
);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
