import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';




const GoLive = () => {
  const [streaming, setStreaming] = useState(false)
  return (
    <View> 
      <NodeCameraView 
        style={{ height: 400 }}
        ref={(vb) => { this.vb = vb }}
        outputUrl = {"rtmps://global-live.mux.com:443/app/a9d872cf-4ad8-6af2-f150-98d7c378fedf"}
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
        autopreview={true}
      />
      <TouchableOpacity
        onPress={() => {
            this.vb.start()
          }
        }
        style={{backgroundColor: '#841584'}}
      ><Text> {streaming ? 'stop stream': 'start stream'} </Text></TouchableOpacity>
    </View>
  )
}

export default GoLive;
