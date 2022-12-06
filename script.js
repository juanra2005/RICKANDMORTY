
let container_main = document.getElementById('container_main');
let Buscador = document.getElementById('Buscador');
Buscador.addEventListener("keyup",render)

function render(){
    fetch(`https://rickandmortyapi.com/api/character/?name=${Buscador.value}`)
    .then(a=>a.json())
    .then(data=>{
  
      
      const {info,results}=data
      let items=``
      for(let item of results){
        items+=`
      <article id="container" class="container-personajes>

      <div class="image-container">
          <img src="${item.image}" alt="Personaje">
      </div>
      
      <h2>${item.name}</h2>
      <span>${item.status}</span>
      
      </article>`     
    }
    container_main.innerHTML=items
    })
      
  }

  render();




