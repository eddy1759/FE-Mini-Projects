// index.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const queryOptions = document.querySelectorAll('input[name="query-type"]');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        showToast();
        resetForm();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      isValid = validateField(firstName) && isValid;
      isValid = validateField(lastName) && isValid;
      isValid = validateEmail() && isValid;
      isValid = validateQueryType() && isValid;
      isValid = validateField(message) && isValid;
      isValid = validateConsent() && isValid;
  
      return isValid;
    }
  
    function validateField(field) {
      const errorElement = field.nextElementSibling;
      if (field.value.trim() === '') {
        showError(errorElement, 'This field is required');
        return false;
      }
      hideError(errorElement);
      return true;
    }
  
    function validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errorElementValid = email.nextElementSibling;
      const errorElementEmpty = errorElementValid.nextElementSibling;
  
      if (email.value.trim() === '') {
        showError(errorElementEmpty, 'This field is required');
        hideError(errorElementValid);
        return false;
      } else if (!emailRegex.test(email.value)) {
        showError(errorElementValid, 'Please enter a valid email address');
        hideError(errorElementEmpty);
        return false;
      }
      hideError(errorElementValid);
      hideError(errorElementEmpty);
      return true;
    }
  
    function validateQueryType() {
      const errorElement = document.querySelector('#query + .error');
      const isSelected = Array.from(queryOptions).some(option => option.checked);
      if (!isSelected) {
        showError(errorElement, 'Please select a query type');
        return false;
      }
      hideError(errorElement);
      return true;
    }
  
    function validateConsent() {
      const errorElement = consent.parentElement.nextElementSibling;
      if (!consent.checked) {
        showError(errorElement, 'To submit this form, please consent to being contacted');
        return false;
      }
      hideError(errorElement);
      return true;
    }
  
    function showError(element, message) {
      element.textContent = message;
      element.classList.remove('hidden');
    }
  
    function hideError(element) {
      element.classList.add('hidden');
    }
  
    function showToast() {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <div>
          <img src="./assets/images/icon-success-check.svg" alt="toast check" />
          <span>Message Sent!</span>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }
  
    function resetForm() {
      form.reset();
    }
});