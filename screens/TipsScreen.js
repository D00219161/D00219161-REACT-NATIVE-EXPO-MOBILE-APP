import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
//Video Thumbnail
import Video from '../components/Video';

export default function LinksScreen() {
  return (
<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

<View style={styles.welcomeContainer}>
<Text style={styles.getStartedText}>
Some Helpful Tips to get you started with Photography!
            </Text>

<Image
     source={require('../assets/images/leaves.jpg')}  
		 style={{height: 350, width: 500}}
		/> 
</View>
      <OptionButton
        icon="md-camera"
        label="Top Tips For Beginners"
        onPress={() => WebBrowser.openBrowserAsync('https://digital-photography-school.com/11-tips-for-beginner-photographers/')}
      />

      <OptionButton
        icon="md-book"
        label="Read Some Top Tricks To Make Your Work Stand Out!"
        onPress={() => WebBrowser.openBrowserAsync('https://www.exposureguide.com/top-10-digital-photography-tips/')}
      />

      <OptionButton
        icon="md-eye"
        label="Visit A Portfolio"
        onPress={() => WebBrowser.openBrowserAsync('https://roisinsportfolioblog.wordpress.com/photography')}
        isLastOption
      />

       <OptionButton
        icon="md-videocam"
        label="Watch A Helpfull Video"
        onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=PW8tr4j1ZWE')}
        isLastOption
      />

        <Video  />

      </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECF9',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
