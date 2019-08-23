// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div")
  ))
});


