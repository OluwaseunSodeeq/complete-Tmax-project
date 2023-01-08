"use script";
//DECALARETION OF VARIABLES
const allLabelBtn = document.querySelectorAll("[name ='project-btn']");
const projectCards = document.querySelectorAll(".project-card");
const cardsContainer = document.querySelector(".project-cards-container");
let checker = document.querySelectorAll(".checker-paragraph");

//Nodelist to Array
checker = Array.from(checker);

allLabelBtn.forEach((eachBtn) => {
  eachBtn.addEventListener("change", (e) => {
    if (e.target.id === "button001") {
      checker.forEach((oneofTheCard) => {
        oneofTheCard.parentNode.parentNode.style.display = "block";
      });
    } else if (e.target.id === "button002") {
      checker.forEach((oneofTheCard) => {
        if (oneofTheCard.innerText === "WIND ENERGY") {
          oneofTheCard.parentNode.parentNode.style.display = "block";
        } else {
          oneofTheCard.parentNode.parentNode.style.display = "none";
        }
      });
    } else if (e.target.id === "button003") {
      checker.forEach((oneofTheCard) => {
        if (oneofTheCard.innerText === "WATER TURBINES") {
          oneofTheCard.parentNode.parentNode.style.display = "block";
        } else {
          oneofTheCard.parentNode.parentNode.style.display = "none";
        }
      });
    } else if (e.target.id === "button004") {
      checker.forEach((oneofTheCard) => {
        if (oneofTheCard.innerText === "SOLAR PANEL") {
          oneofTheCard.parentNode.parentNode.style.display = "block";
        } else {
          oneofTheCard.parentNode.parentNode.style.display = "none";
        }
      });
    }
  });
});

///ANOTHER WAY TO ACHIEVE THIS
