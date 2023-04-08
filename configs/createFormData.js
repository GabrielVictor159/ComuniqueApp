

const createFormData = async (uri, type, nomeDoParametro) => {
    const formData = new FormData();



    const { fileName, extension } = getFileNameAndExtensionFromUri(uri);
    formData.append(nomeDoParametro, {
        uri: uri,
        type: `${type}/${extension}`,
        name: `${fileName}.${extension}`,
    });


    return formData;
};

export default createFormData;

const getFileNameAndExtensionFromUri = (uri) => {
    // Use a função split para separar a string em partes usando a barra ("/") como delimitador
    const parts = uri.split('/');

    // A última parte será a parte que contém o nome do arquivo com sua extensão
    const fileNameWithExtension = parts[parts.length - 1];

    // Use a função split novamente para separar o nome do arquivo e sua extensão usando o ponto (".") como delimitador
    const fileNameAndExtension = fileNameWithExtension.split('.');

    // O primeiro item do array será o nome do arquivo e o último item será a extensão
    const fileName = fileNameAndExtension[0];
    const extension = fileNameAndExtension[fileNameAndExtension.length - 1];

    // Retorne o nome do arquivo e a extensão como um objeto
    return {
        fileName,
        extension,
    };
};