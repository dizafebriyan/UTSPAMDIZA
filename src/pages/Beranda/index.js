import { StyleSheet, Text, View,ImageBackground,Image,Dimensions,StatusBar,TextInput,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import { BgBeranda } from '../../assets'
import { logo } from '../../assets'
import AwesomeButton from 'react-native-really-awesome-button'


const Beranda = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={BgBeranda} style={styles.background}>

        <Image source={logo} style={styles.logo}/>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button} progress
            onPress={next => {
            kapalberangkat();
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Pilih Kapal Keberangkatan</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Pilih Pelabuhan Tujuan</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Pilih Layanan</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Pilih Tanggal Masuk</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Pilih Jam Masuk</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#00579C' width={200} style={styles.button2} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Dewasa</Text>

          </AwesomeButton>

          <AwesomeButton backgroundColor='#EE9E54' width={200} style={styles.button3} progress
            onPress={next => {
            console.log("berhasil");
            next();
            }}
            >
             <Text style={styles.text}>Buat Tiket</Text>

          </AwesomeButton>

        </ImageBackground>
      </ScrollView>
      </SafeAreaView>
  )
}

const kapalberangkat = () => {
  console.log("berhasilkapalberangkat");

}






export default Beranda

const WindowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const styles = StyleSheet.create({

  background:{
    alignItems:'center',
    width:WindowWidth,
    height:windowHeight
  },

  logo:{
    marginTop:StatusBar.currentHeight*3,
    height:windowHeight/15,
    width:WindowWidth/3
     },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {},

  text: {
    color:'#FFFFFF',
    fontSize:12
    
  },

  input: {
    textAlign:'center',
    justifyContent:'center',
    height: windowHeight/20,
    width: WindowWidth-40,
    marginTop:20,
    borderWidth: 1,
    padding: 10,
  },

  button:{
    marginTop:30
  },
  button2:{
    marginTop:10
  },
  button3:{
    marginTop:30
  }
})