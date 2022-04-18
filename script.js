let count =0
const counter = document.getElementById('value');

function decrase(){
    count = count -1;
    counter.innerHTML = count;
    colorNumber();
}

function incrase(){
    count = count +1;
    counter.innerHTML = count;
    colorNumber();
}

function reset(){
    count = 0; 
    counter.innerHTML = count;
    colorNumber();
}

function colorNumber(){
    if(count > 0){
        counter.style.color = '#00FF00';
    }
    else if(count < 0){
        counter.style.color = '#FF0000';
    }
    else{
        counter.style.color = "#000000" ;  
    }
}


