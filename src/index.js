import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './App';
import './styles/index.css';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj5vepfbv4ndd0122laj4sgu1' })

const client = new ApolloClient({
  networkInterface: networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
