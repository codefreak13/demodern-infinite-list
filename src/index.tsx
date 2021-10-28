import React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import {List as Screen} from './Views';

export default function App() {
  return (
    <Provider store={store}>
        <View style={{flex: 1}}>
          <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            <StatusBar
              barStyle="light-content"
              hidden={false}
              backgroundColor="rgb(18,18,18)"
              translucent={true}
            />
            <Screen />
          </SafeAreaView>
        </View>
    </Provider>
  );
}
