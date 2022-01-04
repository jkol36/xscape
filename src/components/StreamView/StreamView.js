import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

import { 
  StreamerCard, 
  Container, 
  StreamerName, 
  StreamTitle, 
  FollowButton, 
  TagRow, 
  TagView, 
  TagText,
  ChatBox
} from './styles'



const StreamView = ({videoStatus, navigation}) => {
  const streamUrl = 'https://stream.mux.com/OKYcLdNNu00wPP02dY57b2SxSF6QZBCoD00cfiy6KZ8nbQ.m3u8'
  const {width, height} = Dimensions.get('window')
  return (
    <Container>
       <StreamerCard navigation={navigation} streamUrl={streamUrl} />
       <ChatBox />
    </Container>

  )
}

export default StreamView
