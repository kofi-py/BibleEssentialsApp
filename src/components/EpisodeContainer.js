import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Audio } from 'expo-av';

export default class EpisodeContainer extends Component {
  async componentDidMount() {
    Audio.setAudioModeAsync({
      
    });
  }
  render() {
    return (
      <View>
        <Text>EpisodeContainer</Text>
      </View>
    )
  }
}