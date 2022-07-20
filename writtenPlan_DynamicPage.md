# Dynamic Team Professional Page

This is a dynamic page with two professional profiles on it. 
The goal is to create a simple webpage using JavaScript to show/hide the profiles. 

Steps:

- Create design and layout of the page - ok
- Creating HTML page - ok
- Creating CSS - ok
- Creating a function show/hide in JavaScript - ok
- Testing the functionality - ok 

## BUGS 
- Fix member info, not show image before button click: 
    It was missing "display:none;" in #overlayPopup and we added this id:.show-overlayPopup { "display: block;}

- When adding the addEventListener we were writing it incorrectely as shown below:   
      nathButton.addEventListener('click', openOverlayPopUp ());

- It was breaking the code because it was calling the function in advance.
So the page was loading automatically with the pop up page opened.


