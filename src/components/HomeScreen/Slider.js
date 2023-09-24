import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import {CAROUSEL_IMAGE} from '../../Custom/Constants';

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  const data = [
    CAROUSEL_IMAGE.IMAGE1,
    CAROUSEL_IMAGE.IMAGE2,
    CAROUSEL_IMAGE.IMAGE3,
    // ... Add more images
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length;
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: nextIndex * screenWidth,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {data.map((imageSrc, index) => (
          <View style={[styles.carouselItem, {width: screenWidth}]} key={index}>
            <Image
              source={imageSrc}
              style={{width: '100%', height: '100%', borderRadius: 5}}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicators}>
        {data.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.indicator, {opacity}]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 180,
    marginBottom: 10,
    paddingVertical: 10,
  },
  carouselItem: {
    backgroundColor: 'white',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  indicator: {
    height: 7, // Smaller dot
    width: 7, // Smaller dot
    backgroundColor: 'grey',
    margin: 4,
    borderRadius: 3,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
});

export default Slider;
