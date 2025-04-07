function move_up(num){
    document.getElementById("username" +num).style.cssText="transform: translateY(-5px);"
}
function disp_reg(){
    document.getElementById("loginbox").style.cssText="display:none;";
    document.getElementById("forgotpasswordbox").style.cssText="display:none;";
    document.getElementById("registerbox").style.cssText="display:block;height:600px;margin-top:50px";
}

function disp_forgot_password(){
    console.log('Forgot password box is being displayed');
    document.getElementById("loginbox").style.cssText="display:none;";
    document.getElementById("registerbox").style.cssText="display:none;";
    document.getElementById("forgotpasswordbox").style.cssText="display:block !important; height:600px; margin-top:50px;";
 }
 
function disp_log(){
    document.getElementById("loginbox").style.cssText="height:420px";
    document.getElementById("loginbox").style.cssText="display:block;";
    document.getElementById("forgotpasswordbox").style.cssText="display:none;";
    document.getElementById("registerbox").style.cssText="display:none;";
}

function toggle_password(n)
{
    var pass=document.getElementById("pass"+n);
    if(pass.type==="password")
    {
        pass.type="text"
    }
    else{
        pass.type="password"
    }
}
function gone(el)
{
    document.getElementById(el).classList.add("temp");
    const stopanim=setTimeout(clearem(el),1500);
    
}
function stopanim(el){
    document.getElementById(el).style.cssText="display:none;";
}

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain both letters and numbers.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
