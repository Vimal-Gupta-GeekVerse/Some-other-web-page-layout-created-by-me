let array = [];
let array2 = [];

function saveInfo() {
    let d = document.getElementById("text").value;
    if(d!=""){
    array.push(d);
    display();
    }
}

function saveInfo2() {
    let z = document.getElementById("roll-no.").value;
    array2.push(z);
    display();
}

function display() {

    event.preventDefault()
    let d = array.map(function (value, index) {


        return `<li>🧑 ${value} <button class="bn53" onclick="deletevalue(${index})">❌</button></li> `

    });
    document.getElementById("display").innerHTML = d.join(" ");

    let z = array2.map(function (value, index) {
        return `<li>📱 ${value} <button class="bn53" onclick="deletevalue2(${index})">❌</button></li> `
    });
    document.getElementById("display2").innerHTML = z.join(" ");
}
function deletevalue(index) {
    array.splice(index, 1);
    display();
}
function deletevalue2(index) {
    array2.splice(index, 1);
    display();
}


function clearItems() {
    array.splice(0);
    display();
}
function clearItems2() {
    array2.splice(0);
    display();
}