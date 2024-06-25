function foo (b){
    const a  = 10
    const result =  a + b + 11
    console.log(result)
    return result
}
function bar (x){
    const y = 3;
    return foo(x*y)
}
const baz = bar(7)