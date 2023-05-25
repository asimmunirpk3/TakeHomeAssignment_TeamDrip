/**
 * React Native Implementation of "Take Home Assignment" 
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow strict-local
 */ 

import { SafeAreaView, View } from 'react-native'
import React from 'react'
import FrontPage from './src/FrontPage'

export default function App() 
{
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <FrontPage/>
      </View>
    </SafeAreaView>
  )
}