function openModal(jajanan) {
  document.getElementById(`modal-${jajanan}`).style.display = "block";
}

function closeModal(jajanan) {
  document.getElementById(`modal-${jajanan}`).style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
};
