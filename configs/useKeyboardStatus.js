import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default function useKeyboardStatus() {
    const [isKeyboardActive, setKeyboardActive] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardActive(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardActive(false);
        });

        // Remove listeners on cleanup
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return isKeyboardActive;
}
