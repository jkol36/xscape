import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import navigationOptions from '../constants/navigationOptions';
import TabRoutes from './TabRoutes';
import StreamView from '../components/StreamView/StreamView';


export default function (Stack) {
  console.log("this is my stack file", navigationStrings)
  return (
    <>
      <Stack.Screen
          name={navigationStrings.MAP}
          component={TabRoutes}
          options={navigationOptions}
      />

      <Stack.Screen
        name={navigationStrings.STREAMVIEW}
        component={StreamView}
        options={navigationOptions}
      />

    </>
  )
}