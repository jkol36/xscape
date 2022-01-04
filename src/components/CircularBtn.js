//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const Circularbtn = ({
    text,
    onPress
}) => {
    return (
        <TouchableOpacity style={{}}>

            <Image
                source={{ uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/122132213_765825297311604_170610126647065313_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=ZOgtKubkLR8AX9TG98f&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_1RoakRl9TteSH796XrykLjJSUgBmzfqeNzReqU8F4yQ&oe=61D7F3DD&_nc_sid=7bff83' }}
                style={styles.imgStyle}
            />

            <View style={styles.bottomView}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView: {
        backgroundColor: colors.white,
        borderRadius: moderateScale(24),
        alignSelf: 'flex-start',
        padding: 4
    },
    textStyle: {
        ...commonStyles.fontSize12,
        alignSelf: 'center',
        color: colors.black,
        fontFamily: fontFamily.bold
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

//make this component available to the app
export default Circularbtn;
