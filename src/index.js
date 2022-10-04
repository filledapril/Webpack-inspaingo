import './styles/main.css'
import logo from './assets/logo.svg'
import result1 from './assets/r1.jpeg'
import result2 from './assets/r2.png'
import result3 from './assets/r3.jpeg'
import result4 from './assets/r4.png'
import result5 from './assets/r5.jpeg'
import result6 from './assets/r6.jpeg'
import result7 from './assets/r7.jpeg'
import service1 from './assets/s1.jpeg'
import service2 from './assets/s2.jpeg'
import service3 from './assets/s3.jpeg'
import service4 from './assets/s4.jpeg'
import service5 from './assets/s5.jpeg'
import service6 from './assets/s6.jpeg'
import QR1 from './assets/wechat.png'
import QR2 from './assets/gzh.png'
import uniLogo from './assets/unilogo.png'
import uni1 from './assets/uab.jpeg'
import uni2 from './assets/upc.jpeg'
import uni3 from './assets/ucm.jpeg'
import uni4 from './assets/upm.jpeg'
// logo
const logoImg = document.getElementById('logo')
logoImg.src = logo

// result img

const resultImg1 = document.getElementById('r1')
resultImg1.src = result1

const resultImg2 = document.getElementById('r2')
resultImg2.src = result2

const resultImg3 = document.getElementById('r3')
resultImg3.src = result3

const resultImg4 = document.getElementById('r4')
resultImg4.src = result4

const resultImg5 = document.getElementById('r5')
resultImg5.src = result5

const resultImg6 = document.getElementById('r6')
resultImg6.src = result6

const resultImg7 = document.getElementById('r7')
resultImg7.src = result7

//result function
const resultContainers = document.querySelectorAll('div.result-container');
const nextBtn = document.querySelectorAll('.arrow-btn--next');
const preBtn = document.querySelectorAll('.arrow-btn--pre');

resultContainers.forEach((container, i) => {
    let containerDimensions = container.getBoundingClientRect();

    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        container.scrollLeft += containerWidth / 2;
    })

    preBtn[i].addEventListener('click', () => {
        container.scrollLeft -= containerWidth / 2;
    })
})

//service img

const serviceImg1 = document.getElementById('s1')
serviceImg1.src = service1;

const serviceImg2 = document.getElementById('s2')
serviceImg2.src = service2;

const serviceImg3 = document.getElementById('s3')
serviceImg3.src = service3;

const serviceImg4 = document.getElementById('s4')
serviceImg4.src = service4;

const serviceImg5 = document.getElementById('s5')
serviceImg5.src = service5;

const serviceImg6 = document.getElementById('s6')
serviceImg6.src = service6;

//info function
const locations = document.querySelectorAll('div.times div')

const updateTimes = function() {
    locations.forEach(location => {
        const output = location.querySelector('output');
        const timeZone = location.getAttribute('data-timezone')
    
        const now = luxon.DateTime.now().setZone(timeZone);
    
        output.innerHTML = now.toFormat('HH:mm a');
    })
}
updateTimes();

setInterval(function (){
    updateTimes();
}, 1000);

//info img

const wechatQRImg = document.getElementById('wechatQR')
wechatQRImg.src = QR1;

const gzhQRImg = document.getElementById('gzhQR')
gzhQRImg.src = QR2;

//cooperation img

const uniLogoImg1 = document.getElementById('uni-logo1')
uniLogoImg1.src = uniLogo;

const uniLogoImg2 = document.getElementById('uni-logo2')
uniLogoImg2.src = uniLogo;

const uniLogoImg3 = document.getElementById('uni-logo3')
uniLogoImg3.src = uniLogo;

const uniLogoImg4 = document.getElementById('uni-logo4')
uniLogoImg4.src = uniLogo;

const uniImg1 = document.getElementById('u1')
uniImg1.src = uni1

const uniImg2 = document.getElementById('u2')
uniImg2.src = uni2

const uniImg3 = document.getElementById('u3')
uniImg3.src = uni3

const uniImg4 = document.getElementById('u4')
uniImg4.src = uni4


const footerImg1 = document.getElementById('footer-qr1')
footerImg1.src = QR1;

const footerImg2 = document.getElementById('footer-qr2')
footerImg2.src = QR2;