const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'c', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
function ceasarsCode(message, step) {
    let result = '';
    [...message].forEach((item) => {
        if (!alphabet.includes(item.toLowerCase())) {
            result += item;
        } else {
            const isUpperCaseLetter = item === item.toUpperCase();
            const letter = isUpperCaseLetter ? item.toLowerCase() : item;
            const shiftIndex = alphabet.includes(alphabet[alphabet.indexOf(letter) + step]) ? (alphabet.indexOf(letter) + step) : step-1;
            result += isUpperCaseLetter ? alphabet[shiftIndex].toUpperCase() : alphabet[shiftIndex];
        }
    });
    return result;
}
ceasarsCode('ая',3);
ceasarsCode('Привет мир2!',3);