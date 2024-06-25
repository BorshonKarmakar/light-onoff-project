function on(){
    document.getElementById('imgg').src='./pic_bulbon.gif'
    let b= document.querySelector('#on');
    b.style.rotate="360deg";
    b.style.transition=".5s";
}
function off(){
    let a= document.getElementById('imgg');
    a.src='pic_bulboff.gif';
    let b= document.querySelector('#off');
    b.style.rotate="360deg";
    b.style.transition=".5s";

}