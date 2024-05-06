const first = "Ung-mo"
const last  = "Lee"

// ESS: 문자열 연결
console.log("My name is " +first + " " + last + ".")
// ES6: 문자열 연결 ===> ``로씀 ${}안에는 변하는 값만 들어가는데 변수도되고 식도 되고
console.log(`My name is ${first} ${last}.`)
console.log(`1 + 1 = ${1+1}`)
console.log(`1 + 1 = ${add(10,20)}`)

function add(a,b) {
    return a+b
}
const template = `
    <ul class="nav-items">
        <li><a href="#home">Home</li>
        <li><a href="#About">About</li>
        <li><a href="#home">Home</li>
        <li><a href="#home">Home</li>
    </ul>
`
console.log(template)