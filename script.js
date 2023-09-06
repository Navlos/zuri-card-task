

var cardHolderInput = document.getElementById("card-holder-input");
var cardHolder = document.getElementById("card-holder-name")
var monthInput = document.getElementById("month-input")
var expMonth = document.getElementById("exp-month")
var yearInput = document.getElementById("year-input")
var expYear = document.getElementById("exp-year")
var errorText = document.getElementById("errorText");
var form  =document.getElementById("form")

const inputIds = [
    "first-input",
    "second-input",
    "third-input",
    "fouth-input",
  ];

  const displayIds = [
    "first-input-display",
    "second-input-display",
    "third-input-display",
    "fouth-input-display",
  ]


  inputIds.forEach((inputId, index) => {
    const inputElement = document.getElementById(inputId);
    const displayElement = document.getElementById(displayIds[index]);
  
    inputElement.addEventListener("input", function () {
      displayElement.innerText = inputElement.value;
  
      // Remove all non-numeric characters and replace them with an empty string
      inputElement.value = inputElement.value.replace(/[^0-9]/g, "");

      

    });


  });



cardHolderInput.addEventListener("input", function(){
    cardHolder.innerText = cardHolderInput.value;
})


// display card expirary month 
monthInput.addEventListener("input", function(){
   expMonth.innerText = monthInput.value;
})
// display card expirary year 
yearInput.addEventListener("input", function(){
   expYear.innerText = yearInput.value;
})




// Add an event listener to the first input field
const firstInput = document.getElementById("first-input");
const logo = document.getElementById("logo");

firstInput.addEventListener("input", function () {
  const inputValue = firstInput.value;

  // Change the card logo based on the user input
  changeCardLogo(inputValue);
});

function changeCardLogo(inputValue) {
  if (inputValue.startsWith("5")||inputValue.startsWith("2")) {
    logo.src = "image/master-card.png";
  } else if(inputValue.startsWith("4")) {
    logo.src = "image/visa.png";
  }
  else if(inputValue.startsWith("3")) {
    logo.src = "image/American_Express.png"
  }
// set default logo
  else{
    logo.src = "image/master-card.png"
  }
}


// add event listener to button

var form = document.getElementById("form");
var message = document.getElementById("message");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  message.textContent = "Form submitted successfully 🎉🎉🎉"
  
});






