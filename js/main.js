(() => {

    let nathButton = document.querySelector('#nathButton');
    let tallyButton = document.querySelector('#tallyButton');
    let closeButton = document.querySelector('#closeBtn');

    function openOverlayPopUp(event) {
        document.getElementById("overlayPopup").style.display = "block";
        document.getElementById("memberProfile").src = "/img/" + event.target.dataset.member + "-profile.jpg";
    }

    function closeOverlayPopUp(event) {
        document.getElementById("overlayPopup").style.display = "none";
    }


    nathButton.addEventListener('click', openOverlayPopUp);
    tallyButton.addEventListener('click', openOverlayPopUp);
    closeButton.addEventListener('click', closeOverlayPopUp);
  

})();
