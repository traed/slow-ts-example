import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import FrontPage from './FrontPage';

const client = new Client({
  url: 'http://localhost:8080/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <FrontPage />
    </Provider>
  );
}

export default App;
