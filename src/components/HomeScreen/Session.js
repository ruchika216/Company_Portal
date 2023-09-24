import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Session = ({contentData, isEven}) => {
  // const [isOnline, setIsOnline] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  // const status = isOnline ? 'success' : 'error';

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <View
          style={{
            height: 55,
            width: 55,
            borderRadius: 10,
            backgroundColor: isEven ? 'black' : '#e3e7ea',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: isEven ? 'white' : 'black',
            }}>
            {contentData.date.split(',')[0]}
          </Text>
          <Text style={{fontSize: 12, color: isEven ? 'white' : null}}>
            {contentData.date.split(',')[1]}
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.statusText}>{contentData.text}</Text>
          <Text style={styles.awaitingText}>{contentData.sessions}</Text>
        </View>

        <View>
          <Text style={{fontSize: 12, paddingBottom: 35}}>
            {contentData.time}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },

  statusText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  buttonText: {
    color: 'blue',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  awaitingText: {
    fontSize: 13,
    color: 'grey',
    marginBottom: 9,
    textAlign: 'left',
  },
  switchStyle: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
});

export default Session;
