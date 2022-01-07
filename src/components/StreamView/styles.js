import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';
import { VlCPlayerView } from 'react-native-vlc-media-player';
import { FlatFeed, StreamApp } from 'react-native-activity-feed';
import Orientation from 'react-native-orientation';
import CircularBtn from '../CircularBtn'


import { Button, TextInput, Card, Title, Paragraph } from 'react-native-paper';

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
  padding-top: 14px;
  padding-right: 14px;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const StreamerCard = ({streamUrl, navigation}) => {
  console.log('navigation', navigation)
  return (
    <Card style={{width}}>
        <VlCPlayerView
          autoplay={false}
          url={streamUrl}
          Orientation={Orientation}
          ggUrl={streamUrl}
          showTitle={true}
          showBack={true}
          title="Programming"
          onLeftPress={()=>navigation.navigate('Following')}
          style={{width}}
      > 

        <Button size={12} style={{color: 'red', marginTop: 20, zIndex: 10}}> Yooo </Button>
      </VlCPlayerView>
      <Card.Content style={{height: 100, backgroundColor: colors.lightGrey}}>
        <CircularBtn style={{marginRight: 10}} />
        <Title style={{left: 60, bottom: 70}}>Jkol36</Title>
        <Paragraph style={{left: 60, bottom: 80, zIndex: 10, fontSize: 10}}>{'Programming in react native'}</Paragraph>
        <TagRow>
          <TagView>
            <TagText>React Native</TagText>
          </TagView>
          <TagView>
            <TagText>Programming</TagText>
          </TagView>
        </TagRow>
        <FollowButton title='Follow'/>
      </Card.Content>
    </Card>
  )
}

export const StreamerName = styled.TouchableOpacity`
  font-size: 50;
  color: 'purple';

`
export const StreamTitle = styled.Button`
  font-size: 20;
`

export const FollowButton = ({children, title}) => {
  return (
    <Button style={styles.followButton}>  
      <Text style={{color: 'white'}}>{title}</Text>
    </Button>
  )
}
export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background-color: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
  bottom: 90;
  left: 55;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-size: 10;
`;

export const ChatBox = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <Card style={styles.chatCard}> 
      <Title style={styles.chatText}> Chat </Title>
      <SafeAreaView>
        <StreamApp apiKey='c9mtmr3w2jsa' appId='1159574' token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktZmlyZWZseS01In0.KoHiRV-71SPcV6wyM1MZ6xCUebDhXi7jogtiDWNVuiA'>
          <FlatFeed />
        </StreamApp>
      </SafeAreaView>
      <Card.Actions style={styles.ChatActions}> 
        <TextInput 
          label="Send a message"
          value={text}
          style={{width}}
          onChangeText={text => setText(text)}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  followButton: {
    backgroundColor: colors.purple,
    width: 110,
    color: colors.white,
    bottom: 150,
    left: 260,
  },
  chatText: {
    left: 20,
  },
  chatCard: {
    width,
    height,
  },
  chatBox: {
    height: height - 400,
    backgroundColor: colors.lightGrey
  },
  ChatActions: {
    bottom: 50
  }
})