class Paw {
    constructor() {
      this.paw = document.getElementById('paw'); // récupère la div .paw
      this.offsetX = 400; 
      this.offsetY = 90; 
      document.addEventListener('mousemove', (e) => this.handleMouseMove(e)); // suivie de la patte en fonction du mouvement de la souris
    }
  
    handleMouseMove(e) { // Régalage du point de référence de l'image pour correspondre au centre de la patte
      this.paw.style.left = e.clientX - this.offsetX + 'px';
      this.paw.style.top = e.clientY - this.offsetY + 'px';
    }
  };
    /* La patte est un image qui suit le curseur de la souris*/

