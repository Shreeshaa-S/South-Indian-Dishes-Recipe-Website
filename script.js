function scrollToSection(sectionId) {
    document.querySelectorAll('.tab-content').forEach((section) => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  
    document.querySelectorAll('.tab-link').forEach((button) => {
      button.classList.remove('active');
    });
    document.querySelector(`[onclick="scrollToSection('${sectionId}')"]`).classList.add('active');
  }
  
  function adjustServings(amount) {
    let servingCount = document.getElementById('serving-count');
    let currentCount = parseInt(servingCount.innerText);
    let newCount = currentCount + amount;
    if (newCount > 0) {
      servingCount.innerText = newCount;
      document.querySelectorAll('.amount').forEach((element) => {
        let baseAmount = element.getAttribute('data-base-amount');
        element.innerText = baseAmount * newCount / currentCount;
      });
    }
  }
  
  // Initial load
  document.addEventListener('DOMContentLoaded', () => {
    scrollToSection('ingredients');
  });
  