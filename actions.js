const billAmount=document.getElementById("bill-amount")
const partySize=document.getElementById("party-size")
const tipPerPersonSpace=document.getElementById("tip-per-person")
const totalPerPersonSpace=document.getElementById("total-per-person")
let bill=0
let percentage=0
let party=0


const getTip = () => {
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
      const customPercentSpace=document.getElementById("percent-button-custom")
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