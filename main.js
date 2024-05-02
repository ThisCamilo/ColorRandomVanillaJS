const btnColor = document.querySelector('button');
const color = document.getElementById('color');

function generateRandomColor(){
    const hex = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*16);
        colorHex += hex[random];
    }
    return colorHex;
}

btnColor.addEventListener('click', ()=>{
    let colorRandom = generateRandomColor();
    color.textContent = colorRandom;
    document.body.style.backgroundColor = colorRandom;
})