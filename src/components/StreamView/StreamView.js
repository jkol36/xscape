import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  StreamApp,
  CommentBox,
  CommentItem,
  CommentList,
  LikeButton,
  StatusUpdateForm,
  Activity
} from 'react-native-activity-feed';
import { 
  StreamerCard, 
  Container, 
  StreamerName, 
  StreamTitle, 
  FollowButton, 
  TagRow, 
  TagView, 
  TagText,
} from './styles'

const activity = {
  actor: {
    data: {
      name: 'Terry Walker',
      profileImage: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
  },
  object: 'Hey @Thierry how are you doing?',
  verb: 'post',
  time: new Date(),
};


const StreamView = ({videoStatus, navigation}) => {
  const streamUrl = 'https://stream.mux.com/OKYcLdNNu00wPP02dY57b2SxSF6QZBCoD00cfiy6KZ8nbQ.m3u8'
  const {width, height} = Dimensions.get('window')
  return (
    <Container>
       <StreamerCard navigation={navigation} streamUrl={streamUrl} />
       <CommentItem
    // this is an example of the data coming from APIs
              comment={{
                user: {
                  data: {
                    name: 'Rosemary',
                    subtitle: 'likes playing fresbee in the park',
                    profileImage: 'https://randomuser.me/api/portraits/women/20.jpg',
                  },
                },
                data: {
                  text: 'Snowboarding is awesome!',
                },
              }}
            />
       <CommentBox activity={activity} onSubmit={(data) => console.log('submitting', data)} onAddReaction={(data) => console.log('onAddReaction', data)}/>
    </Container>

  )
}

export default StreamView
