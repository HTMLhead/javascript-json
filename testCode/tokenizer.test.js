

const Tokenize = require('../script/tokenizer')
const tester = require('./testModule')
const tokenize = new Tokenize

//tokenize
tester.testFn('문자열이 쉼표앞의 객체형태의 데이터가 끝나는 괄호가 있는지 확인합니다.', function() {
    const data = '},'
    const result = tokenize.isObjectEnd(data);
    return tester.expectFn(true).toBe(result)
})

tester.testFn('문자열이 쉼표앞의 콜론인지 확인합니다.', function() {
    const data = ':,'
    const result = tokenize.isColon(data);
    return tester.expectFn(true).toBe(result)
})

tester.testFn('문자열의 첫번째 글자가 괄호이거나 콤마인지 확인합니다.', function() {
    const data = ','
    const result = tokenize.isBraceOrComma(data);
    return tester.expectFn(true).toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. "["', function() {
    const data = '[11,12,13]'
    const result = tokenize.getToken(data)
    return tester.expectFn('[').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. "{"', function() {
    const data = '{a:12}'
    const result = tokenize.getToken(data)
    return tester.expectFn('{').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. (뒤에 쉼표가 있어도) "]"', function() {
    const data = '],11,[11,12,13]'
    const result = tokenize.getToken(data)
    return tester.expectFn(']').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. (뒤에 쉼표가 없어도)"]"', function() {
    const data = ']'
    const result = tokenize.getToken(data)
    return tester.expectFn(']').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. "}"', function() {
    const data = '},[11,12,13]'
    const result = tokenize.getToken(data)
    return tester.expectFn('}').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. ","', function() {
    const data = ',11,12,13]'
    const result = tokenize.getToken(data)
    return tester.expectFn(',').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. "(key):"', function() {
    const data = 'a:11},11]'
    debugger
    const result = tokenize.getToken(data)
    return tester.expectFn('a:').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. "}"', function() {
    const data = '},'
    const result = tokenize.getToken(data)
    return tester.expectFn('}').toBe(result)
})

tester.testFn('문자열의 형태에 따라 토큰별로 나누어줍니다. (그냥 값)', function() {
    const data = '11,22,[11,22]]'
    const result = tokenize.getToken(data)
    return tester.expectFn('11').toBe(result)
})

tester.testFn('문장을 토큰화해서 배열에 집에 넣음.', function() {
    const data = '[11,22,{a:11},33]'
    const arrayData = tokenize.getWholeDataQueue(data)
    const expectData = ['[','11',',','22',',','{','a:','11','}',',','33',']']
    const result = arrayData.every((v, i) => {
        return expectData[i] === v
    })
    return tester.expectFn(true).toBe(result)
})