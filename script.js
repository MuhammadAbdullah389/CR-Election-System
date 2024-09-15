let btn = document.querySelector("#submit");
let showResult = document.querySelector("#generate");
let authorization = document.querySelector("#authorization");
let password = document.querySelector("#pass");
let pollBack = document.querySelector("#polling");
let result = document.querySelector("#result");
let input = document.querySelector("#voterID");
let voterName = document.querySelector("#name");
let canidiate1 = document.querySelector("#canidiate1");
let canidiate2 = document.querySelector("#canidiate2");
let canidiate3 = document.querySelector("#canidiate3");
let canidiate4 = document.querySelector("#canidiate4");
let msg2 = document.querySelector("#msg2");
let voted = document.querySelector("#msg3");
let remaining = document.querySelector("#msg4");
let newVoterName = document.querySelector("#regName");
let newVoter = document.querySelector("#regId");
let pin = document.querySelector('#admin')
let addVote = document.querySelector('#register')
let polling = document.querySelector("#backPoll")
let voteReg = document.querySelector("#voteReg")
let newbtn = document.querySelector("#new")
let eye = document.querySelector("#eye")
let flag = true;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let totalVotes = 40;
let polled     = 0;

//List of Voters allowed to cast their Vote
var voters = [3,6,10,12,14,23,26,30,34,37,39,42,45,48,51,54,59,61,64,67,72,75,78,81,84,90,93,98,102,104,108,114,117,120,124,127,130,134,146,149];
//Function to submit the vote by a Voter when button is clicked
btn.addEventListener("click", () => {
   //Checking if the Name field is empty
   if (input.value == ""){
      msg2.innerText = "Please enter your ID"; 
      return;
   }
let name = input.value;
//Loop to check if the voter who voted is present or not
for (let el of voters){
if (el == name){
   if (totalVotes > 0){
   if (canidiate1.checked){
      c1++;
   }else if (canidiate2.checked){
      c2++;
   }else if (canidiate3.checked){
      c3++;
   }else if (canidiate4.checked){
      c4++;
   }else{
      msg2.innerText = `${name},Please vote`;
      return;
   }
//Updating the polled and remaining votes
   totalVotes--;
   polled++;
//Updating relevent messages
   msg3.innerText = `Voted = ${polled}`
   msg4.innerText = `Remaining = ${totalVotes}`
   msg2.innerText = "Thanks for voting";
//Setting the input fields to become empty
   input.value = "";
   voterName.value = "";
//Setting all radio buttons to unchecked state
   let radios = document.querySelectorAll('input[name="vote"]');
   radios.forEach(radio => {
   radio.checked = false;
});
}else{
   msg2.innerText = "OOPS! It seems that all member have voted"; 
}
//Removing the voter from voting list when he/she polled
let index = voters.indexOf(el);
voters.splice(index,1);
break;
}else{
   msg2.innerText = "OOPS, We can't find your vote";
}}})
//Function to open generate result panel
result.addEventListener("click", () => {
   authorization.style.display = "block"
})
//Function to download result
showResult.addEventListener("click", () => {
   let passingCode = password.value;
   //Admin Verification
   if (passingCode === "vegeta123") {
      // Determine the winner
      let winner;
      if (c1 > c2 && c1 > c3 && c1 > c4) {
         winner = "Ammar Shehzad";
      } else if (c2 > c1 && c2 > c3 && c2 > c4) {
         winner = "Huzaifa Rao";
      } else if (c3 > c2 && c3 > c1 && c3 > c4) {
         winner = "Soban Ahmad";
      } else if (c4 > c2 && c4 > c1 && c4 > c3) {
         winner = "Hanan Ahmad";
      } else {
         winner = "No one";
      }

      let resultTime = new Date().toLocaleString();
      let totalVoted = polled;
      let remainingVotes = totalVotes;

      // Create the result file content
      let resultContent = `CR Elections Fall 2024 SP24-BS-SE-C\n\n` +
                          `Total Votes Polled: ${totalVoted}\n` +
                          `Remaining Votes: ${remainingVotes}\n\n` +
                          `Result Declaration Time: ${resultTime}\n\n` +
                          `Election Results:\n` +
                          `Ammar Shehzad: ${c1} votes\n` +
                          `Huzaifa Rao: ${c2} votes\n` +
                          `Soban Ahmad: ${c3} votes\n` +
                          `Hanan Ahmad: ${c4} votes\n\n` +
                          `Winning Candidate: ${winner}`;

      // Create and download the result file
      let blob = new Blob([resultContent], { type: "text/plain" });
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "election_results.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      authorization.style.display = "none";
   } else {
      alert("You entered the wrong password. Sorry, we cannot generate results.");
      authorization.style.display = "none";
   }
});
//Functions to close their respective panels
pollBack.addEventListener("click", () => {
   authorization.style.display = "none"
})

//Functions to close their respective panels
polling.addEventListener("click", () => {
   voteReg.style.display = "none";
})

//Function to open the Voter registeration panel
newbtn.addEventListener("click", () => {
   voteReg.style.display = "block";
})

//Function to register the Voter
addVote.addEventListener("click", () => {
   let newId = newVoter.value;
   let code = pin.value;
   if (code == "kakarot123"){
      voters.forEach((val) => {
         if (val == newId){
            flag = false;
         }
      })
      if (flag == true){
         voters.push(newId);
         totalVotes++;
         msg4.innerText = `Remaining Votes = ${totalVotes}`
         newVoterName.value = "";
         newVoter.value = "";
         pin.value = "";
         alert("Congratulations! Your Vote is now Registered");
      }else {
         alert("You are already registered in poll list");
      }
      
   }else {
      alert("You cant register as you are not an Admin");
   }
})
eye.addEventListener("click",() => {
   if (pin.type == "password"){
      pin.type = "text";
      eye.classList.add("fa-eye");
      eye.classList.remove("fa-eye-slash");
   }else{
      pin.type = "password";
      eye.classList.remove("fa-eye");
      eye.classList.add("fa-eye-slash");
   }
})