const seemore=document.getElementById('seemore');
const op5=document.getElementById('op5');
const op6=document.getElementById('op6');
const op7=document.getElementById('op7');
const op8=document.getElementById('op8');
const arr=[op5,op6,op7,op8];
const sm=document.querySelectorAll('*');

const opcont=document.getElementById('opcont');
var a=0;
seemore.onclick=function () {
    if (a==0) {
        a=1;
        opcont.style.gridTemplateRows="2fr 2fr 2fr 2fr";
        sm.forEach(element => {
            element.classList.remove('sm');
        });
        seemore.innerHTML="SEE LESS <";
    }
    else if (a==1) {
        a=0;
        opcont.style.gridTemplateRows="2fr 2fr";
        arr.forEach(element => {
            element.classList.add('sm');
        });
        seemore.innerHTML="SEE MORE >";
    }

}