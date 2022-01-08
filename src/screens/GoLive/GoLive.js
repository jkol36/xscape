import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { StreamButton, ButtonText } from './styles';
import agent from 'superagent';
import base64 from 'react-native-base64'



const GoLive = () => {
  const [streaming, setStreaming] = useState(false);
  const [streamKeyUrl, setStreamUrl] = useState(null);
  const user = 'edfb0ebc-20a3-40c8-93d0-0c651e983d07';
  const password = '1FbTv1HSxDWxJQV6+PRwVCn3z1/mudJYqHDA8mmPNcJmTR4TBZUnkhODiyz73kYhD4G4oItcOaK';  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${base64.encode(`${user}:${password}`)}`
  };
  const playbackPolicy = { 
    "playback_policy": "public", 
    "new_asset_settings": { "playback_policy": "public" } 
  };
  console.log(headers)
  const startLiveStream = async (vb) => {
    console.log('got vb', this.vb)
   const {body: {data}} = await agent
    .post('https://api.mux.com/video/v1/live-streams')
    .set(headers)
    .send(playbackPolicy)
    console.log('data', data)
    const {stream_key, id} = data
   setStreamUrl(`rtmps://global-live.mux.com:443/app/${stream_key}`)
   this.vb.start();
   setStreaming(true)

  }

  const stopLiveStream = (vb) => {
    this.vb.stop()
    setStreaming(false)

  }
  return (
    <View> 
      <NodeCameraView 
        style={{ height: 400 }}
        ref={(vb) => { this.vb = vb }}
        outputUrl={streamKeyUrl}
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
        autopreview={true}
        onStatus={(code, msg) => {
          console.log("onStatus=" + code + " msg=" + msg);
        }}
      />
    {streaming === true ? 
      <StreamButton onPress={stopLiveStream}> 
        <ButtonText> Stop Stream </ButtonText>
      </StreamButton>:
      <StreamButton onPress={startLiveStream}> 
        <ButtonText> Start Stream </ButtonText>
      </StreamButton>
       
    }
    
    </View>
  )
}

export default GoLive;
