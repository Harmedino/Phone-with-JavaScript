
let later = document.getElementById('full-date');
let time = document.getElementById('start').innerHTML;
let screen = document.querySelector('#screen');
let lockScreen = document.querySelector('.background');
let dial = document.querySelector('.dial');
let default_screen = document.querySelector('.default-screen');
let time_header = document.querySelector('.header-1')
let caller = document.querySelector('.modal1');
let calling = document.querySelector('.numbers');
let contact = document.querySelector('.contact');
let calling_set = document.querySelector('.calling-set');
let spinner = document.querySelector('.spinner1');
let spinner1 = document.querySelector('.spinner');
let balance1 = document.querySelector('.balance');
let balance2 = document.querySelector('.balance2');
let name1 = document.getElementById('name');
let number = document.getElementById('number');
let contactList = document.querySelector('.contact-list');
let saveContact = document.querySelector('.save-contact');
let timer = document.querySelector('.timer');

myContact = []


setInterval(() => {
    let date = new Date()
    thor.innerHTML = String(date.getHours()).padStart(2, 0) + ':';
    tmin.innerHTML = String(date.getMinutes()).padStart(2, 0);


    mhor.innerHTML = String(date.getHours()).padStart(2, 0) + ':';
    mmin.innerHTML = String(date.getMinutes()).padStart(2, 0);
    am.innerHTML = mhor.innerHTML >= '12' ? 'PM' : "AM"

    later = date.setUTCFullYear()


}, 100);

function onScreen() {
    // time_header.hidden = false;
    lockScreen.hidden = true;
    dial.hidden = true;
    default_screen.hidden = false
}
function numbers(nums) {
    screen.innerHTML += nums;
}
function del() {
    let count = screen.innerHTML
    let sli = count.slice(0, count.length - 1)
    screen.innerHTML = sli
}
function phone12() {
    dial.hidden = true;
    contact.hidden = false;
    default_screen.hidden = true;
}
function call1() {
    if (screen.innerHTML) {
        dial.hidden = true;
        caller.hidden = false;
    }
}
function contactDiplay() {
    contact.hidden = true;
    contactList.hidden = false;
}
function cut() {
    caller.hidden = true;
    dial.hidden = false;
}
function keyPad() {
    dial.hidden = false;
    contact.hidden = true;
}

function add2() {
    saveContact.hidden = false;
    contactList.hidden = true;
}
// let balance= 0
function mtnDial() {
    let screen2 = screen.innerHTML
    let pattern3 = /#$/
    let move = pattern3.test(screen2)
    if (move) {
        let pattern = /[*]{1}[5]{2}[6]{1}/
        let pattern2 = /[*]{1}[5]{3}[*]{1}[0-9]{11}/;
        let dial = pattern.test(screen2)
        let check = pattern2.test(screen2)
        if (check) {

            loadCard()
            console.log(recharge);
            alert('card')

        } else if (dial) {
            console.log('sory');
            caller.hidden = true;
            spinner.hidden = false;
            spinner1.hidden = false;
            alert('balance')
            spinner1.hidden = false;
            balance1.hidden = false;
            balance.innerHTML = `Your account balance is #${recharge}`
        }
        else {
            console.log('none');
        }
    }

    else {
        calling_set.hidden = false;
        numbs.innerHTML = screen2
        setTimeout(() => {
            timerr()
        }, 1000);

    }
}

function airDial() {
    let screen2 = screen.innerHTML
    let pattern = /#$/
    let dial = pattern.test(screen2)
    if (dial) {

    } else {
        calling_set.hidden = false;
        numbs.innerHTML = screen2

    }
}
function cut_call() {
    calling_set.hidden = true;
    dial.hidden = false;
    caller.hidden = true;
}

// CALLER COUNTER

let numbs = document.getElementById('numbs')
let second = 0;
let second2 = 0;
let clear
function timerr() {
    let clear = setInterval(() => {
        timer.innerHTML = ''
        timer.innerHTML = `${second2}:${second}`

        if (clear) {
            second++
            // return;
        }
        if (second == 60) {
            second2++
            console.log(second2);
            second = 0
            return;
        }


        // lastModal.classList.remove('hidden2')
    }, 1000);
}




// contact 

//  CONTACT SAVING
let items;
function done() {
    let name2 = name1.value
    let number2 = number.value
    if (number2 == '' && name2 == '') {
        console.log('empty');
    } else {
        let items = { name: name2, number: number2 };
        myContact.push(items)
        setlocal()
    }
    saveContact.hidden = true;
    contactList.hidden = false;


}

function setlocal() {
    localStorage.setItem('contact', JSON.stringify(myContact))
    showContact()
}

// contact display

function showContact() {
    display2.innerHTML = '';
    myContact.forEach((element, i) => {
        display2.innerHTML += `   <div class='js-fl' >
    <div class="aside" onclick="calt()"> ${element.name[0]} </div>
    <div >
    <p class="ml-4 name mt-1" >${element.name}</p>
    <p class="ml-4">${element.number}</p>
   
    </div>
    </div> <hr>`
    });
}

function calt() {
    alert()
    saveContact.hidden = true;
    calling_set.hidden = true;
}

function getlocalstorage() {
    let cont = localStorage.getItem('contact');
    if (cont) {
        myContact = JSON.parse(cont)
    } else {
        myContact = myContact
    }
    showContact()

}
getlocalstorage()

// CONTACT SEARCH
let seen = false;
function search() {

    for (let index = 0; index < myContact.length; index++) {
        let pattern = new RegExp(`${input.value}`, 'gi');
        let t = (myContact[index].name.match(pattern));
        let c = (myContact[index].number.match(pattern));
        if (c || t) {
            showContact()
            seen = true;
            if (input.value != '') {
                display2.innerHTML = ''
                console.log(index);
                // showContact()
                display2.innerHTML += myContact[index].name + ' ' + myContact[index].number
            }
        } else if (index == myContact.length - 1 && seen == false) {
            display2.innerHTML = ''
        }

    }
}

//      recharging
seen = false
let recharge = 0

function loadCard() {

    myar.forEach((element, index) => {


        if (screen.innerHTML === element.pin) {
            if (element.status == "USED") {
                alert('used')

                seen = true

            }
            else if (element.status !== "USED" && load.value !== '') {
                caller.hidden = true;
                alert()
                // balance1.hidden= true;
                balance2.hidden = false
                balance2.innerHTML = `You have successfully recharge #${element.amount} of card`

                if (recharge != 0) {
                    let bal = Number(recharge) + Number(element.amount)
                    //    recharge += Number(element.amount)

                    recharge = bal
                    console.log(recharge);
                } else {
                    recharge = element.amount
                }

                localStorage.setItem('rechargeBalance', JSON.stringify(recharge))
                console.log(recharge);

                myar[index].status = 'USED'
                localStorage.setItem('cardTable', JSON.stringify(myar))
                create()
            }

        }

    })

}


// RECHARGE CARD


let network1 = document.getElementById('text')
let amount1 = document.getElementById('amount')
let display = document.getElementById('serial')
let gPin = document.getElementById('gPin')
myar = []
let data;
function buy() {
    getPin()
    if (amount.value == '') {
        err.innerHTML = "Amount is empty";
        err.classList.add('error');
        return;
    }
    let network1 = document.getElementById('text').value;
    let amount1 = document.getElementById('amount').value
    data = { network: network1, amount: amount1, pin: gPin.value, status: "UNUSED" };
    myar.push(data);
    create()
}

function create() {
    localStorage.setItem('cardTable', JSON.stringify(myar))
    show();
}


function show() {
    display.innerHTML = ''
    display.innerHTML += `<tr>
    <th>S/N</th>
        <th>NETWORK</th>
        <th>AMOUNT</th>
        <th>CODE</th>
        <th>ACTION</th>
    </tr>`
    myar.forEach(function (ele, i) {
        display.innerHTML += `<tr>
    <td> ${i + 1}</td> 
    <td> ${ele.network}</td> 
    <td> ${ele.amount}</td> 
    <td> ${ele.pin}</td> 
    <td> <p>${ele.status}</p> </td> 
    </tr>`
    });

}

function getPin() {

    let pin = Math.trunc(10000000000 + Math.random() * 90000000000)

    if (network1.value == 'MTN') {
        pin = `*555*${pin}#`
    }
    if (network1.value == 'AIRTEL') {
        pin = `*126*${pin}#`
    }
    if (network1.value == 'GLO') {
        pin = `*126*${pin}#`
    }
    gPin.value = pin

}


let load = document.getElementById('load')


// let items2;
function localStorageData() {

    let items2 = localStorage.getItem('cardTable');
    if (items2) {
        myar = JSON.parse(items2)
    } else {
        myar = myar;
    }
    show()
}
localStorageData()

// let newBal;
function getBal() {
    let newBal = localStorage.getItem('rechargeBalance')
    if (newBal) {
        recharge = JSON.parse(newBal)
    } else {
        recharge = recharge
    }
}
getBal()