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
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    emailIcon: {
        color: mainColor,
        fontSize: 30,
        width: 32,
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
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        color: mainColor,
        fontSize: 16,
    },
})

const Email = ({ containerStyle, onPressEmail, name, email, index }) => (
    <TouchableOpacity onPress={() => onPressEmail(email)}>
        <View style={[styles.container, containerStyle]}>
            <View style={styles.iconRow}>
                {index === 0 && (
                    <Icon
                        style={styles.emailIcon}
                        fill='#8F9BB3'
                        name='email'
                        onPress={() => onPressEmail()}
                    />

                )}
            </View>
            <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                    <Text style={styles.emailText}>{email}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    {name.length !== 0 && (
                        <Text style={styles.emailNameText}>{name}</Text>
                    )}
                </View>
            </View>
        </View>
    </TouchableOpacity>
)


export default Email
