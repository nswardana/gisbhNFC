import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@ui-kitten/components';

import mainColor from './constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    smsIcon: {
        color: 'darkgray',
        fontSize: 30,
        width: 32,
        height: 32

    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    telIcon: {
        color: mainColor,
        fontSize: 30,
        width: 32,
        height: 32
    },
    telNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    telNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    telNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
    },
    telNumberText: {
        color: mainColor,
        fontSize: 16,
    },
    telRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

const Tel = ({
    containerStyle,
    index,
    name,
    number,
    onPressMessage,
    onPressTel,
}) => {
    return (
        <TouchableOpacity onPress={() => onPressTel(number)}>
            <View style={[styles.container, containerStyle]}>
                <View style={styles.iconRow}>
                    {index === 0 && (
                        <Icon
                            style={styles.telIcon}
                            fill='#8F9BB3'
                            name='phone-call-outline'
                            onPress={() => onPressTel()}
                        />
                    )}
                </View>

                <View style={styles.telRow}>
                    <View style={styles.telNumberColumn}>
                        <Text style={styles.telNumberText}>{number}</Text>
                    </View>
                    <View style={styles.telNameColumn}>
                        {name.length !== 0 && (
                            <Text style={styles.telNameText}>{name}</Text>
                        )}
                    </View>
                </View>
                <View style={styles.smsRow}>
                    <Icon
                        style={styles.telIcon}
                        fill='#8F9BB3'
                        name='message-circle-outline'
                        onPress={() => onPressMessage(number)}
                    />
                </View>

            </View>
        </TouchableOpacity>
    )
}


export default Tel
