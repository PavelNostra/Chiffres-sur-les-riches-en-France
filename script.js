const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Beijing", "Tokyo", "Seoul", "Hong Kong"],
        datasets: [{
            data: [240,120,140,130]
        }]
    }
})

const barChart1 = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Test", "On regarde", "Seoul", "Hong Kong"],
        datasets: [{
            data: [240,120,140,130]
        }]
    }
})

// Fonction pour ouvrir/fermer le menu déroulant
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownArrow = document.getElementById('dropdownArrow');

dropdownButton.addEventListener('click', () => {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
    dropdownArrow.textContent = '▼';
  } else {
    dropdownContent.classList.add('show');
    dropdownArrow.textContent = '▲';
  }
});

// Fonction pour sélectionner un graphique
function selectGraph(title, sectionId) {
  // Met à jour le titre du menu
  dropdownButton.childNodes[0].textContent = title;

  // Ferme le menu
  dropdownContent.classList.remove('show');
  dropdownArrow.textContent = '▼';

  // Affiche la section sélectionnée
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}
