import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

import imag from '../../assets/topos.png';

const width = Dimensions.get('screen').width;

export function Cesta() {
    return <Image source={imag} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: width * 0.8,
        height: width * 0.8,
    },
});
