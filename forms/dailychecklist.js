document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('raw-material-form');
    var submitBtn = document.getElementById('submit-btn');

    // Add event listener to each radio button group
    var answerGroups = document.querySelectorAll('.answer');
    answerGroups.forEach(function(group) {
        var yesRadio = group.querySelector('input[type="radio"][value="yes"]');
        var noRadio = group.querySelector('input[type="radio"][value="no"]');
        var commentsTextarea = group.nextElementSibling;

        // Add change event listener to each radio button
        [yesRadio, noRadio].forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (noRadio.checked) {
                    commentsTextarea.removeAttribute('disabled');
                } else {
                    commentsTextarea.value = ''; // Clear comment when switching back to Yes
                    commentsTextarea.setAttribute('disabled', 'disabled');
                }
                validateForm();
            });
        });

        // Add input event listener to comments textarea
        commentsTextarea.addEventListener('input', function() {
            validateForm();
        });
    });

    // Function to validate form and enable/disable submit button
    function validateForm() {
        var allRequiredComments = Array.from(document.querySelectorAll('textarea[required]')).every(function(textarea) {
            return textarea.value.trim() !== '';
        });
        submitBtn.disabled = !allRequiredComments;
    }

    // Add submit event listener to form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform form submission logic here
        // For demo purposes, simply log the form data
        var formData = new FormData(form);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    });
});
