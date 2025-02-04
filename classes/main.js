class Main{
    constructor() {
      this.n = 0;
      this.catFoods = [ ]; // génère le tableau qui contiendra mes catFood de manière unitaires.
      this.intervalId = setInterval(() => this.generateCatFood(), 3000); // interval en milisecondes à l'appel de la fonction generateCatFood
      this.scoreThreshold = 10; // Définir le seuil initial
    }
    // Modale = la div qui contien le cat oui chatgpt m'a donné le template, no wastin' time.
    afficherModale() {
       // Récupérer la référence à la div body
    var body = document.body;

     // Créer la div modale
     var scoreModal = document.createElement('div');
     scoreModal.id = 'scoreModale';
     scoreModal.style.display = 'flex';
     scoreModal.style.alignItems = 'center';
     scoreModal.style.position = 'absolute';
     scoreModal.style.width = '100%';
     scoreModal.style.height = '100%';
     scoreModal.style.backgroundColor = 'rgba(0, 0, 0)';
     scoreModal.style.flexDirection = 'column';
     scoreModal.style.zIndex = '1';
 
     // Créer une div pour contenir l'image
     var imageContainer = document.createElement('div');
     imageContainer.style.display = 'flex';
     imageContainer.style.justifyContent = 'center';
     imageContainer.style.width = '80vw';
     imageContainer.style.height = '80vh';
     imageContainer.style.zIndex = '1';
    
     // Créer une image aléatoire
     var imageAleatoire = document.createElement('img');
     var cheminDossierImages = 'assets/images';
     var images = ['IMG_0105.jpg', 'IMG_0435.jpg', 'IMG_0491.jpg', 'IMG_0628.jpg', 'IMG_0667.jpg'];
     var imageAleatoireIndex = Math.floor(Math.random() * images.length);
     imageAleatoire.src = cheminDossierImages + '/' + images[imageAleatoireIndex];
     imageAleatoire.style.maxWidth = '100%'; // Ajustez la taille maximale de l'image
     imageAleatoire.style.maxHeight = '100%'; // Ajustez la taille maximale de l'image
     imageAleatoire.style.objectFit = 'contain';
     imageAleatoire.style.border = '2px solid rgb(255,215,0)';
     imageAleatoire.style.borderRadius = '3px';
     imageAleatoire.style.zIndex = '1';

 
     // Créer un bouton pour fermer la div modale
     var boutonFermer = document.createElement('button');
     boutonFermer.textContent = 'What have you done to Me ?';
     boutonFermer.style.fontFamily = 'Nosifer';
     boutonFermer.style.color = 'rgb(102, 0, 0)';
     boutonFermer.style.backgroundColor = 'rgb(255,215,0)';
     boutonFermer.style.display = 'flex';
     boutonFermer.style.marginTop = '10px'; // Espacement du bouton par rapport à l'image
     boutonFermer.addEventListener('click', () => { // Utilisation d'une fonction fléchée ici
      // Fermer la div modale en la supprimant du DOM
      body.removeChild(scoreModal);
      setTimeout(() => {
          this.intervalId = setInterval(() => this.generateCatFood(), 3000);      
        });
     });
 
     // Ajouter l'image à la div du conteneur
     imageContainer.appendChild(imageAleatoire);
 
     // Ajouter la div du conteneur et le bouton à la modal
     scoreModal.appendChild(imageContainer);
     scoreModal.appendChild(boutonFermer);
 
     // Ajouter la modale au body
     body.appendChild(scoreModal);
 }


    generateCatFood() { //fonction qui créée les croquettes
        let catFood = new CatFood(); 
        catFood.generateStruct(); // fct de la lasse catFood qui comprend la création des attribus
        this.catFoods.push(catFood); // les nouveaux objets entrent dans le tableau
        if (scoreState >= this.scoreThreshold) {
          clearInterval(this.intervalId);
          this.afficherModale();
          this.scoreThreshold += 10; // Augmenter le seuil pour le prochain multiple de 10
}
} 
}
