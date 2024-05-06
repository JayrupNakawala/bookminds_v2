// Defining variables to store different elements.
const form = document.querySelector('form');

const fname = form['fname'];
const lname = form['lname'];
const email = form['email'];
const phone = form['phone'];
const dob = form['DOB'];
const subject = form['subject'];
const message = form['message'];

const fname_error = document.querySelector('.fname');
const lname_error = document.querySelector('.lname');
const email_error = document.querySelector('.email');
const phone_error = document.querySelector('.phone');
const dob_error = document.querySelector('.dob');
const subject_error = document.querySelector('.subject');
const message_error = document.querySelector('.message');

// Defining the action for when the form is submitted.
form.addEventListener('submit', (e) => {
  e.preventDefault() // This will prevent refreshing of page when submit.
  if (fname.value.length == 0) {
    fname.style.borderBottomColor = "red"; // This will color the border of the input field red, showing that it is empty.
    fname.focus(); // This will move the cursor to the input field, so that the user is ready to start typing.
    fname_error.style.display = "block"; // This will show the error message, which will initially be hidden using CSS.
    return false; // This will return false so that the function doesn't check other fields if the above condition if true.
  }

  else {
    fname.style.borderBottomColor = "var(--accent-color)";
    fname_error.style.display = "none";
  }

  if (lname.value.length == 0) {
    lname.style.borderBottomColor = "red";
    lname.focus();
    lname_error.style.display = "block";
    return false;
  }

  else {
    lname.style.borderBottomColor = "var(--accent-color)";
    lname_error.style.display = "none";
  }

  if (email.value.length == 0) {
    email.style.borderBottomColor = "red";
    email.focus();
    email_error.style.display = "block";
    return false;
  }

  else {
    email.style.borderBottomColor = "var(--accent-color)";
    email_error.style.display = "none";
  }

  if (phone.value.length == 0) {
    phone.style.borderBottomColor = "red";
    phone.focus();
    phone_error.style.display = "block";
    return false;
  }

  else {
    phone.style.borderBottomColor = "var(--accent-color)";
    phone_error.style.display = "none";
  }

  if (dob.value.length == 0) {
    dob.style.borderBottomColor = "red";
    dob.focus();
    dob_error.style.display = "block";
    return false;
  }

  else {
    dob.style.borderBottomColor = "var(--accent-color)";
    dob_error.style.display = "none";
  }

  if (subject.value.length == 0) {
    subject.style.borderBottomColor = "red";
    subject.focus();
    subject_error.style.display = "block";
    return false;
  }

  else {
    subject.style.borderBottomColor = "var(--accent-color)";
    subject_error.style.display = "none";
  }

  if (message.value.length == 0) {
    message.style.borderColor = "red";
    message.focus();
    message_error.style.display = "block";
    return false;
  }

  else {
    message.style.borderColor = "var(--accent-color)";
    message_error.style.display = "none";
    alert("You have successfully submitted your request.");
  }
})
