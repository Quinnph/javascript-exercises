const container = document.querySelector('#container');

const imgSrcBeg = "img/ni";
const imgSrcEnd = '.jpeg';

for (let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div');

    const img = document.createElement('img');
    img.src = `${imgSrcBeg}${i}${imgSrcEnd}`;
    img.alt = `Bennie pic`;

    const imgCaption = document.createElement('span');
    imgCaption.innerText = `#${i}`;

    imgContainer.appendChild(img);
    imgContainer.appendChild(imgCaption);
    container.appendChild(imgContainer);
}