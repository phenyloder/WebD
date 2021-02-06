console.log('first line')
setTimeout
    (
        function () {
            console.log('second line after 2000 miliseconds')
        }, 2000)
console.log('third line')