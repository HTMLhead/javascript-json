const ErrorCheck = require('../script/errorCheck.js')
const tester = require('./testModule')
const errorCheck = new ErrorCheck


//test ErrorCheck
tester.testFn('주어진 값이 문자열인지 확인해준다', function() {
    const data = "'test'"
    const result = errorCheck.checkString(data)
    return tester.expectFn(false).toBe(result)
})

tester.testFn('정해진 글자의 갯수가 몇개인지 세어준다.', function() {
    const data = "''''"
    const result = errorCheck.countLettersNum(data, "'")
    return tester.expectFn(4).toBe(result)
})

tester.testFn('주어진 값이 숫자인지 확인해준다.', function () {
    const data = "11"
    const result = errorCheck.checkNumber(data)
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 배열에 공백이 있는지 확인해준다.', function () {
    const data = ['11',',',',','[','11',',','12',']']
    const result = errorCheck.checkComma(data)
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 인자가 배열이면 배열이 완료되었는지 확인한다.', function() {
    const data = ['[','11','[','"st"',']','11']
    const result = errorCheck.checkBrace(data, '[',']')
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 인자가 객체면 객체가 완료되었는지 확인한다.', function() {
    const data = ['{','a:','11',']']
    const result = errorCheck.checkBrace(data, '{','}')
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 배열 내 객체값의 키가 존재하는지 확인한다.', function() {
    const data = [':']
    const result = errorCheck.checkKeys(data)
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 배열 내 객체값의 value가 존재하는지 확인한다.', function() {
    const data = ['[','{','a:','}','{',':','11','}',']']
    const result = errorCheck.checkValues(data)
    return tester.expectFn(false).toBe(result)
})

tester.testFn('주어진 배열내에 배열 값이 있다면 배열값은 모두 제거한다.', function() {
    const data = ['[','11',']']
    errorCheck.shiftArrayValue(data.shift(), data)
    const result = data[0]
    return tester.expectFn(undefined).toBe(result)
})

tester.testFn('주어진 배열값을 보고 객체데이터의 키값과 value값에 맞도록 :가 있는지 객체데이터가 끝날때까지 확인한다.', function() {
    const data = ['a:','11',',','key:','value','}']
    const result = errorCheck.checkColonNum(data);
    return tester.expectFn(true).toBe(result)
})