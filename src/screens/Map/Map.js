import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Image, Text, Dimensions, NativeModules } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Circularbtn from '../../components/CircularBtn';
import HomeHeader from '../../components/HomeHeader';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';
import { getAddressFromLatLong, getUri, getStatusText } from '../../utils/helperFunctions';
import Orientation from 'react-native-orientation';
import SwipeablePanel from 'react-native-sheets-bottom';
import { NodePlayerView } from 'react-native-nodemediaclient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';



import { WatchStreamButton, ButtonText, InfoName, StreamingText, Bold, LastStreamDate, MapStyle  } from './styles';
import { data } from './data';

const StreamPreview = ({height}) => {
  const [streaming, setStreaming] = useState(false);
  const [paused, setPaused] = useState(false)
  const ref = useRef(null);
  return (
    <View style={{flex: 1}}>
      {/*<ApiVideoPlayer style={{height: 250, marginBottom: 20, width: 370, padding: 10, margin: 10}} videoId="vi4SzIk2QlYWQpSpe5fUMTst" /> */}
      <NodePlayerView 
        style={{height: 150}}
        ref={(vp) => { this.vp = vp }}
        inputUrl={"rtmps://global-live.mux.com:443/app/a9d872cf-4ad8-6af2-f150-98d7c378fedf"}
        scaleMode={"ScaleAspectFit"}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
      />
      <WatchStreamButton><ButtonText>Watch the full stream</ButtonText></WatchStreamButton>
    </View>
  );
};


const getColor = status => {
  switch(status) {
    case 0: {
      return 'red'
    }
    case 1: {
      return 'green'
    }
    case 2: {
      return 'yellow'
    }
      
  }
}
const OnlineStatus = ({status}) => {
  console.log('uri', getUri(status), status)
  return (
    <EntypoIcons name="dot-single" size={24} style={styles.statusIndicator} color={getColor(status)} />  )
}
const Info = data => {
  const { name, lastStreamDate, status, streaming } = data.data
  console.log('got status', status)
  return (
    <>
      <OnlineStatus status={status} />
      <InfoName>{ name }</InfoName>
      {streaming ?
        <>
          <SimpleLineIcons name='camrecorder' size={15} color={'red'} style={styles.recorder} />
          <Bold style={{textAlign: 'center'}}> Live Now </Bold>
          <StreamingText> cheese steak reviews
        </StreamingText>
        </>
        : <LastStreamDate> last stream { lastStreamDate }</LastStreamDate>
      }
    </>
  )
}
const Map = () => {
    const [engine, setEngineInstance] = useState(null)
    const [curLoc, setCurLoc] = useState({
        latitude: 39.952583,
        longitude: -75.165222,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [showDrawer, setShowDrawer] = useState(false)
    const [panelData, setPanelData] = useState({})
    const [ height, setHeight ] = useState(600)
    const [address, setAddress] = useState('')
    const mapRef = useRef(null)

    const onCenter = () => {
        console.log(mapRef)
        mapRef.current.animateToRegion(curLoc)
    }


    const onRegionChange = async(props) =>{
        // console.log("props==>>>",props)
        const {latitude, longitude} = props
        const res = await getAddressFromLatLong(`${latitude}, ${longitude}`)
        console.log("res==>>>>>",res)
        setAddress(res.address)

    }

    const handleMarkerClick = (data) => {
      console.log('clicked', data)
      setPanelData(data)
      setShowDrawer(!showDrawer)
    }

    return (
        <View style={{ flex: 1, }}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                customMapStyle={MapStyle}
                initialRegion={curLoc}
                onRegionChangeComplete={onRegionChange}
            >

                {data.map((val, i) => {
                  console.log('got val', val)
                    return (
                        <Marker
                            coordinate={val.coords}
                            image={val.img}
                            calloutOffset={[0, 0]}
                            tappable
                            flat={false}
                            onPress={() => handleMarkerClick(val)}
                        >
                        <Callout> 
                          <Info data={val} />
                        </Callout>
                        </Marker>
                    )
                })}
            </MapView>

            <View style={styles.headerView}>
                <HomeHeader
                    setting={imagePath.icSetting}
                    centerText={address}
                />
            </View>
            <SwipeablePanel
              fullWidth
              isActive={showDrawer}
              onClose={setShowDrawer}
              onPressCloseButton={setShowDrawer}
              style={{height: 700}}
            >
              <StreamPreview />
            </SwipeablePanel>
            <View style={styles.bottomView}>
              {/* add flex direction row to add back circular buttons */}
                <View style={{alignItems: "center", justifyContent: 'space-between' }}>
                    {/*<Circularbtn
                        text={'something here'}
                    />*/}

                    <TouchableOpacity onPress={onCenter} style={styles.navigationView}>
                        <FontAwesomeIcons name='location-arrow' size={20} />
                    </TouchableOpacity>

                    {/*<Circularbtn
                        text={'something here'}
                    />*/}
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },

    headerView: {
        position: 'absolute',
        top: 36,
        left: 24,
        right: 24,
    },
    navigationView: {
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: moderateScale(35 / 2),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusIndicator: {
      marginLeft: '40%',
      position: 'absolute',
      marginTop: -3
      
    },
    recorder: {
      marginLeft: '25%',
      fontSize: 15,
      position: 'absolute',

    },

});

//make this component available to the app
export default Map;