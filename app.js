var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var OutputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}
function ErrorHandler(error){
    console.log("Error occured",error);
    alert("Error occured ");
}

function clickHandler(){
    var inputText = txtinput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        OutputDiv.innerText = translatedText;
    })
    .catch(ErrorHandler);
    
}
btntranslate.addEventListener("click", clickHandler);