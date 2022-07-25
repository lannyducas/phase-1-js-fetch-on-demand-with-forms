const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);

fetch ("http://localhost:3000/movies")
    .then((res) => res.json())
    .then((json) => console.log(json));
