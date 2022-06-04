const main = document.querySelector(".main");
const buttons = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit-button");
let activeButton = 0;

const removeActiveClass = ()=>{
  for(let i=0; i<5; i++){
    buttons[i].classList.remove("active");
  }
}

buttons.forEach((button, value) => {
  button.addEventListener("click", ()=>{
    removeActiveClass();
    buttons[value].classList.add("active");
    activeButton = buttons[value].value;
  });
});  

  submit.addEventListener("click", ()=>{  
      if(activeButton>0){
          main.innerHTML=`
          <section class="thankyou-card">
          <figure class="thankyou-svg">
            <img src="./images/illustration-thank-you.svg" alt="Thank you">
          </figure>
          <div class="user-rating-container">
            <p>You selected ${activeButton} out of 5</p>
          </div>   
          <h1>Thank you!</h1>
          <p id="parrafo">
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don't hesitate to get in touch!
          </p>
        </section>
          `
      };
  });

