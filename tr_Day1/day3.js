function handleFormSubmit(event) {
            event.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var phoneInput = document.getElementById('phonenumber');
            var phoneValue = phoneInput.value.replace(/\D/g, '');
            var gender = document.getElementById('gender').value;

            if (phoneValue.length !== 10) {
                alert('Invalid phone number! Please enter a 10-digit phone number.');
                phoneInput.focus();
                return false;
            }

            var tbody = document.getElementById('submissionBody');
            var row = tbody.insertRow();
            row.insertCell().textContent = name;
            row.insertCell().textContent = email;
            row.insertCell().textContent = phoneValue;
            row.insertCell().textContent = gender;

            document.getElementById('userForm').reset();
            return true;
        }