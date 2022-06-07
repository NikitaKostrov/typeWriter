let words = [
    'легко',
    'быстро',
    'эффективно',
    'используя новейшие технологии',
    'в команде',
    'web-разработка',
    'python',
    'c++',
    'java'
]
let output = document.querySelector('#output');
let charTurn = 0;
let wordTurn = 0;

printWord()
    function printWord(){
        if(words[wordTurn].length >= charTurn){
            let str = words[wordTurn].substr(0 , charTurn);
            output.innerHTML = str;
            charTurn++
            setTimeout(printWord , 100)
        }else{
            setTimeout(deleteWord , 400)
        }
    }
function deleteWord(){
    if(charTurn >= 0){
        let str = words[wordTurn].substr(0 , charTurn)
        output.innerHTML = str
        charTurn--
        setTimeout(deleteWord , 100)
    }else{
        console.log(wordTurn)
        if(wordTurn < words.length - 1){
            wordTurn++
        }else{
            wordTurn = 0
        }
        setTimeout(printWord , 100)
    }
}