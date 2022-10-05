import React from 'react';
import { Modal, View, StyleSheet, Pressable, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const BottomSheet = ({ containerStyle, backdropStyle, onBackdropPress = () => null, isVisible = false, modalProps = {}, children, scrollViewProps = {}, ...rest }) => {
    return (React.createElement(Modal, { animationType: "slide", onRequestClose: onBackdropPress, transparent: true, visible: isVisible, ...modalProps },
        React.createElement(Pressable, { onPress: onBackdropPress, style: [StyleSheet.absoluteFill, backdropStyle], testID: "RNE__Overlay__backdrop" }),
        React.createElement(SafeAreaView, { style: StyleSheet.flatten([
                styles.safeAreaView,
                containerStyle && containerStyle,
            ]), pointerEvents: "box-none", ...rest },
            React.createElement(View, null,
                React.createElement(ScrollView, { ...scrollViewProps }, children)))));
};
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'column-reverse',
    },
});
BottomSheet.displayName = 'BottomSheet';
