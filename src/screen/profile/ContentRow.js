import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, IconElement } from '@ui-kitten/components';

import mainColor from './constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 25,
        marginBottom: 5,
    },
    infoIcon: {
        color: mainColor,
        fontSize: 30,
        width: 32,
        height: 32
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
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
        flex: 10,
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

const ContentRow = ({ containerStyle, name, value, icon }) => (
    <View style={[styles.container, containerStyle]}>
        <View style={styles.iconRow}>
            {icon !== undefined && icon !== null && (
                <Icon
                    style={styles.infoIcon}
                    fill='#8F9BB3'
                    name={icon}

                />
            )}
        </View>
        <View style={styles.emailRow}>
            <View style={styles.emailColumn}>
                <Text style={styles.emailText}>{value}</Text>
            </View>
            <View style={styles.emailNameColumn}>
                <Text style={styles.emailNameText}>{name}</Text>
            </View>
        </View>
    </View>
)


export default ContentRow
