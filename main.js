//dom elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');
//add pm and am
    const showamPm = true ;
//showtime
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min  = today.getMinutes(),
    sec  = today.getSeconds();

//set to am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

// 12h format
    hour = hour % 12 || 12;
//output time
    time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showamPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}


//addzero
function addZero(k) {
    return (parseInt(k, 10) < 10 ? '0' : '') + k ;
  }
   // Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
      hour = today.getHours();
  
    if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon, ';
    } else {
      // Evening
      document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
    }
  }

  //get name
  function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
  

  //get focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
  //set focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
  
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);

    //run
    showTime();
    setBgGreet();
    getName();
    getFocus();