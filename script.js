 // Pobierz wszystkie karty
 var cards = document.querySelectorAll('.card');
      
 // Iteruj przez każdą kartę
 cards.forEach(function(card) {
     // Dodaj obsługę zdarzenia kliknięcia
     card.addEventListener('click', function() {
         // Pobierz docelowy modal z atrybutu data-target karty
         var targetModalId = card.getAttribute('data-bs-target');
         // Wywołaj metodę modal z Bootstrap, aby otworzyć odpowiedni modal
         var modal = new bootstrap.Modal(document.querySelector(targetModalId));
         modal.show();
     });
 });

 document.getElementById("redirect-button").onclick = function() {
     window.location.href = "https://www.google.com/maps/dir/50.0713443,19.9130224/Dukat%C3%B3w+29,+31-431+Krak%C3%B3w,+Polska/@50.0719075,19.9275024,15z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47165ae12f3d2e9b:0x77cc2077889049cc!2m2!1d19.961793!2d50.0781089!3e0?hl=pl&entry=ttu";
 }


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})