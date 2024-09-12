document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('myform');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const emailFeedback=document.getElementById('emailFeedback');
    const passwordFeedback=document.getElementById('passwordFeedback');
    const usernameFeedback=document.getElementById('usernameFeeedback');
    email.addEventListener('input',()=>{
        if(email.validity.valid){
            emailFeedback.textContent='valid email!';
            emailFeedback.className='valid';
        }
        else{
            emailFeedback.textContent='Please enter valid email address';
            emailFeedback.className='error';
        }
    });
    password.addEventListener('input',()=>{
        if(password.value.length>=8){
            passwordFeedback.textContent='Password is Strong!';
            passwordFeedback.className='valid';
        }
        else{
            passwordFeedback.textContent='Password must be at least 8 characters long';
            passwordFeedback.className='error';
        }
    });
    username.addEventListener('input',()=>{
        if(username.value.length>=5){
            usernameFeedback.textContent='Username looks good!';
            usernameFeedback.className='valid';
        }
        else{
            usernameFeedback.textContent='Username must be at least 3 characters long';
            usernameFeedback.className='error'
        }
    });
    form.addEventListener('submit',(event)=>{
        if(!email.validity.valid||password.value.length<8||username.value.length<3){
            event.preventDefault();
            alert('Please fill out theform correctly before submitting');
        }
    });
});