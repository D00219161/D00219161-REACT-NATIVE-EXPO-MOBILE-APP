import * as React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Slider extends React.Component {
  render() {
    const images = [
      'https://scontent.fdub3-1.fna.fbcdn.net/v/t31.0-0/p640x640/21994267_2005217366392233_180456208231333472_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=JscUWMVM5LIAX9aC8WS&_nc_ht=scontent.fdub3-1.fna&_nc_tp=6&oh=7ad3000285170bf453d1a870a93bc619&oe=5EDDF48A',
      'https://scontent.fdub3-1.fna.fbcdn.net/v/t31.0-0/p640x640/23737627_2030078647239438_1845810789773408860_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=nLnHWBKSo9kAX_zvRM4&_nc_ht=scontent.fdub3-1.fna&_nc_tp=6&oh=d9fa30b3da1ccc62ff2a1a0df7c85ad9&oe=5EDFA892',
      'https://scontent.fdub3-1.fna.fbcdn.net/v/t1.0-9/p720x720/48359595_2271478909766076_4954167174466895872_o.jpg?_nc_cat=107&_nc_sid=9e2e56&_nc_ohc=5seha5RoNtUAX9Cmhkq&_nc_ht=scontent.fdub3-1.fna&_nc_tp=6&oh=9f23bac72101dfe70a6bd89d4a85a247&oe=5EDFA1F5',
      'https://scontent.fdub3-1.fna.fbcdn.net/v/t1.0-9/p720x720/48394640_2271478786432755_6627092730516340736_o.jpg?_nc_cat=111&_nc_sid=9e2e56&_nc_ohc=sUJmoB12Wn8AX8OQl9N&_nc_ht=scontent.fdub3-1.fna&_nc_tp=6&oh=d0ae0d5c2803880ef4c3f89d007433f2&oe=5EDFA9DF',
    ];

    return (
      <View style={styles.container}>
        <View style={styles.content1}>
        <Text style={styles.contentText}>Photography With Nature</Text>
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={2000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            <View
              key={index}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}>
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: { backgroundColor: '#fff', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#000',
  fontSize: 40,
  textAlign: 'center',
},
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 250,
    height: 450,
  },
});