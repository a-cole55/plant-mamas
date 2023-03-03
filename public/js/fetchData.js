document.querySelector('#search').addEventListener('click', getPlant);

function getPlant(){
    let userInput = document.getElementById('searchPlant').value;
    //checks if user input has a space//
    if (userInput.includes(' ')){
      search = userInput
      // search = userInput.replace(/ /g, "%");
    } else {
      search = userInput
    }
    fetch(`https://perenual.com/api/species-list?page=1&key=sk-3rgd63fa93f5a5fd2121&q=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data);
      const plantResults = data.data;
    //   let drinkData = data.drinks;
      displayData(plantResults)
    })
    .catch(err => {
      console.log(`error ${err}`)
    //   if (TypeError){
    //     document.querySelector('h6').innerText = "Hmm... It looks like we don't have that drink. Please try again."
    //   }
    });
  };

  function displayData(plantResults){
    var resultsList = document.getElementById("plantResults");

    for(let i = 0; i < plantResults.length; i++){
       //create new li element
       var plantListItem = document.createElement("li");

       //add text
       plantListItem.innerText = plantResults[i].scientific_name;

       //add new list element built in previous steps to unordered list
       //called numberList
       resultsList.appendChild(plantListItem);


    }
  }
  //clear input and delete old appended items