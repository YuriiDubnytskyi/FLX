const rootNode = document.getElementById('root');
const addNewEl = document.getElementById('addList');
let sometext = document.getElementById('sometext');
let number = 1;
function goStart() {
   for(let i =1;;i++){
       if(localStorage.getItem('list'+i) === null){
           number =i;
           break;
       }
       let li = document.createElement('li');
       let span = document.createElement('span');
       let txtLi = document.createTextNode(localStorage.getItem('list'+i));
       span.appendChild(txtLi);
       span.className = 'list'+number;
       span.setAttribute('onclick','modify()');
       li.appendChild(span);
       addNewEl.appendChild(li);
       let todoImg = document.createElement('img');
       todoImg.setAttribute('src', './assets/img/todo-s.png');
       let checkBtn = document.createElement('button');
       checkBtn.className = 'checkIconBtn';
       let deleteIcon = document.createElement('img');
       deleteIcon.setAttribute('src', './assets/img/remove-s.jpg');
       let deleteBtn = document.createElement('button');
       deleteBtn.className = 'deleteIconBtn';
       checkBtn.appendChild(todoImg);
       deleteBtn.appendChild(deleteIcon);
       li.appendChild(checkBtn);
       li.appendChild(deleteBtn);
       deleteBtn.onclick = () => {
           li.remove();
           console.log(span.className);
           console.log(localStorage.removeItem(span.className));
           console.log(localStorage.removeItem(span.className+'click'));
           console.log(localStorage.removeItem(span.className+'delite'));

       };
       console.log(localStorage.getItem('list'+i));
       number++
   }
}

goStart();


let startBlock = document.querySelector('#blogStart');
let addBlock = document.querySelector('#addBlock');
let modifyBlock = document.querySelector('#modify');
addBlock.style.display = 'none';
modifyBlock.style.display = 'none';
location.hash = '';
function addNewElement() {
    startBlock.style.display ='none';
    addBlock.style.display = 'block';
    location.hash = '/add';
}
function cancelExit() {
    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';
}

function saveChange() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.className = 'list'+number;
    span.setAttribute('onclick','modify()');
    let inputValue = document.getElementById('addText').value;
    let txtLi = document.createTextNode(inputValue);
    span.appendChild(txtLi);
    li.appendChild(span);
    addNewEl.appendChild(li);

    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    sometext.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';


    let todoImg = document.createElement('img');
    todoImg.setAttribute('src', './assets/img/todo-s.png');
    let checkBtn = document.createElement('button');
    checkBtn.className = 'checkIconBtn';
    let deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', './assets/img/remove-s.jpg');
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteIconBtn';
    checkBtn.appendChild(todoImg);
    deleteBtn.appendChild(deleteIcon);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);


    localStorage.setItem('list'+number,inputValue);
    localStorage.setItem('list'+number+'click',false);
    localStorage.setItem('list'+number+'delite','delite');
    document.getElementById('addText').value = '';



    checkBtn.onclick = () => {
        todoImg.src = './assets/img/done-s.png';
        li.style.backgroundColor = 'grey';
        localStorage.removeItem(span.className);
        localStorage.setItem(span.className+'click',true);
    };
    deleteBtn.onclick = () => {
        li.remove();
        console.log(localStorage.removeItem(span.className));
        console.log(localStorage.removeItem(span.className+'click'));
        console.log(localStorage.removeItem(span.className+'delite'));
    };
    number++;


}
function modify() {
    addBlock.style.display = 'none';
    modifyBlock.style.display = 'block';
    startBlock.style.display = 'none';
    location.hash = '/modify';
}

function saveChangeModify() {
    let inputValue = document.getElementById('modifyItem').value;
    const txtLi = document.createTextNode(inputValue);
    let txt ='';

    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    sometext.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';

}
