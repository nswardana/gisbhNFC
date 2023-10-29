import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import axios from 'axios';
import Profile from "./Profile"

export default function ProfileScreen({ navigation, route }) {

    const [isLoading, setIsLoading] = useState(true)
    const [contactData, setData] = useState(null)
    const url = "http://api.gisbh.xyz/";

    const { tag } = route.params;
    console.log('Card ID', tag.id);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            await axios.get(url + "stafbynocard/" + tag.id).then((res) => {
                console.warn('data', res.data);
                setIsLoading(false)
                setData(res.data)
            }).catch(err => {
                setIsLoading(false)
            })
        }

        getData()
    }, [])



    const loading = () => (
        <Layout style={styles.container} level='1'>
            <Spinner size='giant' />
        </Layout>
    );

    if (isLoading)
        return loading();

    return (<Profile {...contactData} />);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
});