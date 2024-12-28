
document.getElementById('caesarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = document.getElementById('inputText').value;
    const shiftValue = parseInt(document.getElementById('shift').value);
    const mode = document.querySelector('input[name="mode"]:checked').value; // Get the selected mode (encrypt or decrypt)
     
    let resultText; 
 
    if (mode === 'encrypt') {
        resultText = caesarCipher(inputText, shiftValue);
    } else if (mode === 'decrypt') {
        resultText = caesarCipher(inputText, -shiftValue); // For decryption, we just reverse the shift
    } 

    document.getElementById('outputText').textContent = resultText;
});

function caesarCipher(str, shift) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Check if it's a letter
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65); // +26 to handle negative shifts
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97); // +26 to handle negative shifts
            }
        }
        result += char;
    }
    return result;
}
