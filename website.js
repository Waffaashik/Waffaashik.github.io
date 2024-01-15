const sections = document.querySelectorAll('.section');
const controlButtons = document.querySelectorAll('.control');

function handleSectionClick(e) {
    if (e.target.classList.contains('control')) {
      const targetId = e.target.dataset.id;
      const targetSection = document.getElementById(targetId);
  
      //  active section
      sections.forEach((section) => section.classList.remove('active'));
      targetSection.classList.add('active');
  
      //  active button styling
      const activeButton = document.querySelector('.control.active-btn');
      if (activeButton) {
        activeButton.classList.remove('active-btn');
      }
      const clickedButton = document.querySelector(`.control[data-id="${targetId}"]`);
      clickedButton.classList.add('active-btn');
    }
  }
  

function PageTransitions() {
  // Button click handler
  controlButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.id;
      const targetSection = document.getElementById(targetId);

      // button styling
      const activeButton = document.querySelector('.control.active-btn');
      if (activeButton) {
        activeButton.classList.remove('active-btn');
      }
      button.classList.add('active-btn');

      // Transition to the section
      sections.forEach((section) => section.classList.remove('active'));
      targetSection.classList.add('active');
    });
  });

  // Section click handler 
  document.body.addEventListener('click', handleSectionClick);
}

PageTransitions();



