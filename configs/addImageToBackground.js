import AsyncStorage from '@react-native-async-storage/async-storage';

const addImageToBackground = async (uri = null, remove = false) => {
    try {
        const response = await fetch(uri);
        const blob = await response.blob();

        // Salva a imagem no AsyncStorage
        await AsyncStorage.setItem('background', JSON.stringify(blob));
    } catch (error) {
        console.error('Erro ao atualizar imagem do background:', error);
    }
};


export default addImageToBackground;