var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector("#output");

function clickhandler(){
    txtoutput.innerText="dfgfhbjhbdhfbfhasfh " + txtinput.value;
};

btntranslate.addEventListener("click", clickhandler);