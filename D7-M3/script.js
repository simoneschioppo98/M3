
// codice javascript utilizzato per immettere la classe reveal//

const movieScale = document.getElementsByClassName("movie-box");

for (const mover of movieScale) {
    mover.addEventListener("mouseenter", function(event){
     event.target.getElementsByTagName("div")[0].classList.toggle("reveal");
     event.target.getElementsByTagName("div")[1].classList.toggle("reveal");
    });
    mover.addEventListener("mouseleave", function(event){
        event.target.getElementsByTagName("div")[0].classList.toggle("reveal");
        event.target.getElementsByTagName("div")[1].classList.toggle("reveal");
       });
}

//fine codice classe reveal//