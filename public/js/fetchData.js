function getPlant(){
    // let userInput = document.querySelector('input').value;
    // //checks if user input has a space//
    // if (userInput.includes(' ')){
    //   search = userInput.replace(/ /g, "%");
    // } else {
    //   search = userInput
    // }
    fetch(`https://perenual.com/api/species-list?page=1&key=sk-3rgd63fa93f5a5fd2121&q=monstera`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data);
    //   let drinkData = data.drinks;
    //   displayData(drinkData, i)
    })
    .catch(err => {
      console.log(`error ${err}`)
    //   if (TypeError){
    //     document.querySelector('h6').innerText = "Hmm... It looks like we don't have that drink. Please try again."
    //   }
    });
  };
getPlant();