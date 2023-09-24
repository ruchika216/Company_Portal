import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, Image} from 'react-native';
import CustomModal from '../../Custom/CustomModal';
import {PROFILE} from '../../Custom/Constants';
import {Badge} from 'react-native-elements';

const Status = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const status = isOnline ? 'success' : 'error';
  const toggleSwitch = () => {
    setModalVisible(true);
  };

  const handleSave = yesChecked => {
    if (yesChecked) {
      setIsOnline(!isOnline);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <View
          style={{
            height: 55,
            width: 55,
            borderRadius: 10,
            backgroundColor: '#e3e7ea',
          }}>
          <Image
            source={PROFILE.TOM}
            style={{height: 55, width: 55, borderRadius: 10}}
            resizeMode="cover"
          />
          <Badge
            status={status}
            containerStyle={{
              position: 'absolute',
              bottom: 46,
              left: 45,
            }}
            badgeStyle={{
              height: 15,
              width: 15,
              borderRadius: 10,
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.statusText}>
            {isOnline ? "I'm Online" : "I'm Offline"}
          </Text>
          <Text style={styles.awaitingText}>Awaiting Request..</Text>
        </View>
        <Switch
          value={isOnline}
          onValueChange={toggleSwitch}
          style={styles.switchStyle}
        />

        <CustomModal
          visible={modalVisible}
          onSave={handleSave}
          onClose={() => setModalVisible(false)}
          isOnline={isOnline}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#F2FAFF',
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2FAFF',
    margin: 10,
    borderRadius: 8,
  },

  statusText: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
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
  },
  switchStyle: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
});

export default Status;
