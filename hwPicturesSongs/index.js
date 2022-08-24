function doSomethingWithData(data) {
    dom.content.innerHTML += `<div class="div2">
    <p class="para">${data}</p>
</div>`;
}

function processResponse(r) {
    if (r.status === 200) {
        return r.text()
    } else {
        throw new Error(`Error: ${r.status}`)
    }
}

const url1 = './50cent.txt';
const url2 = './jay-z.txt';
const url3 = './eminem.txt';

// const urls = {
//     '1.jpg': './50cent.txt',
//     '2.jpg': './jay-z.txt',
//     '3.jpg': './eminem.txt'
// }

const dom = {
    'input1': document.querySelector('.btn1'),
    'input2': document.querySelector('.btn2'),
    'input3': document.querySelector('.btn3'),
    'content': document.querySelector('.div2'),
    'para': document.querySelector('.para'),



}

dom.input1.addEventListener('click', function (e) {
    fetch(url1)
        .then(r => processResponse(r))
        .then(text => {
            doSomethingWithData(text);
        })

})
dom.input2.addEventListener('click', function (e) {
    fetch(url2)
        .then(r => processResponse(r))
        .then(text => {
            doSomethingWithData(text);
        })

})
dom.input3.addEventListener('click', function (e) {
    fetch(url3)
        .then(r => processResponse(r))
        .then(text => {
            doSomethingWithData(text);
        })
})
// for (const key in urls) {
//     dom.input1.addEventListener('click', function (e) {
//         fetch(urls[key], { method: 'GET' })
//             .then(r => processResponse(r))
//             .then(text => {
//                 doSomethingWithData(text);
//             })

//     })
// }
