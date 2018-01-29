import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './app/store';
import HomeScreen from './app/screens/HomeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: { screen: HomeScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
