document.body.className = 'wrapper';

const buttons = [ [
    ["tilda", "`", "~", "ё", "Ё", "192"],
    ["number", "1", "!", "1", "!", "49"],
    ["number", "2", "@", "2", "\"", "50"],
    ["number", "3", "#", "3", "№", "51"],
    ["number", "4", "$", "4", ";", "52"],
    ["number", "5", "%", "5", "%", "53"],
    ["number", "6", "^", "6", ":", "54"],
    ["number", "7", "&", "7", "?", "55"],
    ["number", "8", "*", "8", "*", "56"],
    ["number", "9", "(", "9", "(", "57"],
    ["number", "0", ")", "0", ")", "48"],
    ["number", "-", "_", "-", "_", "189"],
    ["number", "=", "+", "=", "+", "187"],
    ["backspace", "Backspace", "Backspace", "Backspace", "Backspace", "8"]
],
 [
    ["tab", "Tab", "Tab", "Tab", "Tab", "9"],
    ["letter", "q", "Q", "й", "Й", "81"],
    ["letter", "w", "W", "ц", "Ц", "87"],
    ["letter", "e", "E", "у", "У", "69"],
    ["letter", "r", "R", "к", "К", "82"],
    ["letter", "t", "T", "е", "Е", "84"],
    ["letter", "y", "Y", "н", "Н", "89"],
    ["letter", "u", "U", "г", "Г", "85"],
    ["letter", "i", "I", "ш", "Ш", "73"],
    ["letter", "o", "O", "щ", "Щ", "79"],
    ["letter", "p", "P", "з", "З", "80"],
    ["letter", "[", "{", "х", "Х", "219"],
    ["letter", "]", "}", "ъ", "Ъ", "221"],
    ["backslash", "\\", "|", "\\", "/", "220"],
    ["del", "DEL", "DEL", "DEL", "DEL", "46"]
], 
 [
    ["capslock", "Caps_Lock", "Caps_Lock", "Caps_Lock", "Caps_Lock", "20"],
    ["letter", "a", "A", "ф", "Ф", "65"],
    ["letter", "s", "S", "ы", "Ы", "83"],
    ["letter", "d", "D", "в", "В", "68"],
    ["letter", "f", "F", "а", "А", "70"],
    ["letter", "g", "G", "п", "П", "71"],
    ["letter", "h", "H", "р", "Р", "72"],
    ["letter", "j", "J", "о", "О", "74"],
    ["letter", "k", "K", "л", "Л", "75"],
    ["letter", "l", "L", "д", "Д", "76"],
    ["letter", ";", ":", "ж", "Ж", "186"],
    ["letter", "'", "\"", "э", "Э", "222"],
    ["enter", "Enter", "Enter", "Enter", "Enter", "13"]
],
 [
    ["leftshift", "Shift", "Shift", "Shift", "Shift", "16"],
    ["letter", "z", "Z", "я", "Я", "90"],
    ["letter", "x", "X", "ч", "Ч", "88"],
    ["letter", "c", "C", "с", "С", "67"],
    ["letter", "v", "V", "м", "М", "86"],
    ["letter", "b", "B", "и", "И", "66"],
    ["letter", "n", "N", "т", "Т", "78"],
    ["letter", "m", "M", "ь", "Ь", "77"],
    ["letter", ",", "<", "б", "Б", "188"],
    ["letter", ".", ">", "ю", "Ю", "190"],
    ["letter", "/", "?", ".", ",", "191"],
    ["up", "up", "up", "up", "up", "38"],
    ["rightshift", "Shift", "Shift", "Shift", "Shift", "16"]
],
 [
    ["ctrl", "Ctrl", "Ctrl", "Ctrl", "Ctrl", "17"],
    ["win", "Win", "Win", "Win", "Win", "91"],
    ["alt", "Alt", "Alt", "Alt", "Alt", "18"],
    ["space", "\ ", "\ ", "\ ", "\ ", "32"],
    ["alt", "Alt", "Alt", "Alt", "Alt", "18"],
    ["ctrl", "Ctrl", "Ctrl", "Ctrl", "Ctrl", "17"],
    ["left", "left", "left", "left", "left", "37"],
    ["down", "down", "down", "down", "down", "40"],
    ["right", "right", "right", "right", "right", "39"]
]];

let indexKey = 1;

const input = document.createElement('textarea');
input.className = 'input';
document.body.prepend(input);
input.focus();

function drawKeyboard (index){
    if (document.querySelector('.keyboard')){
        document.querySelector('.keyboard').remove();
    }

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
                buttonDiv.classList.add(`code${item[5]}`);
                buttonDiv.innerHTML = item[index];  
                rowDiv.append(buttonDiv);
            });
        });
}

drawKeyboard(indexKey);

document.querySelector('.keyboard').addEventListener('mousedown', () => mouseDownAction(event));
document.querySelector('.keyboard').addEventListener('mouseup', () => mouseActionStop(event));
document.querySelector('.keyboard').addEventListener('mouseout', () => mouseActionStop(event));

document.addEventListener('keydown', () => pressKey(event));
document.addEventListener('keyup', () => {
    document.querySelector(`.code${event.keyCode}`).classList.remove('press');
});

function mouseDownAction(event) {
    if (event.target.className.includes('button')) {
        event.target.classList.add('press');
        document.querySelector('.input').focus();
        document.querySelector('.input').value += event.target.innerHTML;
    }
}

function mouseActionStop(event) {
    if (event.target.className.includes('button')) {
        event.target.classList.remove('press');
    }
}

function pressKey(event) {
   let userTxt = document.querySelector('.input');
   
    if (event.target.className.includes('.letter')
    || event.target.className.includes('.number')
    || event.target.className.includes('.tilda')
    || event.target.className.includes('.space')
    || event.target.className.includes('.enter')
    || event.target.className.includes('.backslash')){
        userTxt.value += event.key;
    }
    if (event.target.className.includes('.backspace')){
        userTxt.value.slice(0,userTxt.length-1);
    }
    if (event.keyCode == 20){
        if (indexKey == 1 || indexKey == 3){
            indexKey++;
        }
        else {
            indexKey--;
        }
       drawKeyboard(indexKey);
    }
    if (event.keyCode == 17 && event.keyCode == 18){
        if (indexKey == 1 || indexKey == 2){
            indexKey +=2;
        }
        else {
            indexKey -=2;
        }
       drawKeyboard(indexKey);
    }
    document.querySelector('.input').focus();
    document.querySelector(`.code${event.keyCode}`).classList.add('press');
}
