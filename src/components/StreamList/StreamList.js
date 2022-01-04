import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList = ({navigation}) => {
  //console.log('got navigation', navigation)
  const StreamItem =({navigation}) => {
    console.log('stream item', navigation === undefined)
    return (
      <StreamContainer onPress={() => navigation.navigation.navigate('StreamView')}>
        <StreamThumbnail source={{uri:"https://image.mux.com/02dxu01Fbx01MB00FCMG7pQHzWoHjGgN6XLGxQWZQmVHxLY/thumbnail.png?width=214&height=121&fit_mode=pad"}}/>

        <StreamColumn title="jkol36">
          <StreamRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>jkol36</StreamUsername>
            </StreamHeader>

            <StreamDescription numberOfLines={2}>
              Live coding com React Native e TypeScript.
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamRow>

          <TagRow>
            <TagView>
              <TagText>React Native</TagText>
            </TagView>
            <TagView>
              <TagText>Mobile Development</TagText>
            </TagView>
            <TagView>
              <TagText>Coding</TagText>
            </TagView>
          </TagRow>
        </StreamColumn>
      </StreamContainer>
    )
  }

  return (
    <List>
      <StreamItem navigation={navigation} />
      <StreamItem navigation={navigation} />
      <StreamItem navigation={navigation} />
      <StreamItem navigation={navigation} />
    </List>
  );
}


export default StreamList;
