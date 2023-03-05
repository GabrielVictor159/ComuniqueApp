import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ImageStorage {

    // Adiciona uma imagem a partir de sua URL
    static async addImage(url) {
        try {
            // Faz o download da imagem a partir da URL
            const response = await fetch(url);
            const blob = await response.blob();

            // Salva a imagem no AsyncStorage
            await AsyncStorage.setItem(url, JSON.stringify(blob));

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    // Remove uma imagem a partir de sua URL
    static async removeImage(url) {
        try {
            // Remove a imagem do AsyncStorage
            await AsyncStorage.removeItem(url);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}