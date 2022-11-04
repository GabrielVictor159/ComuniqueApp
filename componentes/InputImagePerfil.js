import { Overlay } from "@rneui/themed";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function InputImagePerfil(props){
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          const grantedGallery = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "App Gallery Permission",
              message:"App needs access to your photos",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED && grantedGallery === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            launchCamera({mediaType: 'photo', saveToPhotos: true}, setPickerResponse)
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    }
    async function openImagePickerAsync  ()  {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        
           props.setImage(pickerResult)
           props.setIsVisible(false);
        
        
      };
      async function openCameraPickerAsync  ()  {
        ImagePicker.requestCameraPermissionsAsync()
        let pickerResult = await ImagePicker.launchCameraAsync();
       
           props.setImage(pickerResult);
           props.setIsVisible(false);
        
        
      };
      async function deleteImage()  {
        
           props.setImage(''); 
           props.setIsVisible(false);
      };
      function cancelar(){
        props.setIsVisible(false);
      }
      
    return(
        <Overlay isVisible={props.isVisible} onBackdropPress={cancelar} fullScreen={false}
        overlayStyle={[
        props.overlayStyle    
        ,{alignItems:'center', backgroundColor:'white'}]}>
            <TouchableOpacity style={{elevation:10}}
            onPress={()=>
            deleteImage()
            }
            >
            <View style={{width:300, height:70, backgroundColor:'#FCFCFC', borderRadius:20, elevation:10, justifyContent:'center'}}>
                <Text style={{color:'#BE0B16', textAlign:'center', fontSize:20}}>{'Apagar foto'}</Text>
            </View>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <TouchableOpacity style={{elevation:10}}
            onPress={()=>
                openCameraPickerAsync()
                }
            >
            <View style={{width:300, height:70, backgroundColor:'#FCFCFC', borderRadius:20, elevation:10, justifyContent:'center'}}>
                <Text style={{ textAlign:'center', fontSize:20}}>{'Tirar foto'}</Text>
            </View>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <TouchableOpacity style={{elevation:10}}
            onPress={()=>
                openImagePickerAsync()
                }
            >
            <View style={{width:300, height:70, backgroundColor:'#FCFCFC', borderRadius:20, elevation:10, justifyContent:'center'}}>
                <Text style={{ textAlign:'center', fontSize:20}}>{'Escolher foto'}</Text>
            </View>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <TouchableOpacity style={{elevation:10}}
            onPress={()=>
                cancelar()
                }
            >
            <View style={{width:300, height:70, backgroundColor:'#0D0D0C', borderRadius:20, elevation:10, justifyContent:'center'}}>
                <Text style={{color:'white', textAlign:'center', fontSize:20}}>{'Cancelar'}</Text>
            </View>
            </TouchableOpacity>
        </Overlay>
    );
}