import React from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native'
import { Card, Icon } from '@ui-kitten/components';
import Email from './Email'
import Tel from './Tel'
import Separator from './Separator'
import ContentRow from './ContentRow'

const BellIcon = props => <Icon {...props} name="bell-outline" />;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 45,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
})

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }


    onPressPlace = () => {
        console.log('place')
    }

    onPressTel = number => {
        Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err))
    }

    onPressSms = () => {
        console.log('sms')
    }
    onPressMessage = (number) => {
        Linking.openURL(`whatsapp://send?text=hello&phone=${number}`).catch(err => console.log('Error:', err))
    }


    onPressEmail = email => {
        Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
            console.log('Error:', err)
        )
    }

    renderTel = () => (
        <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            contentContainerStyle={styles.telContainer}
            data={this.props.tels}
            renderItem={(list) => {
                const { id, name, number } = list.item
                return (
                    <Tel
                        key={`tel-${id}`}
                        index={list.index}
                        name={name}
                        number={number}
                        onPressMessage={this.onPressMessage}
                        onPressTel={this.onPressTel}
                    />
                )
            }}
        />
    )
    renderJawatan = () => {
        const {
            Jawatan,
        } = this.props
        return (<ContentRow name={"Jawatan"} value={Jawatan} />);
    }
    renderTugas = () => {
        const {
            Tugas,
        } = this.props
        return (<ContentRow name={"Tugas"} value={Tugas} icon={"award-outline"} />);
    }


    renderHeader = () => {

        const {
            NoAhli,
            avatar,
            avatarBackground,
            name_profile,
            address,
        } = this.props


        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{ uri: avatarBackground }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: avatar }}
                        />
                        <Text style={styles.userNameText}>{name_profile}</Text>
                        <View style={styles.userAddressRow}>


                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                    {NoAhli}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        )
    }

    renderEmail = () => (
        <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            contentContainerStyle={styles.emailContainer}
            data={this.props.emails}
            renderItem={(list) => {
                const { email, id, name } = list.item
                return (
                    <Email
                        key={`email-${id}`}
                        index={list.index}
                        name={name}
                        email={email}
                        onPressEmail={this.onPressEmail}
                    />
                )
            }}
        />
    )

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
                        {this.renderHeader()}
                        {this.renderTugas()}
                        {Separator()}
                        {this.renderJawatan()}
                        {Separator()}
                        {this.renderTel()}
                        {Separator()}
                        {this.renderEmail()}
                    </Card>
                </View>
            </ScrollView>
        )
    }
}
