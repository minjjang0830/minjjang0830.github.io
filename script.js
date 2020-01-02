//checked인 상황이면, 사진이 갈아끼워지는 걸 만들자

//div로 묶고 디스플레이를 none으로 했다가 visible로 했다가를 바꾸고 해야겠다.




const repre =   document.getElementById('repre');
const repreHandler = () =>{
    document.getElementById('representativeImgSet').setAttribute('style', "display:grid");
    document.getElementById('livingRoomImgSet').setAttribute('style', "display:none");
    document.getElementById('kitchenImgSet').setAttribute('style', "display:none");
    document.getElementById('seminarLoofImgSet').setAttribute('style', "display:none");

    document.getElementById('carousel-repre').setAttribute('style', "display:block");
    document.getElementById('carousel-living').setAttribute('style', "display:none");
    document.getElementById('carousel-kitchen').setAttribute('style', "display:none");
    document.getElementById('carousel-semiloof').setAttribute('style', "display:none");





};
repre.addEventListener("click", repreHandler)


const living =   document.getElementById('living');
const livingHandler = () =>{
    document.getElementById('representativeImgSet').setAttribute('style', "display:none");
    document.getElementById('livingRoomImgSet').setAttribute('style', "display:grid");
    document.getElementById('kitchenImgSet').setAttribute('style', "display:none");
    document.getElementById('seminarLoofImgSet').setAttribute('style', "display:none");

    document.getElementById('carousel-repre').setAttribute('style', "display:none");
    document.getElementById('carousel-living').setAttribute('style', "display:block");
    document.getElementById('carousel-kitchen').setAttribute('style', "display:none");
    document.getElementById('carousel-semiloof').setAttribute('style', "display:none");



};
living.addEventListener("click", livingHandler)



const kitchen =   document.getElementById('kitchen');
const kitchenHandler = () =>{
    document.getElementById('representativeImgSet').setAttribute('style', "display:none");
    document.getElementById('livingRoomImgSet').setAttribute('style', "display:none");
    document.getElementById('kitchenImgSet').setAttribute('style', "display:grid");
    document.getElementById('seminarLoofImgSet').setAttribute('style', "display:none");

    document.getElementById('carousel-repre').setAttribute('style', "display:none");
    document.getElementById('carousel-living').setAttribute('style', "display:none");
    document.getElementById('carousel-kitchen').setAttribute('style', "display:block");
    document.getElementById('carousel-semiloof').setAttribute('style', "display:none");




};
kitchen.addEventListener("click", kitchenHandler)



const semiloof =   document.getElementById('seminarLoof');
const semiloofHandler = () =>{
    document.getElementById('representativeImgSet').setAttribute('style', "display:none");
    document.getElementById('livingRoomImgSet').setAttribute('style', "display:none");
    document.getElementById('kitchenImgSet').setAttribute('style', "display:none");
    document.getElementById('seminarLoofImgSet').setAttribute('style', "display:grid");

    document.getElementById('carousel-repre').setAttribute('style', "display:none");
    document.getElementById('carousel-living').setAttribute('style', "display:none");
    document.getElementById('carousel-kitchen').setAttribute('style', "display:none");
    document.getElementById('carousel-semiloof').setAttribute('style', "display:block");

};
semiloof.addEventListener("click", semiloofHandler)



