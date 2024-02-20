import { Provider } from 'react-redux';
import store from './store/store'
import ContinentsContainer  from './component/Continents/continents.container'



function App() {
  return (
    <Provider store = { store }>
      <ContinentsContainer />
    </Provider>
  );
}

export default App;
