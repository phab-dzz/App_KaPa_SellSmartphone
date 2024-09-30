import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
function ItemBook({ url, title, textbook }) {
    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'center', backgroundColor: "#ecdaf0",
            alignItems: 'center', width: 250, height: 180, borderRadius: 20, marginLeft: 50
        }}>
            <View style={{ height: '80%', width: '40%' }}>
                <Image source={url} style={{ width: 100, height: 150, borderRadius: 10 }} />

            </View>
            <View style={{ justifyContent: 'flex-start', height: '80%', overflow: 'scroll', width: '55%', marginLeft: 10 }}>
                <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
                {textbook ? (
                    <Text style={{ marginTop: 30 }}>{textbook}</Text>
                ) : null}

            </View>


        </View>
    )
}
export default ItemBook;
