const JSONData = require('./jsonData.js');
const ErrorCheck = require('./errorCheck.js');
const Analyzer = require('./analyzer.js');
const Tokenizer = require('./tokenizer.js')

const sentence = "[1,{key:[2,{a:'a'},]}]".replace(/ /gi, '')

const print = function printJSONData(JSONData) {
    console.log(JSON.stringify(JSONData, null, 2))
}

const errorCheck = new ErrorCheck
const tokenizer = new Tokenizer(sentence)
const tokenizerdDataArr = tokenizer.getWholeDataQueue(sentence)
if (errorCheck.checkAllData(tokenizerdDataArr)) {
    const analyzer = new Analyzer(tokenizerdDataArr, errorCheck)
    const jsonData = analyzer.queue()
    print(jsonData)
}

