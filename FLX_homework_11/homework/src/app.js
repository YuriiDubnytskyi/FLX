let rootNode = document.getElementById('root');
const ten = 10;
const zero = 0;
let img = document.createElement('img');
img.setAttribute('src','./assets/img/cat.png');
let myUl = document.getElementsByClassName('myUl');
let ul = document.createElement('ul');
ul.className = 'myUl';
function newElement() {
    let close = document.getElementsByClassName('close');
    let add = document.getElementsByClassName('add');
    let li = document.createElement('li');
    li.className = 'addLi';
    let addLi = document.getElementsByClassName('addLi');
    let inputValue = document.getElementById('inputValue1').value;
    let txtNew = document.createTextNode(inputValue);
    let span = document.createElement('span');
    let buttonClose = document.createElement('button');
    let txt = document.createTextNode('delete');
    buttonClose.appendChild(txt);
    buttonClose.setAttribute('onclick','closeElement()');
    buttonClose.className = 'material-icons close';
    let buttonClick = document.createElement('button');
    let txtClick = document.createTextNode('crop_din');
    buttonClick.appendChild(txtClick);
    buttonClick.className = 'material-icons add';
    if (inputValue === '') {
        alert('You must write something!');
    }else if (addLi.length === ten){
        alert('Maximum item per list are created');
    } else {
        li.appendChild(buttonClose);
        span.appendChild(txtNew);
        li.appendChild(span);
        li.setAttribute('draggable', true);
        li.appendChild(buttonClick);
        ul.appendChild(li);
        rootNode.appendChild(ul);
    }
    document.getElementById('inputValue1').value = '';
    let i;
    for (i = zero; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
        }
    }
    for (i = zero; i < add.length; i++) {
        add[i].onclick = function() {
            let div = this;
            div.style.display = 'none';
            let buttonClick = document.createElement('button');
            let txtClick = document.createTextNode('check_box');
            buttonClick.appendChild(txtClick);
            buttonClick.className = 'material-icons add';
            let parent = div.parentNode;
            parent.appendChild(buttonClick);
        }
    }
}