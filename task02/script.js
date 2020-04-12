/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/12/2020
*/
window.addEventListener('load', ()=> {
    const userInputs = document.getElementById("userInput");
    userInputs.addEventListener("change",inputCh);
    const userInput = document.getElementById("userInput").value;

    function inputCh(event){
        if(userInput === ""){//user input is blank
            event.preventDefault();
            throw new Error("Error: User Input cannot be blank!")//error that input must not be blank
            document.getElementById("userInput").focus();//reset focus to input
        }else if(userInput = /[a-zA-Z]$/){//regular expression to find string
            event.preventDefault();
            throw new Error("Error: User Input must not be a numeric value!")//error that input must not be numeric
            document.getElementById("userInput").focus();//reset focus to input
        }else{//if found no error show the convertFromHolder div
            let ele = document.getElementById("convertFromHolder");
            ele.style.display = "block";
        }
    };
    const optionChange = document.getElementById("convertFrom");
    const conTo = document.getElementById("convertTo"); //select the converTo select menu
    optionChange.addEventListener("change", function(){
        let selOption = document.getElementsByTagName("option");
        if(selOption != ""){//if selected optioon is not blank show the convertoholder div
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "block";
        }else if(selOption == "meters"){//if selected option is meters
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "block";

            let feet = document.createElement("feet"); //create element feet
            feet.text = "Feet"; //set text of element to Feet
            conTo.add(feet); //add Feet element to convertTo select menu
            let mile = document.createElement("mile");//create element miles
            mile.text = "Miles";//set text of element to Miles
            conTo.add(mile);//add Mile element to convertTo select menu
        }else if(selOption == "liters"){
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "block";

            let gallon = document.createElement("gallon"); //create element gallon
            gallon.text = "Gallons"; //set text of element to Gallons
            conTo.add(gallon); //add Gallon element to convertTo select menu
            let quart = document.createElement("quart");//create element quart
            quart.text = "Quarts";//set text of element to quart
            conTo.add(quart);//add quart element to convertTo select menu
        }else if(selOption == "kilos"){
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "block";

            let pound = document.createElement("pound"); //create element pound
            pound.text = "Pounds"; //set text of element to pound
            conTo.add(pound); //add pound element to convertTo select menu
        }else if(selOption == "celsius"){
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "block";

            let fahrenheit = document.createElement("fahrenheit"); //create element fahrenheit
            fahrenheit.text = "Fahrenheit"; //set text of element to fahrenheit
            conTo.add(fahrenheit); //add fahrenheit element to convertTo select menu
        }else{//when no option selected hide the convertToHolder
            let ele = document.getElementById("convertToHolder");
            ele.style.display = "none";
        }
    const anAction = document.getElementById("action");
    anAction.addEventListener("click", clearF);
        function clearF(){
            document.getElementById("resultHolder").innerHTML = "";//clear the results holder
            let meter = document.getElementById("meters");
            let liter = document.getElementById("liters");
            let kilo = document.getElementById("kilos");
            let celsius = document.getElementById("celsius");
            if((userInputs = meter)&&(conTo = feet)){//userinput meter and selects feet
                return Number(userInput * 3.2808);
            }
            if((userInputs = meter) &&(conTo = mile)){//userinput meter and selects mile
                return Number(userInput * 0.00062137);
            }
            if((userInputs = liter) &&(conTo = gallon)){//userinput liter and selects gallon
                return Number(userInput * 0.26417);
            }
            if((userInputs = liter) &&(conTo = quart)){//userinput liter and selects quart
                return Number(userInput * 1.056688);
            }
            if((userInputs = kilo) &&(conTo = pound)){//userinput kilo and selects pound
                return Number(userInput * 2.2046);
            }
            if((userInputs = celsius) &&(conTo = fahrenheit)){//userinput celsius and selects fahrenheit
                return Number((userInput * 1.8) + 32);
            }
        }
    });
    
      
});