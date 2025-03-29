// Récupérer le bouton et la section des compétences
const highlightButton = document.getElementById('highlightButton');
const skillsSection = document.getElementById('skills');

// Fonction pour ajouter une classe de mise en valeur
highlightButton.addEventListener('click', () => {
    // Ajouter une animation ou un effet visuel
    skillsSection.style.backgroundColor = 'burlywood';  // Changer la couleur de fond de la section des compétences
    skillsSection.style.color = 'orange';  // Changer la couleur du texte de la section des compétences
    skillsSection.style.transition = 'background-color 0.5s, color 0.5s'; // Ajouter une transition fluide

    // Afficher un message de confirmation
    alert('Mes compétences sont désormais mises en valeur !');
});
