import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, IconElement } from '@ui-kitten/components';

import mainColor from './constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
    },
    emailIcon: {
        flex: 2,
        color: 'gray',
        fontSize: 30,
        height: 32
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: mainColor,
        fontSize: 14,
        fontWeight: '200',
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        color: mainColor,
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
})

const Jawatan = ({ containerStyle, jawatan, email }) => (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.iconRow}>
            </View>
            <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                    <Text style={styles.emailText}>{jawatan}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{"Jawatan"}</Text>
                </View>
            </View>
        </View>
)


export default Jawatan
