document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const tableBody = document.querySelector('#dataTable tbody');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form values
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const food = document.getElementById('food').value;
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
  
      // Append values to table
      const row = tableBody.insertRow();
      const cellFirstName = row.insertCell(0);
      const cellLastName = row.insertCell(1);
      const cellAddress = row.insertCell(2);
      const cellPincode = row.insertCell(3);
      const cellGender = row.insertCell(4);
      const cellFood = row.insertCell(5);
      const cellState = row.insertCell(6);
      const cellCountry = row.insertCell(7);
  
      cellFirstName.textContent = firstName;
      cellLastName.textContent = lastName;
      cellAddress.textContent = address;
      cellPincode.textContent = pincode;
      cellGender.textContent = gender;
      cellFood.textContent = food;
      cellState.textContent = state;
      cellCountry.textContent = country;
  
      // Clear form fields
      form.reset();
    });
  });
  