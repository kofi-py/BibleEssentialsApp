import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bible Essentials</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'ios' ? '#ffffff' : '#72bcd4',
        padding: 15,
        borderBottomColor: Platform.OS === 'ios' ? '#72bcd4' : '#ffffff',
        borderEndWidth: 1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 48,

        color: Platform.OS === 'ios' ? '#72bcd4' : '#ffffff',
        fontFamily: Platform.OS == 'ios' ? 'TeX-Gyre-Adventor' : 'TeX-Gyre-Adventor-Bold'
    }
})

export default AppHeader;