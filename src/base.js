import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,

} from 'react-native';

const chwidth = Dimensions.get('window').width
const chheight = Dimensions.get('window').height

const Base = () =>{
    return(
        <View>
            <Text>베이스</Text>
        </View>
    )
}

export default Base