document.addEventListener('DOMContentLoaded', function() {
    // Code to handle form submissions or interactive elements
    const form = document.getElementById('question-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let question = document.getElementById('question').value;
            if (question) {
                alert('Votre question a été envoyée : ' + question);
                document.getElementById('question').value = ''; // Reset input field
            }
        });
    }
});
