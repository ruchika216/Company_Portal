import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Slider from '../components/HomeScreen/Slider';
import Status from '../components/HomeScreen/Status';
import MySchedule from '../components/HomeScreen/MySchedule';

const Home = () => {
  return (
    <ScrollView style={styles.bg} showsVerticalScrollIndicator={false}>
      <Slider />
      <Status />
      <MySchedule />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    height: Dimensions.get('screen').height + 200,
    backgroundColor: 'white',
    padding: 15,
  },
});
