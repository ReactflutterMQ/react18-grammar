let a = [
    {
        name: 'John',
        price: 20,
        number: 2
    },
    {
        name: '电视',
        price: 500,
        number: 1
    },
    {
        name: '香蕉',
        price: 5,
        number: 2
    }
]

let total = a.reduce((prev, item) => {
    return prev + item.price * item.number
}, 0)
console.log(total);
