
var items=document.querySelectorAll('button');
console.log(items.length);

function caseCheck(item){
    switch(item) {
        case 'w':
            var audio= new Audio('sounds/tom-1'+'.mp3');
            audio.play();
            break;
        case 'a':
            var audio= new Audio('sounds/tom-2'+'.mp3');
            audio.play();
            break;
        
        case 's':
            var audio= new Audio('sounds/tom-3'+'.mp3');
            audio.play();
            break;
        case 'd':
            var audio= new Audio('sounds/tom-4'+'.mp3');
            audio.play();
            break;
        case 'j':
            var audio= new Audio('sounds/snare'+'.mp3');
            audio.play();
            break;
        case 'k':
            var audio= new Audio('sounds/crash'+'.mp3');
            audio.play();
            break;
        case 'l':
            var audio= new Audio('sounds/kick-bass'+'.mp3');
            audio.play();
            break;
        default:
            console.log('error');
            break;
    }   
}


for(var i = 0; i < items.length ; i++) {

    items[i].addEventListener('click', function() {
        var ite = this.innerHTML;
        console.log(ite);
        caseCheck(ite);
        addAnimation(ite);
        // alert("You clicked the button!");
    }
           );
}

document.addEventListener("keypress",function(event){
    // console.debug(event['key']);
    caseCheck(event.key);
    addAnimation(event.key);

})

function addAnimation(item){
    // "."+item =>> (.w) or (.a) or .s or .d or .j or .k or .l
    document.querySelector("."+item).classList.add('pressed');
    setTimeout(function(){
        document.querySelector("."+item).classList.remove('pressed');
    },100);
}





