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
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            sum += numArr[i];
        }
    }
    getEle("txtSum").innerHTML = "Tổng số dương: " + sum;
}

function countPositive() {
    var count = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            count++
        }
    }
    getEle("txtCount").innerHTML = "Số dương: " + count;
}

function findMin() {
    var min = 0;
    var n = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
        if (n < numArr[i]) {
            min = n;
        }
    }
    getEle("txtMin").innerHTML = "Số nhỏ nhất là: " + min;
}

function findMinPos() {
    var newArr = [];
    for (var i = 0; i < numArr.length; i++) {
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
    var even = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            even = numArr[i];
        }
    }
    getEle("txtEven").innerHTML = "Số chẵn cuối cùng là: " + even;
}

function doiCho(a, b) {
    var c = numArr[a];
    numArr[a] = numArr[b];
    numArr[b] = c;
}
function changePosition() {
    var in1 = getEle("inputIndex1").value;
    var in2 = getEle("inputIndex2").value;
    doiCho(in1, in2);
    getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArr;
}

function sortIncrease() {
    for (var i = 0; i < numArr.length; i++) {
        for (var n = 0; n < numArr.length - 1; n++) {
            if (numArr[n] > numArr[n + 1]) {
                doiCho(n, n + 1);
            }
        }
    }
    getEle("txtIncrease").innerHTML = "Mảng sau khi đổi: " + numArr;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function findPrime() {
    var prime = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (isPrime(numArr[i])) {
            prime = numArr[i];
            break;
        }
    }
    getEle("txtPrime").innerHTML = "Số nguyên tố đầu tiên: " + prime;
}

var newArr = [];
function getFloat() {
    var num = +(getEle("inputFloat").value);
    newArr.push(num);
    getEle("txtArrayFloat").innerHTML = newArr;
}
function findInt() {
    var n = 0;
    for (var i = 0; i < newArr.length; i++) {
        if (Number.isInteger(newArr[i])) {
            n++;
        }
    }
    getEle("txtInt").innerHTML = "Số nguyên: " + n;
}

function compareNum() {
    var a = 0;
    var d = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            d++;
        } else {
            a++;
        }
    }
    var ss = "";
    if (d > a) {
        ss = "Số dương > Số âm";
    } else if (a > d) {
        ss = "Số âm > Số dương"
    } else {
        ss = "Số dương = Số âm"
    }
    getEle("txtCompare").innerHTML = ss;
}