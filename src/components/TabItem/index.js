import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {IconBeranda,IconBerandaActive,IconLainnya,IconLainnyaActive,IconPembatalan,IconPembatalanActive,IconPesananSaya,IconPesananSayaActive} from '../../assets'
import { WARNA_DISABLE,WARNA_SECOND,WARNA_UTAMA } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label === "Beranda")return isFocused ? <IconBerandaActive/> : <IconBeranda/>
        if(label === "Lainnya")return isFocused ? <IconLainnyaActive/> : <IconLainnya/>
        if(label === "Pesanan Saya")return isFocused ? <IconPesananSayaActive/> : <IconPesananSaya/>
        if(label === "Pembatalan")return isFocused ? <IconPembatalanActive/> : <IconPembatalan/>
        
        return<IconBeranda/>
    }
  return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <Icon/>
        <Text style={styles.text(isFocused)}>{label}</Text>

    </TouchableOpacity>
  )
  }

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text: (isFocused)=>({
        fontSize:13,
        color : isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop:8
    })
})