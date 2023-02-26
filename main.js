let count = 0
let def = 0

document.getElementById('decrement').onclick = function () {
    count -= 1
    if (count < 0) {
        document.getElementById('countLabel').innerHTML = def
    }
    document.getElementById('countLabel').innerHTML = count
}

document.getElementById('increment').onclick = function () {
    count += 1
    document.getElementById('countLabel').innerHTML = count
}

document.getElementById('reset').onclick = function () {
    count = 0
    document.getElementById('countLabel').innerHTML = count
}

document.getElementById('decrement1').onclick = function () {
    count -= 1
    if (count < 0) {
        document.getElementById('countLabel1').innerHTML = def
    }
    document.getElementById('countLabel1').innerHTML = count
}

document.getElementById('increment1').onclick = function () {
    count += 1
    document.getElementById('countLabel1').innerHTML = count
}
document.getElementById('reset1').onclick = function () {
    count = 0
    document.getElementById('countLabel1').innerHTML = count
}
