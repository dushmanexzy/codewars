function rgb(r, g, b) {
    function rgbToHex(s) {
        let transformedS = s;

        if (s < 0) {
            transformedS = 0;
        }

        if (s > 255) {
            transformedS = 255;
        }

        const hex = transformedS.toString(16);

        return hex.length === 1 ? '0' + hex : hex;
    }

    return (rgbToHex(r) + rgbToHex(g) + rgbToHex(b)).toUpperCase();
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255))  //'FFFFFF'
console.log(rgb(173, 255, 47)); //'ADFF2F'