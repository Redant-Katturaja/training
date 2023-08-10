     
     document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
    
        const name = document.getElementById('name')
        const password = document.getElementById('password')
        const mail = document.getElementById('email')
        const mobile = document.getElementById('mobile')
        const dob = document.getElementById('dob')
        const gender=document.querySelector('.gender:checked');
        const state=document.getElementById('state')
        const checkbox = document.querySelectorAll("[name='checkbox']:checked");
        document.querySelectorAll('.error').forEach((item) => item.innerText='')
      var errorFlag=false
      
    
      if (name && !name.value) {
    
        errorFlag =true
    
        document.querySelector('.error-name').innerText='Name is required'
    
      }
      if (mail && !mail.value) {
    
        errorFlag =true
    
        document.querySelector('.error-email').innerText='Email is required'
    
      }
      if (dob && !dob.value) {
    
        errorFlag =true
    
        document.querySelector('.error-dob').innerText='DOB is required'
    
      }
      if (mobile && !mobile.value) {
    
        errorFlag =true
    
        document.querySelector('.error-mobile').innerText='Mobile Number is required'
    
      }
      
    
      if (password && !password.value) {
    
        errorFlag =true
    
        document.querySelector('.error-password').innerText='Password is required'
    
      }
      console.log(gender);
      if (!gender) {
        errorFlag =true
        document.querySelector('.error-gender').innerText='Must Select One Option'
    
      }
      if (state && !state.value) {
    
        errorFlag =true
    
        document.querySelector('.error-state').innerText='Must Select  the state'
    
      }
      
  if (checkbox.length < 2) {

    
        errorFlag =true
    
        document.querySelector('.error-language').innerText='Must Select Atleast Two languages'
    
      }
 })
 

 function toggleMenu(tabs){
    document.querySelectorAll('.routes').forEach((item)=>item.style.background="transparent")
    document.querySelector('#'+tabs).style.background="red"
 } 