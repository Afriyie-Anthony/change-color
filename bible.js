const inputVerse = document.getElementById('txtVerse');
const searchBtn = document.getElementById('class');
const referenceTag = document.getElementById('reference');
const previewTag = document.getElementById('preview');
const BASE_POINT = "https://bible-api.com/"

// Create an event handler for the button
searchBtn.addEventListener('click', requestUserInput);


//Create a funtion to request  user input
function requestUserInput(){
  //get the verse value
  let verse = inputVerse.value;
  fetch(`${BASE_POINT}${verse}`).then(function (res){
    return res.json()
  }).then(function (data){
    referenceTag.innerHTML = data.reference;
    previewTag.innerHTML = data.text;
  })
}

//code metrix