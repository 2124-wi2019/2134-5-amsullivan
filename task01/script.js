/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/12/2020
*/
//event listener to wait for window load
window.addEventListener('load', ()=> {
    const form = document.getElementById("myForm");
    form.addEventListener('submit',validate,false);//form event listener on submit
    function validate(event) {
        let firstName = document.getElementById("firstName").value;//value of fistname field
        let lastName = document.getElementById("lastName").value;//value of lastname field
        let phoneNum = document.getElementById("telephoneNumber").value; //value of telephonenumber field
        if(firstName === ""){//firstName is blank throw error and prevent submit
            event.preventDefault();
            throw new Error("Error: First name cannot be blank!")   
        }
        if(lastName === ""){//lastName is blank throw error and prevent submit
            event.preventDefault();
            throw new Error("Error: Last name cannot be blank!")
        }
        if(phoneNum = /^[2-9]\d{2}-\d{3}-\d{4}$/){//phone number is wrong format throw error and prevent submit
            event.preventDefault();
            throw new Error("Error: Phone Number must follow 402-123-4567 format.")  
        }
        if(phoneNum = /((\(\d{3}\)?)|(\d{3}-))?\d{3}-\d{4}$/){//phone number is wrong format throw error and prevent submit
            event.preventDefault();
            throw new Error("Error: Phone Number must follow (402) 123-4567 format.")  
        }
        if(phoneNum = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/){//phone number is wrong format throw error and prevent submit
            event.preventDefault();
            throw new Error("Error: Phone Number must follow 401234567 format.")  
        }
    }
      
});