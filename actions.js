const billAmount=document.getElementById("bill-amount")
const partySize=document.getElementById("party-size")
const customPercentSpace=document.getElementById("percent-button-custom")
const tipPerPersonSpace=document.getElementById("tip-per-person")
const totalPerPersonSpace=document.getElementById("total-per-person")
let bill=0
let percentage=0
let party=0


const validateInput = () => {
   const billError=document.getElementById("error-notif-bill")
   const partyError=document.getElementById("error-notif-party")
   const customError=document.getElementById("error-notif-custom")

   if(isNaN(Number(billAmount.value))) {
       billError.classList.remove("hide")
       billAmount.classList.add("error")
   } else {
      billError.classList.add("hide")
      billAmount.classList.remove("error")
   }

   if(isNaN(Number(partySize.value))) {
      partyError.classList.remove("hide")
      partySize.classList.add("error")
  } else {
     partyError.classList.add("hide")
     partySize.classList.remove("error")
  }

  if(isNaN(Number(customPercentSpace.value))) {
   customError.classList.remove("hide")
   customPercentSpace.classList.add("error")
} else {
  customError.classList.add("hide")
  customPercentSpace.classList.remove("error")
}
}

const getTip = () => {
   validateInput()

   bill=parseFloat(billAmount.value)

   if (isNaN(bill)) {
   console.log("error on bill")
   }

   party=parseFloat(partySize.value)

   if (isNaN(party || party<1)) {
      console.log("error on party!")
   }

   if (bill>0 && party>0) return getResults()
}

const getPercentage = (percent, index) => {
   for (let i=0; i<5; i++) {
      console.log(document.getElementsByClassName("percent-buttons")[i])
      document.getElementsByClassName("percent-buttons")[i].classList.remove("active")
      document.getElementsByClassName("percent-buttons")[i].classList.add("inactive")
   }
   if (index<5) {
      percentage=percent
      document.getElementsByClassName("percent-buttons")[index].classList.add("active")
      document.getElementsByClassName("percent-buttons")[index].classList.remove("inactive")   
   }
   else {
      const customPercentage=parseFloat(customPercentSpace.value)/100
      percentage=customPercentage
   }
   getTip()
}

const getResults = () => {
   const tipPerPerson=((bill*percentage)/party).toFixed(2)
   const totalPerPerson=(bill*(1+percentage)/party).toFixed(2)

   tipPerPersonSpace.innerHTML=`$${tipPerPerson}`
   totalPerPersonSpace.innerHTML=`$${totalPerPerson}`

}

const getReset = () => {
   const resetBtn=document.getElementById("reset")
   if (billAmount.value.length>0 || partySize.value.length>0) {
      resetBtn.classList.remove("disabled")
      resetBtn.classList.add("enabled")
      resetBtn.disabled=false;
   }
}