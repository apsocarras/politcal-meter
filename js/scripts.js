// UI Logic 

function hideResults() {
  document.getElementById("liberal").setAttribute("class", "hidden");
  document.getElementById("conservative").setAttribute("class", "hidden");
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
}

let liberal = 0;
let conservative = 0;
let error = 0;
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const answer1 = document.querySelector("input#question1input").value;
    const answer2 = document.querySelector("input#question2input").value;
    const answer3 = document.querySelector("input#question3input").value;
    const answer4 = document.querySelector("input#question4input").value;
    
    if (answer1 === "yes") {
      liberal += 1;
    } else if (answer1 === "no") {
      conservative +=1;
    } else { 
      error +=1;
    }

    if (answer2 === "yes") {
      conservative += 1;
    } else if (answer2 === "no") {
      liberal +=1;
    } else {
      error +=1
    }

    if (answer3 === "yes") {
      liberal += 1;
    } else if (answer3 === "no") {
      conservative +=1;
    } else {
      error +=1
     }

    if (answer4 === "yes") {
      liberal += 1;
    } else if (answer4 === "no") {
      conservative +=1;
    } else {
      error +=1
     }

    // if (answer5 === "yes") {
    //   conservative += 1;
    // } else if (answer5 === "no") {
    //   liberal +=1;
    // } else { }

    if (answer1 && answer2 && answer3 && answer4 && error === 0) {
      if (liberal > conservative) {
        document.querySelector("div#liberal").removeAttribute("class");
      } else if (conservative > liberal) {
        document.querySelector("div#conservative").removeAttribute("class");
      } else if (liberal === conservative) {
        document.querySelector("div#moderate").removeAttribute("class");
      }
    } else {
      document.querySelector("div#error").removeAttribute("class")
    }
  };
}




