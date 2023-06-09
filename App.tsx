import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import reduxStore from './redux/reduxStore';

import HomeScreen from './screens/HomeScreen';

const App = () => {

  return (
      <Provider store={reduxStore}>
        <StatusBar backgroundColor="#dc9d71"/>
       <HomeScreen/>
      </Provider>
  );
}

export default App;
