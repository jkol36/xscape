//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import RoundImg from './RoundImg';

const HomeHeader = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle,
    centerText,
    lastImg = imagePath.icMore,
    setting
}) => {
    console.log('home header', imagePath)
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <RoundImg
                    image='https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/122132213_765825297311604_170610126647065313_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=ZOgtKubkLR8AX9TG98f&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8GRsIb4dvyTdL2dlT_beR8bZADkyi4mS5BD1S9Tw4XJw&oe=61D9EE1D&_nc_sid=7bff83'
                />

                <Image style={{ marginLeft: moderateScale(16) }} source={imagePath.icSearch} />
            </View>
            <Text style={styles.textStyle}>{centerText}</Text>

            {!!setting ?
                <TouchableOpacity>
                    <Image source={setting} />
                </TouchableOpacity>
            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginRight: moderateScale(16) }} source={imagePath.icAdd} />
                    <Image source={lastImg} />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        ...commonStyles.fontSize20,
        fontFamily: fontFamily.bold,
        flex:1,
    }
});

export default HomeHeader;
