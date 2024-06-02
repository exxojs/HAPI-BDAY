function greetPerson()
{
    var name = document.getElementById("enterName").value;
    var greet = "Hey there, " +name+"👋"

 document.getElementById("greet").textContent = greet
}

//buttons

const submit = document.querySelector("submit")
const clickMe = document.querySelector("clickMe")
const prevP2 = document.querySelector("prevP2")
const nextP4 = document.querySelector("nextP4")
const prevP3 = document.querySelector("prevP3")
const nextP5 = document.querySelector("nextP5")
const openGift = document.querySelector("openGift")

//PAGES

const page1 = document.querySelector(".pageOne");
const page2 = document.querySelector(".pageTwo");
const page3 = document.querySelector(".pageThree");
const page4 = document.querySelector(".pageFour");
const page5 = document.querySelector(".pageFive");
const page6 = document.querySelector(".pageSix");

function goPage2() {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    page6.style.display = 'none';
  }

  function goPage3() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page4.style.display = 'none';
    page5.style.display = 'none';
    page6.style.display = 'none';
  }

  function goPage4() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'flex';
    page5.style.display = 'none';
    page6.style.display = 'none';
  }

  function goPage5() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'flex';
    page6.style.display = 'none';
  }

  function goPage6() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    page6.style.display = 'flex';
  }