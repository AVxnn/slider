let img = document.getElementById('img');
let left = document.querySelector('.arrow-left');
let right = document.querySelector('.arrow-right');
let add = document.querySelector('.add-block');
let remove = document.querySelector('.remove-block');


let length = 3;
let array = ['img/red.png', 'img/yellow.png', 'img/green.png', 'img/blue.png', 'img/purple.png', 'img/black.png'];
let i = 0;


left.addEventListener('click', function(){
    if (i <= 0) {
        i = length;
    }
    i--;
    img.src = array[i];
    window.navigator.vibrate(2);
    console.log(navigator.battery);
})


right.addEventListener('click', function(){
    if (i >= length - 1) {
        i = -1;
    }
    i++;
    img.src = array[i];
    window.navigator.vibrate(2);
})

add.addEventListener('click', function(){
    if(length == array.length) {
        alert('Максимум')

    } else {
        length++;
        img.src = array[length - 1];
        i = length - 1;
    }
})

remove.addEventListener('click', function(){
    if(length == 1) {
        alert('Максимум')
    } else {
        length--;
        img.src = array[length - 1];
        i = length - 1;
    }
})
