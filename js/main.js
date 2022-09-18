function getEle(id) {
    return document.getElementById(id);
}
var numArr = [];
function getNumber() {
    var num = +getEle("inputNum").value;
    numArr.push(num);
    getEle("txtArray").innerHTML = numArr;
}
function sumPositive() {
    var sum = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            sum += numArr[i];
        }
    }
    getEle("txtSum").innerHTML = "Tổng số dương: " + sum;
}
function countPositive() {
    var count = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            count++
        }
    }
    getEle("txtCount").innerHTML = "Số dương: " + count;
}
function findMin() {
    var min = 0;
    var n = numArr[0];
    for (i = 1; i < numArr.length; i++) {
        if (n < numArr[i]) {
            min = n;
        }
    }
    getEle("txtMin").innerHTML = "Số nhỏ nhất là: " + min;
}
function findMinPos() {
    var newArr = [];
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            newArr.push(numArr[i]);
        }
    }
    if (newArr.length > 0) {
        var n = newArr[0];
        var min = 0;
        for (var r = 1; r < newArr.length; r++) {
            if (n < newArr[r]) {
                min = n;
            }
        }
        getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất là: " + min;
    } else {
        getEle("txtMinPos").innerHTML = "Không có số dương trong mảng";
    }

}
function findEven() {
    var evenMax = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            if ()
        }
    }
}