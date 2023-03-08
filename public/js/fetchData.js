document.querySelector('#search').addEventListener('click', getPlant);
document.querySelector('li').addEventListener('click', savePlantData);

let plantResults = [];
let userSelection = '';
//TO DO:
//Set up Error Handling for Keywords not found in database

function getPlant(plantResults){
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
      plantResults = data.data;
      console.log(plantResults)
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
    var resultsList = document.getElementById("plant-results");

    plantResults.forEach(element => {
       //create new li element
       const plantListItem = document.createElement("li");
       const plantListContainer = document.createElement("div");
       const plantListName = document.createElement("span");
       const plantListImage = document.createElement("img");
       //add text to span and image
       plantListName.innerText = element.scientific_name + " " + "(" + element.common_name + ")";
       plantListImage.src = element.default_image.small_url;

       //add new list element built in previous steps to unordered list
       plantListItem.appendChild(plantListContainer);
       plantListContainer.appendChild(plantListName);
       plantListContainer.appendChild(plantListImage);
       resultsList.appendChild(plantListItem);

       plantListContainer.classList.add("search-results-container");
       plantListItem.setAttribute("id", element.id);
    });
  }
  //TO DO
  //clear input and delete old appended items

  function savePlantData(e){
    let userSelection = e.target.id
    console.log(userSelection)
  }