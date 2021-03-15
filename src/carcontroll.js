import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const chwidth = Dimensions.get('window').width
const chheight = Dimensions.get('window').height

const Carcontroll = () => {

    const [boot,setBoot] =useState(false)
    const [door, setDoor] = useState(true)
    const [panic, setPanic] = useState(false)
    const [warnbim, setWarnbim] = useState(false)
  
  
    function doorClick (is) {
      if(is=='lock'){
        setDoor(true)
      }
  
      if(is=='unlock'){
        setDoor(false)
      }
    }
  
    function panicClick(is){
  
    }
  
    function warnClick(is){
  
    }
  
    function trunkClick(is){
  
    }
  
    function bootClick(){
      if(boot==false){
        setBoot(true)
        Alert.alert(
          "원격시동을 켰습니다!",
          "",
          [
            { text: "확인" }
          ]
        );
      }else{
        setBoot(false)
        Alert.alert(
          "원격시동을 껐습니다!",
          "",
          [
            { text: "확인" }
          ]
        );
      }
    }
  
    return (
      <View>
        <View style={{ width: chwidth, height: chheight - 40 }}>
  
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text>자동차 이미지</Text>
          </View>
  
          <TouchableWithoutFeedback onPress={()=>{bootClick()}}>
          <View style={{ width: chwidth - 20, flex: 0.8, backgroundColor: '#cccccc', marginLeft: 10, borderRadius: 10,justifyContent:'center' }}>
            {boot ? <Text style={{marginLeft:10}}>원격시동 끄기</Text> : <Text style={{marginLeft:10}}>원격시동 켜기</Text>}
          </View>
          </TouchableWithoutFeedback>
  
          <View style={{ flex: 0.2 }}></View>
  
          <View style={{ flex: 2, flexDirection: 'row', marginLeft: 10 }}>
            <View style={{ width: chwidth / 2 - 15, backgroundColor: '#cccccc', borderRadius: 10 }}>
              <View style={{ flex: 4,justifyContent:'center',alignItems:'center'  }}>
                <Text>도어</Text>
              </View>
  
              {door ? <View style={{ flex: 2, flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={()=>doorClick('unlock')}>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomLeftRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>unlock</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={{flex:0.02}}></View>
                <TouchableWithoutFeedback onPress={()=>doorClick('lock')}>
                <View style={{ flex: 1, backgroundColor: '#ff5c33', borderBottomRightRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>lock</Text>
                </View>
                </TouchableWithoutFeedback>
              </View> : <View style={{ flex: 2, flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={()=>doorClick('unlock')}>
                <View style={{ flex: 1, backgroundColor: '#ff5c33', borderBottomLeftRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>unlock</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={{flex:0.02}}></View>
                <TouchableWithoutFeedback onPress={()=>doorClick('lock')}>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomRightRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>lock</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>}
  
            </View>
            <View style={{ width: chwidth / 2 - 15, backgroundColor: '#cccccc', marginLeft: 10, borderRadius: 10 }}>
              <View style={{ flex: 4,justifyContent:'center',alignItems:'center'  }}>
              <Text>패닉</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
              <TouchableWithoutFeedback>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomLeftRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>off</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={{flex:0.02}}></View>
                <TouchableWithoutFeedback>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomRightRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>on</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.2 }}></View>
          <View style={{ flex: 2, flexDirection: 'row', marginLeft: 10 }}>
            <View style={{ width: chwidth / 2 - 15, backgroundColor: '#cccccc', borderRadius: 10 }}>
              <View style={{ flex: 4,justifyContent:'center',alignItems:'center'  }}>
              <Text>비상등</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
              <TouchableWithoutFeedback>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomLeftRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>off</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={{flex:0.01}}></View>
                <TouchableWithoutFeedback>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomRightRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>on</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ width: chwidth / 2 - 15, backgroundColor: '#cccccc', marginLeft: 10, borderRadius: 10 }}>
              <View style={{ flex: 4,justifyContent:'center',alignItems:'center'  }}>
              <Text>트렁크</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
              <TouchableWithoutFeedback>
                <View style={{ flex: 1, backgroundColor: '#999999', borderBottomLeftRadius: 10, borderBottomRightRadius: 10,justifyContent:'center',alignItems:'center' }}>
                  <Text>open</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
  
        </View>
      </View>
    )
  }

  export default Carcontroll