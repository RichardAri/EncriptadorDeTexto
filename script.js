function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';
    let shift = 3; // Cantidad de posiciones a desplazar

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    let inputText = document.getElementById('outputText').value;
    let outputText = '';
    let shift = 3; // Cantidad de posiciones a desplazar

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }

    document.getElementById('outputText').value = outputText;
    document.getElementById('inputText').value = '';
}
