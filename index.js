console.log("Connected")
let copyDOM = document.getElementById('copy-btn')
let addressDOM = document.getElementById('address').innerText
copyDOM.addEventListener('click', () => {

    navigator.clipboard.writeText(addressDOM).then(() => {

        copyDOM.classList.add('clicked')
        copyDOM.innerText = 'Copied!'
        
        setTimeout(() => {
            copyDOM.innerText = 'click';
            copyDOM.classList.remove('clicked')
        },2000)
    }).catch(err => {
        console.error('ไม่สามารถก๊อปปี้ได้',err)
    })
})
