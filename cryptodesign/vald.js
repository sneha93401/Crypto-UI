document.getElementById('switchToSignUp').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
  });
  
  document.getElementById('switchToSignIn').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
  });
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
  });
  
  document.getElementById('closeBtnSignUp').addEventListener('click',function() {
document.getElementById('signUpForm').style.display = 'none';
});
  

function validateSignIn() {
  // Clear previous errors
  document.getElementById('signInEmailError').textContent = '';
  document.getElementById('signInPasswordError').textContent = '';

  let email = document.getElementById('signInEmail').value;
  let password = document.getElementById('signInPassword').value;
  let valid = true;

  if (!email.includes('@gmail.com')) {
      document.getElementById('signInEmailError').textContent = 'Enter a valid email id';
      valid = false;
  }

  if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
      document.getElementById('signInPasswordError').textContent = 'Password must contain at least 8 characters and a special character';
      valid = false;
  }

  if (valid) {
      // Process sign-in here
      console.log('Sign In Validated');
  }
}

function validateSignUp() {
  // Clear previous errors
  document.getElementById('signUpEmailError').textContent = '';
  document.getElementById('signUpPasswordError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('userError').textContent='';

  let email = document.getElementById('signUpEmail').value;
  let password = document.getElementById('signUpPassword').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let user = document.getElementById('username').value;
  let valid = true;
  if (!email.includes('@gmail.com')) {
    document.getElementById('signUpEmailError').textContent = 'Enter a valid email id';
    valid = false;
}

if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
    document.getElementById('signUpPasswordError').textContent = 'Password must contain at least 8 characters and a special character';
    valid = false;
}

if (!/^\d{10}$/.test(phoneNumber)) {
    document.getElementById('phoneError').textContent = 'Number must contain 10 digits';
    valid = false;
}
if(user.length<4){
  document.getElementById('userError').textContent = 'name should contain at least 4 character';
  valid = false;
 
}

if (valid) {
    // Process sign-up here
    console.log('Sign Up Validated');
}
}


