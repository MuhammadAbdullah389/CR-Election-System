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
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let totalVotes = 40;
let polled     = 0;
var voters = [3,6,10,12,14,23,26,30,34,37,39,42,45,48,51,54,59,61,64,67,72,75,78,81,84,90,93,98,102,104,108,114,117,120,124,127,130,134,146,149]
btn.addEventListener("click", () => {

   if (input.value == ""){
      msg2.innerText = "Please enter your ID"; 
      return;
   }

   let name = input.value;

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

   totalVotes--;
   polled++;

   msg3.innerText = `Voted = ${polled}`
   msg4.innerText = `Remaining = ${totalVotes}`
   msg2.innerText = "Thanks for voting";
   input.value = "";
   voterName.value = "";
   let radios = document.querySelectorAll('input[name="vote"]');
   radios.forEach(radio => {
   radio.checked = false;
});

}else{
   msg2.innerText = "OOPS! It seems that all member have voted"; 
}
let index = voters.indexOf(el);
voters.splice(index,1);
break;

}else{
   msg2.innerText = "OOPS, We can't find your vote";
}}})
// btn.addEventListener("click", () => {
//    if (input.value === ""){
//       msg2.innerText = "Please enter your ID"; 
//       return;
//    }

//    let voterID = input.value;
//    let voterName = name.value;
//    let votedCandidate = "";
//    let voteTime = new Date().toLocaleString();

//    for (let el of voters){
//       if (el == voterID){
//          if (totalVotes > 0){
//             if (canidiate1.checked){
//                c1++;
//                votedCandidate = "Ammar Shehzad";
//             } else if (canidiate2.checked){
//                c2++;
//                votedCandidate = "Huzaifa Rao";
//             } else if (canidiate3.checked){
//                c3++;
//                votedCandidate = "Soban Ahmad";
//             } else if (canidiate4.checked){
//                c4++;
//                votedCandidate = "Hanan Ahmad";
//             } else {
//                msg2.innerText = `${voterName}, please vote`;
//                return;
//             }

//             totalVotes--;
//             polled++;

//             msg3.innerText = `Voted = ${polled}`;
//             msg4.innerText = `Remaining = ${totalVotes}`;
//             msg2.innerText = "Thanks for voting";
//             input.value = "";
//             name.value = "";
//             let radios = document.querySelectorAll('input[name="vote"]');
// radios.forEach(radio => {
//     radio.checked = false;
// });
//             // Create and download the file with voter's details
//             let voteDetails = `Voter ID: ${voterID}\nName: ${voterName}\nCandidate: ${votedCandidate}\nTime: ${voteTime}`;
//             let blob = new Blob([voteDetails], { type: "text/plain" });
//             let link = document.createElement("a");
//             link.href = URL.createObjectURL(blob);
//             link.download = `vote_${voterID}.txt`;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//          } else {
//             msg2.innerText = "OOPS! It seems that all members have voted"; 
//          }
//          let index = voters.indexOf(el);
//          voters.splice(index, 1);
//          break;
//       } else {
//          msg2.innerText = "OOPS, we can't find your vote";
//       }
//    }
// });

result.addEventListener("click", () => {
   authorization.style.display = "block"
})
// showResult.addEventListener("click",() => {
//       let passingCode = password.value;
//    if (passingCode === "200420032005"){
//       let winner;
//       if (c1 > c2 && c1 > c3 && c1 > c4) {
//          winner = "Ammar Shehzad";
//       } else if (c2 > c1 && c2 > c3 && c2 > c4) {
//          winner = "Huzaifa Rao";
//       } else if (c3 > c2 && c3 > c1 && c3 > c4) {
//         winner = "Soban Ahmad";
//       } else if (c4 > c2 && c4 > c1 && c4 > c3){
//         winner = "Hanan Ahmad";
//       } else {
//              winner = "No one";
//       }
//    msg2.innerText = `Ammar Shehzad has obtained ${c1} votes\nHuzaifa Rao has obtained ${c2} votes\nSoban Ahmad has obtained ${c3} votes\nHanan Ahmad has obtained ${c4} votes\n ${winner} is appointed as CR now for the SP24-BSE Section C`;
//     authorization.style.display = "none"
//    }else{
//       alert("You entered wrong password. Sorry we can not generate results");
//       authorization.style.display = "none"
//    }
//    })
showResult.addEventListener("click", () => {
   let passingCode = password.value;
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

pollBack.addEventListener("click", () => {
   authorization.style.display = "none"
})