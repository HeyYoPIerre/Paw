// définir la variable de score au début.
class CatFood {
  constructor() {
    //this.n = 0;
    //this.intervalId = setInterval(() => this.generateDiv(), 5000); // interval en milisecondes à l'appel de la fonction generateDiv
  }

  /*
  addAttributesToDiv(generatedDiv) {
    // la div générée prend les attributs ci-dessous à sa création
    let x = Math.floor(Math.random() * 100) + 1; // x = chiffre random
    generatedDiv.classList.add("catfood"); //nom de classe
    //suis le mouvement de la souris dans le DOM pour trigger la fonction qui suit au moment du hover
    generatedDiv.addEventListener("mouseenter", function (e) {
      scoreState++; // on ajoute 1 au score à chaque hover
      document.getElementById("score").innerText = "Score: " + scoreState; // affichage dynamique du score dans la div score.

      // Cacher la div au lieu de la supprimer
      this.style.display = "none";
    });
    generatedDiv.style.position = "absolute";
    generatedDiv.style.top = "0";
    generatedDiv.style.left = x + "vw"; // récupère le x random
    
  }
  */
  /**Créer fonction qui donne à la div passée en paramètre le style suivant
   * position: absolute
   * top: 0;
   * left: (chiffre random entre 0 et 100vw)
   */

  // Mouvement catfood
  moveCatfood(catfood) {
    // mouvement de la croquette
    let catfoodPosition = 0;

    function animate() {
      catfoodPosition += 10; // Vitesse de déplacement de l'catfood vers le bas
      if (catfoodPosition > window.innerHeight) {
        //si la position de la div .catfood est supérieure à la hauteur max de la fenêtre
        catfoodPosition = 0; // Réinitialisation de la position lorsque l'catfood sort de l'écran
        catfood.style.left =
          Math.floor(Math.random() * window.innerWidth) + "px"; // Nouvelle position horizontale aléatoire
      } else {
        catfood.style.top = catfoodPosition + "px"; // Déplacement vertical de l'catfood vers le bas
      }
      requestAnimationFrame(animate); // fluidifie le défilement
    }

    animate();
  }

/*
  generateDiv() {
    let generatedDiv = document.createElement("div"); // créé la div
    this.addAttributesToDiv(generatedDiv); // appelle la fonction plus haut pour y ajouter la classe .catfood etc
    document.getElementById("divContainer").appendChild(generatedDiv); // les divs sont incrémentées dans un divContainer
    this.moveCatfood(generatedDiv); // y ajoute la fonction de déplacement verticall
    this.n++;
    if (this.n === 100) {
      clearInterval(this.intervalId); // si j'ai créé 100 croquuettes je met fin à la fonction d'interval
    }
  }
*/
  generateStruct()
  {
    let generatedDiv = document.createElement("div"); // créé la div
    this.moveCatfood(generatedDiv); // y ajoute la fonction de déplacement verticall
    document.getElementById("divContainer").appendChild(generatedDiv); // les divs sont incrémentées dans un divContainer
    this.n++;
    if (this.n === 100) {
      clearInterval(this.intervalId); // si j'ai créé 100 croquuettes je met fin à la fonction d'interval
    }
    // la div générée prend les attributs ci-dessous à sa création
    let x = Math.floor(Math.random() * 100) + 1; // x = chiffre random
    generatedDiv.classList.add("catfood"); //nom de classe
    //suis le mouvement de la souris dans le DOM pour trigger la fonction qui suit au moment du hover
    generatedDiv.addEventListener("mouseenter", function (e) {
      scoreState++; // on ajoute 1 au score à chaque hover
      document.getElementById("score").innerText = "Score: " + scoreState; // affichage dynamique du score dans la div score.

      // Cacher la div au lieu de la supprimer
      this.style.display = "none";
    });
    generatedDiv.style.position = "absolute";
    generatedDiv.style.top = "0";
    generatedDiv.style.left = x + "vw"; // récupère le x random
    
  }
}
