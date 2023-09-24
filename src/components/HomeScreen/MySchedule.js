import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ListItem, Card} from 'react-native-elements';
import {data} from '../../Custom/data';
import Session from './Session';
import {ICONS} from '../../Custom/Constants';

const MySchedule = () => {
  const [expanded, setExpanded] = React.useState(null);
  return (
    <View>
      {data.map((e, index) => (
        <Card
          key={e.title}
          containerStyle={{
            backgroundColor: '#F2FAFF',
            marginHorizontal: 0,
            elevation: 0,
            borderRadius: 10,
            borderColor: 'transparent',
            padding: 0,
          }}>
          <ListItem.Accordion
            containerStyle={{backgroundColor: '#F2FAFF'}}
            underlayColor="transparent"
            content={
              <ListItem.Content id={e.title}>
                <ListItem.Title>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={e.icon} style={{height: 20, width: 20}} />
                    <View style={{width: 5}}></View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {e.title}
                    </Text>
                  </View>
                </ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded === index}
            onPress={() => {
              setExpanded(expanded == index ? null : index);
            }}
            style={styles.containerAccordion}>
            <ListItem.Subtitle
              style={{paddingHorizontal: 15, color: '#2cbe75'}}>
              {e.description}
            </ListItem.Subtitle>

            {e.content.map((e, index) => {
              return (
                <View key={index} style={{padding: 10}}>
                  <Session contentData={e} isEven={index % 2 == 0} />
                </View>
              );
            })}

            <TouchableOpacity style={{paddingBottom: 10}}>
              <Text style={{color: '#2cbe75', textAlign: 'center'}}>
                View More
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    tintColor: '#2cbe75',
                  }}
                  resizeMode="cover"
                  source={ICONS.ARROW}
                />
              </Text>
            </TouchableOpacity>
          </ListItem.Accordion>
        </Card>
      ))}
    </View>
  );
};

export default MySchedule;

const styles = StyleSheet.create({
  containerAccordion: {},
});
