document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".section_btn .btn_col");
  const items = document.querySelectorAll(".col-collection-items");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const category = button.getAttribute("data-btn").toLowerCase();
          
          // Update active button styling
          buttons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          // Show/Hide items based on category
          items.forEach(item => {
              const itemCategory = item.getAttribute("data-item").toLowerCase();
              if (category === "all" || itemCategory === category) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});


//
    // Check window size and initialize the slider
    function initializeSlider() {
      const promoSection = document.querySelector('.promo-section');
      const promoSlider = document.querySelector('.promo-slider');
      const isMobile = window.innerWidth <= 768;
  
      if (isMobile && !promoSlider.classList.contains('mobile-slider')) {
        // Convert promo boxes into a slider
        promoSlider.classList.add('mobile-slider');
        promoSection.style.display = 'flex';
        promoSection.style.overflowX = 'auto';
        promoSection.style.scrollSnapType = 'x mandatory';
        promoSection.style.gap = '10px';
  
        const promoBoxes = document.querySelectorAll('.promo-box');
        promoBoxes.forEach(box => {
          box.style.minWidth = '90%'; // Adjust box size for the slider
          box.style.scrollSnapAlign = 'center';
        });
      } else if (!isMobile && promoSlider.classList.contains('mobile-slider')) {
        // Revert to original grid layout on larger screens
        promoSlider.classList.remove('mobile-slider');
        promoSection.style.display = ''; // Revert to CSS grid
        promoSection.style.overflowX = '';
        promoSection.style.scrollSnapType = '';
        promoSection.style.gap = '';
  
        const promoBoxes = document.querySelectorAll('.promo-box');
        promoBoxes.forEach(box => {
          box.style.minWidth = ''; // Revert to original size
          box.style.scrollSnapAlign = '';
        });
      }
    }
  
    // Initialize slider on load and on resize
    window.addEventListener('load', initializeSlider);
    window.addEventListener('resize', initializeSlider);