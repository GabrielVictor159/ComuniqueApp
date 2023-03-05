export default class mensagensImmageTextConvert {
    getContentBetweenDelimiters = (text, delimiter) => {
        const regex = new RegExp(`${delimiter}(.*)${delimiter}`);
        const matches = regex.exec(text);
        if (matches) {
            return matches[1];
        }
        return null;
    }

    replaceContentBetweenDelimiters = (text, delimiter, newContent) => {
        const regex = new RegExp(`${delimiter}(.*)${delimiter}`);
        const replacedText = text.replace(regex, `${delimiter}${newContent}${delimiter}`);
        return replacedText;
    }
}