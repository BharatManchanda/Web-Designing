let nextButton = document.querySelectorAll(".next");
nextButton.forEach((element) => {
    element.addEventListener('click', function() {
       // Get the current outer div (the parent of the button's parent)
       const currentOuter = this.closest('.outer');
            
       // Add 'complete' class to the current outer div
       currentOuter.classList.add('complete');
       
       // Remove 'active' class from the current outer div
       currentOuter.classList.remove('active');

       // Find the next sibling outer div
       const nextOuter = currentOuter.nextElementSibling;

        if (nextOuter && nextOuter.classList.contains('outer')) {
            // Add 'active' class to the next outer div
            nextOuter.classList.add('active');
            nextOuter.classList.remove('blank');
        }
    })
});

let cancelButton = document.querySelectorAll(".cancel");
cancelButton.forEach((element) => {
    element.addEventListener('click', function() {
       // Get the current outer div (the parent of the button's parent)
       const currentOuter = this.closest('.outer');
            
       // Add 'complete' class to the current outer div
       currentOuter.classList.add('blank');

       // Remove 'active' class from the current outer div
       currentOuter.classList.remove('active');
       const previousOuter = currentOuter.previousElementSibling
       if (previousOuter && previousOuter.classList.contains('outer')) {
            // Add 'active' class to the next outer div
            previousOuter.classList.add('active');
            previousOuter.classList.remove('complete');
        }

    });
});