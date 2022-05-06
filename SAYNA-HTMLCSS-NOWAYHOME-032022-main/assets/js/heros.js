let footericones = document.getElementsByClassName('footer-icones');
for (let i=0; i<btninverse.length; i++){
    footericones[i].addEventListener('mouseover',()=>{
    footericones[i].style.backgroundColor='#b11313';
    footericones[i].style.color='white';
    });
    footericones[i].addEventListener('mouseout',()=>{
    footericones[i].style.color='black';
    });
}
