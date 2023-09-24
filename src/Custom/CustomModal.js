import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import {ICONS} from './Constants';
import {CheckBox} from 'react-native-elements';

const CustomModal = ({visible, onSave, onClose, isOnline}) => {
  const statusText = isOnline ? 'Offline' : 'Online';
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const [isSavePressed, setIsSavePressed] = useState(false);
  const [isCancelPressed, setIsCancelPressed] = useState(false);

  const handleSave = () => {
    onSave(yesChecked); // Pass only yesChecked to onSave function
    setYesChecked(false); // Reset checkboxes
    setNoChecked(false);
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setYesChecked(false); // Reset checkboxes
    setNoChecked(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.rowContainer}>
            {/* 1st Column: Icon */}
            <View style={styles.iconContainer}>
              <Image
                source={ICONS.NOTES}
                style={{height: 55, width: 55, borderRadius: 10}}
                resizeMode="cover"
              />
            </View>

            {/* 2nd Column: Card with Text and Checkboxes */}
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.modalText}>
                  {`Do you want to go ${statusText} for the whole day?`}
                </Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    title="YES"
                    checked={yesChecked}
                    onPress={() => setYesChecked(!yesChecked)}
                    checkedColor="#2ebd75"
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                    }}
                  />

                  <CheckBox
                    title="NO"
                    checked={noChecked}
                    onPress={() => setNoChecked(!noChecked)}
                    checkedColor="#2ebd75"
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                    }}
                  />
                </View>
              </View>
            </View>

            {/* 3rd Column: Buttons */}
            <View style={styles.buttonColumn}>
              <TouchableOpacity
                onPressIn={() => setIsSavePressed(true)}
                onPressOut={() => {
                  setIsSavePressed(false);
                  onSave();
                  handleSave();
                }}
                style={[styles.button, isSavePressed && styles.buttonPressed]}>
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => setIsCancelPressed(true)}
                onPressOut={() => {
                  setIsCancelPressed(false);
                  // onClose();
                  handleClose();
                }}
                style={[
                  styles.button1,
                  isCancelPressed && styles.buttonPressed,
                ]}>
                <Text style={{color: '#2ebd75', fontWeight: '900'}}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    height: '45%',
    width: '75%',
  },
  rowContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 2,
  },
  card: {
    backgroundColor: '#F2FAFF',
    borderRadius: 8,
    padding: 15,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 5,
  },
  customCheckbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#2cbe75',
    borderRadius: 4,
    marginRight: 5,
  },
  checked: {
    backgroundColor: 'green',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  checkbox: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff4f7',
    padding: 10,
    borderRadius: 4,
    margin: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2cbe75',
    padding: 10,
    borderRadius: 4,
    margin: 5,
  },
  buttonPressed: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomModal;
