console.log('%c HI', 'color: firebrick')

//Challenge 1 -- on page load, fetches the images using the url above ⬆️
//- parses the response as `JSON`
//- adds image elements to the DOM **for each** 🤔 image in the array



// function dogsImg(){
//   fetch("https://dog.ceo/api/breeds/image/random/4")
//   .then(resp => resp.json())
//   .then(json => renderDogImages(json))
  
// }

// function renderDogImages(DogImages) {
//     const photos = document.querySelector("div")
//     DogImages.message.forEach(DogImage => {
//         const img = document.createElement("img")
//         img.src = DogImage
//         photos.append(img)
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     dogsImg()
//     dogBreeds()
    
   
    
//   });
  
//   // ## Challenge 2 - on page load, fetches all the dog breeds using the url above ⬆️
// //- adds the breeds to the page in the `<ul>` provided in `index.html`

//   function dogBreeds(){
//       fetch('https://dog.ceo/api/breeds/list/all')
//       .then(resp => resp.json())
//       .then(json => renderBreeds(json.message))
//   }

//   function renderBreeds(breeds) {
//       const ul = document.querySelector("#dog-breeds")
//       for (const breed in breeds){
//           const li = document.createElement("li")
//           const dogsName = li.innerHTML =  breed
//           ul.append(li)
          

//             //## Challenge 3

// // Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// // the user clicks on any one of the `<li>`s, the font color of that `<li>`
// // changes. This can be a color of your choosing.


//           li.addEventListener('click', function(e) {
//             document.querySelector("li")
//             this.style.color = 'red'
//         })
//       };

 


//   }



const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", function()
{
    fetchDogs() 
    fetchBreeds()
});

const fetchDogs = () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json.message)) 
}

const renderDogs = (dogArr) => {
    dogArr.forEach((dog) => {
        let dogImg = document.getElementById("dog-image-container")
        const img = document.createElement("img")
        img.src = dog
        dogImg.append(img)
    }) 
};


const fetchBreeds = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreed(json.message))
};


const renderBreed = (dogObj) => {
    const breeds = Object.keys(dogObj)
    breeds.forEach((dog) => {
        const breedUl = document.getElementById("dog-breeds")
        const breedLi = document.createElement("li")
        breedLi.innerText = dog
        breedUl.append(breedLi)
        breedLi.addEventListener("click", function(e) {
            document.querySelector("li")
            this.style.color = "red"
    })
 })
};




function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }




// googple type eventlistener for - drop down
// once trigger start removing thing from dog breeds and re render that.
//




 


