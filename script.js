'use strict'

// const { get } = require("lodash");

let database = [
    {
        name: 'сходить в магазин'
    }
]
// let popFlag = false;
let notes = 0;
const root = document.getElementById('mainn')

function createNote (text, notes_num=notes) {
    let note = document.createElement('div');
    note.classList.add(`note`, `note${notes}`);
    // note.setAttribute('id', `note${notes}`)
    note.innerHTML = `<p><span class="span${notes}">${notes_num}.<span/> ${text}</p> <div id="del_btn${notes}" class="del_btn" onclick="dele(this)"> <div id="icon"></div> </div>`
    root.appendChild(note);
    // console.log('+++');
    notes++;
    return note
};

let virtualNote = createNote('random text')
// notes--;
function createPopup () {
    let popup = document.createElement('div');
    popup.setAttribute('id', 'popup')
    popup.innerHTML = ` <input type="text" name="" id="popup_input" autocomplete="off"><button class="btn" onclick="func()">add note</button>`
    return popup
    
}




// let del;
let findDel = function (){
    del = document.querySelectorAll('.del_btn')
    for (let el of del) {
        // el.addEventListener('click', () => console.log('+++'))
        console.log(el.outerHTML);
    }
};
// findDel();
// let del;
let popup = createPopup() 
function func () {
    let txt = document.getElementById('popup_input')
    // console.log(txt.value);
    // root.appendChild(createNote(txt.value));
    // createNote(txt.value)
    database.push({name:txt.value})
    // console.log(popup);
    document.querySelector('body').removeChild(document.getElementById('popup'));
    // if (notes > 2) {
    //     for(let el of document.getElementsByClassName('del_btn')) {
    //         console.log(el);
    //     }
    // }
    // del = document.getElementsByClassName('del_btn')
    // findDel();
    render();
}

function dele (zxc) {
    // let del_note = document.getElementsByClassName(`note${zxc.id[-1]}`);
    let del_note = document.querySelector(`.note${notes}`);
    // console.log(`.note${notes-1}`);
    // console.log(del_note);
    // console.log(del_note);
    // for (let i of del_note) {
        // console.log(String(123));
        let str_id = String(zxc.id);
        let find_id = (str_id[str_id.length-1]);
        console.log(find_id);
        console.log(zxc);
        console.log(notes);
        // // console.log(String(zxc.id)[-1]);
        // console.log(document.querySelector(`.note${find_id}`));
    // console.log(i);
    // }
    let deleted_elem = document.querySelector(`.note${find_id}`);
    let noteArr = document.getElementsByClassName('note');

    let lastNum = 0;
    // for (let i of noteArr) {
    //     if (parent(lastNum) == String(i.classList[1])[String(i.classList[1]).length-1]) {

    //     }            
    //     lastNum = String(i.classList[1])[String(i.classList[1]).length-1];
        
    //     console.log(i.outerHTML);
    // }
    database.splice(parseInt(find_id)-1,1)
    console.log(find_id-1);
    console.log(database);

    // root.removeChild(deleted_elem);
    notes--;
    render();
}

// for (let el of del) {
//     el.addEventListener('click', () => console.log('+++'))
//     console.log(el.outerHTML);
// }
// del.addEventListener('click', () => console.log("+++"))
// console.log(del);
// console.log(document.getElementsByClassName('del_btn'))
let popBtn;

function displayPopup () {
    let popup = createPopup() 
    // createPopup()
    document.querySelector('body').appendChild(popup)
    popBtn = document.getElementsByClassName('btn')
    document.getElementById('popup_input').focus();
    }

// if (popFlag) {
//     // popBtn.addEventListener('click', () => {console.log("this")})
//     console.log(popBtn);
// }

let btn = document.querySelector("#add")
// console.log(document);
// console.log(btn);
btn.addEventListener('click', displayPopup);

function render () {
    root.innerHTML = ''
    notes = 1
    let i = 1;
    for (let db of database) {
        createNote(db.name, i)
        i++;
    }
};
render();