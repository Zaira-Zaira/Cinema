document.addEventListener("DOMContentLoaded", ()=>{
   
    console.log("loaded")

    // target = document.querySelector("ul")
    target = document.querySelector("section")
    
    movie = [                               
        {
            image : "./image/king-kong.jpg",
            titre : "King Kong",
            date : 1933,
            realisateur: "Merian C. Cooper",
            genre : "Horreur, fantastique",
            sortie : "22 novembre 2005"
              },

              {
             image : "./image/camonte.jpg",
             titre : "Scarface",
             date : 1932, 
             realisateur: "Howard Hawks",
             genre: "Policier, action",
             sortie: " 23 décembre 2005"
            },

            {
             image : "./image/autant-le-vent-little.png",
             titre : "Autant en emporte ",
             date : 1939,
             realisateur: "Victor Fleming",
             genre: "Dramatique, guerre",
             sortie: "19 mars 2005"
            }
             ]


            for( key in movie){
                   target.innerHTML+= `<figure> <img src= "${movie[key].image}">
                                         <figcaption>
                                               <h2> ${movie[key].titre} </h2>
                                         <dl>  
                                         <dt>Date:</dt>
                                         <dd>${movie[key].date}<br></dd>
                                         <dt> Réal:</dt>
                                         <dd>${movie[key].realisateur}<br></dd>
                                         <dt> Genre:</dt>
                                         <dd>${movie[key].genre}<br></dd>
                                         <dt>Sortie:</dt>
                                         <dd>${movie[key].sortie}</dd>
                                        <dl>
                                         </figcaption> 
                                             </figure>`
                 }

})






