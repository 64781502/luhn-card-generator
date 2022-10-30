let x = false;
card = ['3', '4', '5', '6'];
while (x == false) {
    generator(card[Math.floor(Math.random()*card.length)]);
}
function generator(q) {
    let _n = Math.floor(Math.random() * 1e15 + 1e14);
    let n = q + _n;
    const firstN = (arr, nth) => arr.filter((e, i) => i % nth === nth - 2);
    const sedondN = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
    var toArray = num => Number(num);
    var l = Array.from(String(n), toArray);
    let a = firstN(l, 2);
    let b = sedondN(l, 2);
    let _a = double(a);
    let __a = [];
    _a.forEach(check);
    if (n.length == 16) {
        if (String(__a.reduce((a, b) => a + b, 0) + b.reduce((a, b) => a + b, 0)).endsWith('0')) {
            /* console.log(n.match(/.{1,4}/g).join(' ')); */
            document.getElementById("card-number").innerHTML = n.match(/.{1,4}/g).join(' ');
            
            x = true;
        }
    }
    function check(item) {
        if (item > 9) {
            __a.push(item - 9);
        } else {
            __a.push(item)
        }
    }
}
function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}