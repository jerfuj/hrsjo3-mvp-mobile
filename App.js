import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <ImageBackground
          style={styles.img}
          source={{uri: item.img}}
        >
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} />
          <Text style={styles.code}>{item.airport_code}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
};

const App = () => {
  const [cities, setCities] = useState([]);

  const getCities = () => {
    return fetch('http://192.168.86.28:3000')
      .then(response => response.json())
      .then(jsonRes => setCities(jsonRes))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCities()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: "https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/HA+Logo.png"}}
        style={styles.logo}
      />
      <FlatList
        style={styles.list}
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item.airport_code}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 60,
    left: 30
  },
  item: {
    flex:1,
    width: '100%',
    marginTop: 5,
    color: '#fff'
  },
  list: {
    width: '100%',
  },
  logo: {
    height: 60,
    width: '50%',
    resizeMode: 'contain',
    marginBottom: 10
  },
  img: {
    flex: 1,
    height: 100,
    width: '100%',
    justifyContent: 'center',
  }
})


export default App;