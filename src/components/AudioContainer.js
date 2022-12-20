import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AudioContainer() {
    const [episodes, setEpisodes] = useState([
        { name: 'Image of God', key: 1 },
        { name: 'The Son of Man', key: 2 },
        { name: 'The Door', key: 3 },
        { name: 'The Water of Life', key: 4 },
        { name: 'The Test', key: 5 },
        { name: 'The Day of the Lord', key: 6 },
        { name: 'The Light', key: 7 },
        { name: 'Jesus: Walking on Water', key: 8 },
        { name: 'Jesus: The Parable of the Persistent Widow', key: 9 },
        { name: 'Jesus: Feeding the 5,000', key: 10 },
        { name: 'Jesus: The Parable of the Prodigal Son', key: 11 },
        { name: 'Jesus: The Widow of Nain', key: 12 },
        { name: 'Jesus: The Parable of the Pharisee and the Tax Collector', key: 13 },
    ])

    return (
        <View>
            <>{episodes.map((item) => {
                return (
                    <View key={item.key}>
                        <Text>{item.name}</Text>
                    </View>
                );
            })}</>
        </View>
    );
}
