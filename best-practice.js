function titleCase(title, minorWords) {
    if (!title) return title;

    const capitalizeFirstChar = word => word.charAt(0).toUpperCase() + word.slice(1);

    const minorWordsArr = (minorWords || '')
        .toLowerCase()
        .split(' ');

    const result = title
        .toLowerCase()
        .replace(/\S+/g, char => minorWordsArr.indexOf(char) === -1 ? capitalizeFirstChar(char) : char);

    return capitalizeFirstChar(result);
}