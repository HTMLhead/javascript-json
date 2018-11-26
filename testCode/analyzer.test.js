const Analyzer = require('../script/analyzer')
const ErrorCheck = require('../script/errorCheck.js')
const tester = require('./testModule')
const errorCheck = new ErrorCheck
const analyzer = new Analyzer([], errorCheck)

//test Analyze
tester.testFn('객체의 key데이터인지 확인한다.', function() {
    const data = "hellow:"
    const result = analyzer.isObjectKey(data)
    return tester.expectFn(true).toBe(result)
})

tester.testFn('데이터가 boolean타입인지 확인한다', function() {
    const data = "true"
    const result = analyzer.isBoolean(data)
    return tester.expectFn(true).toBe(result)
})

tester.testFn('데이터가 문자열인지 확인한다.', function() {
    const data = "'test1'"
    const result = analyzer.isString(data)
    return tester.expectFn(true).toBe(result)
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 배열이라면 배열 타입의child를 만들어 준다.', function() {
    const data = ['[']
    const result = analyzer.getChild(data)[0].type
    return tester.expectFn('Array').toBe(result)
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 객체라면 객체 타입의 child를 만들어 준다.', function() {
    const data = ['{']
    const result = analyzer.getChild(data)[0].type
    return tester.expectFn('Object').toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 값이 객체의 키값인지 확인한후 키값을 value로 만들어 준다.', function() {
    const data = ['a:']
    const result = analyzer.getChild(data)[0].value
    return tester.expectFn('a').toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 배열이나 객체가 끝나는 괄호가 나온다면 반복문을 끝내고 배열을 반환해준다.', function() {
    const data = ['}']
    const result = analyzer.getChild(data)[0]
    return tester.expectFn(undefined).toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 boolean이라면 boolean타입의 child를 만들어 준다', function() {
    const data = ['true']
    const result = analyzer.getChild(data)[0].type
    return tester.expectFn('Boolean').toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 null 이라면 null타입의 child를 만들어 준다.', function() {
    const data = ['null']
    const result = analyzer.getChild(data)[0].type
    return tester.expectFn('Null').toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 String이라면 string타입의 child를 만들어 준다', function() {
    const data = ["'string'"]
    const result = analyzer.getChild(data)[0].type
    
    return tester.expectFn('String').toBe(result) 
})

tester.testFn('주어진 데이터queue배열이 끝날때까지 체크하며 Number라면 Number타입의 child를 반환해 준다.', function() {
    const data = ['11']
    const result = analyzer.getChild(data)[0].type
    return tester.expectFn('Number').toBe(result) 
})
