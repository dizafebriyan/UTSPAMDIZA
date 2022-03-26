import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pembatalan = () => {
  return (
    <View>
      <Text>Pembatalan</Text>
    </View>
  )
}

export default Pembatalan

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View,ImageBackground,Image,Dimensions,StatusBar,TextInput,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
// import React,{Component} from 'react'
// import AwesomeButton from 'react-native-really-awesome-button'

// const Pembatalan = () =>{
// 	const [text, onChangeText] = React.useState("Useless Text");
//   	const [number, onChangeNumber] = React.useState(null);
//   	<Text style={style.headPesan}>Daftar Pembatalan</Text>
//   	return (
//   		<SafeAreaView style={styles.container}>
//   		<ScrollView style={styles.scrollView}>
//   		<Text style={style.kotaAwal}> -> </Text>
//   		<Text style={style.kotaTujuan}></Text>

//   		<Text>Jadwal Masuk Pelabuhan</Text>
//   		<Text style={style.tanggalMasuk}>Kamis, 22 Maret 2022</Text>
//   		<Text>Layanan</Text>
//   		<Text style={style.layanan}>Express</Text>

//   		//line

//   		<Text style={style.kategoriPenumpang}>Dewasa</Text>
//   		<Text style={style.tarif}>Rp. 65.0000 </Text>

//   		<AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
//             onPress={next => {
//             console.log("berhasil");
//             next();
//             }}
//             >
//              <Text style={styles.text}>Batalkan Pesanan</Text>

//           </AwesomeButton>
//   	)

// }



// const batalkosong = () =>{
// 	const [text, onChangeText] = React.useState("Useless Text");
//   	const [number, onChangeNumber] = React.useState(null);
//     <ImageBackground source={BgBatal} style={styles.background}>
//   	<Text style={style.headPesan}>Daftar Pemesanan</Text>
//   	return (
//   		<SafeAreaView style={styles.container}>
//   		<ScrollView style={styles.scrollView}>
//   		<Text style={style.batalanKosong}> Tidak ada pesanan yang dibatalkan </Text>
  		

// }