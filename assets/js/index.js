document.body.className = 'wrapper';

const buttons = [ [
    ["tilda", "`", "~", "ё", "Ё"],
    ["number", "1", "!", "1", "!"],
    ["number", "2", "@", "2", "\""],
    ["number", "3", "#", "3", "№"],
    ["number", "4", "$", "4", ";"],
    ["number", "5", "%", "5", "%"],
    ["number", "6", "^", "6", ":"],
    ["number", "7", "&", "7", "?"],
    ["number", "8", "*", "8", "*"],
    ["number", "9", "(", "9", "("],
    ["number", "0", ")", "0", ")"],
    ["number", "-", "_", "-", "_"],
    ["number", "=", "+", "=", "+"],
    ["backspace", "Backspace", "Backspace", "Backspace", "Backspace"]
],
 [
    ["tab", "Tab", "Tab", "Tab", "Tab"],
    ["letter", "q", "Q", "й", "Й"],
    ["letter", "w", "W", "ц", "Ц"],
    ["letter", "e", "E", "у", "У"],
    ["letter", "r", "R", "к", "К"],
    ["letter", "t", "T", "е", "Е"],
    ["letter", "y", "Y", "н", "Н"],
    ["letter", "u", "U", "г", "Г"],
    ["letter", "i", "I", "ш", "Ш"],
    ["letter", "o", "O", "щ", "Щ"],
    ["letter", "p", "P", "з", "З"],
    ["letter", "[", "{", "х", "Х"],
    ["letter", "]", "}", "ъ", "Ъ"],
    ["backslash", "\\", "|", "\\", "/"],
    ["del", "DEL", "DEL", "DEL", "DEL"]
], 
 [
    ["capslock", "Caps Lock", "Caps Lock", "Caps Lock", "Caps Lock"],
    ["letter", "a", "A", "ф", "Ф"],
    ["letter", "s", "S", "ы", "Ы"],
    ["letter", "d", "D", "в", "В"],
    ["letter", "f", "F", "а", "А"],
    ["letter", "g", "G", "п", "П"],
    ["letter", "h", "H", "р", "Р"],
    ["letter", "j", "J", "о", "О"],
    ["letter", "k", "K", "л", "Л"],
    ["letter", "l", "L", "д", "Д"],
    ["letter", ";", ":", "ж", "Ж"],
    ["letter", "'", "\"", "э", "Э"],
    ["enter", "Enter", "Enter", "Enter", "Enter"]
],
 [
    ["leftshift", "Shift", "Shift", "Shift", "Shift"],
    ["letter", "z", "Z", "я", "Я"],
    ["letter", "x", "X", "ч", "Ч"],
    ["letter", "c", "C", "с", "С"],
    ["letter", "v", "V", "м", "М"],
    ["letter", "b", "B", "и", "И"],
    ["letter", "n", "N", "т", "Т"],
    ["letter", "m", "M", "ь", "Ь"],
    ["letter", ",", "<", "б", "Б"],
    ["letter", ".", ">", "ю", "Ю"],
    ["letter", "/`", "?", ".", ","],
    ["up", "up", "up", "up", "up"],
    ["rightshift", "Shift", "Shift", "Shift", "Shift"]
],
 [
    ["ctrl", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["win", "Win", "Win", "Win", "Win"],
    ["alt", "Alt", "Alt", "Alt", "Alt"],
    ["space", "", "", "", ""],
    ["alt", "Alt", "Alt", "Alt", "Alt"],
    ["ctrl", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["left", "left", "left", "left", "left"],
    ["down", "down", "down", "down", "down"],
    ["right", "right", "right", "right", "right"]
]];

const input = document.createElement('input');
input.className = 'input';
input.setAttribute('type', 'textarea');
document.body.prepend(input);

const keyboardDiv = document.createElement('div');
keyboardDiv.className = 'keyboard';
input.after(keyboardDiv);

buttons.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    keyboardDiv.append(rowDiv);

    row.forEach((item) => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        buttonDiv.classList.add(item[0]);
        buttonDiv.innerHTML = item[1];
       rowDiv.append(buttonDiv);  
    });
});
