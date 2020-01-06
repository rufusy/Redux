import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
// import CakeContainer from './components/CakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
        {/* <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer> */}
      </div>
    </Provider>
  );
}

export default App;
