import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { Ionicons } from '@expo/vector-icons';
function ItemBookrank({ url, title, textbook }) {
    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center', width: 400, height: 180, borderRadius: 20
        }}>
            <Image source={require('../../img/top.png')} style={{ width: 45, height: 45 }} />

            <View style={{ height: '80%', width: '30%' }}>
                <Image source={url} style={{ width: 100, height: 150, borderRadius: 10 }} />

            </View>
            <View style={{ justifyContent: 'flex-start', height: '80%', overflow: 'scroll', width: '50%' }}>
                <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 15 }}>{title}</Text>
                {textbook ? (
                    <Text style={{ marginTop: 30 }}>{textbook}</Text>
                ) : null}

            </View>
            <Ionicons name="chevron-forward" size={24} color="#000" />


        </View>
    )
}
export default ItemBookrank;
