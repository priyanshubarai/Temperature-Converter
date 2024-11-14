let RadioList = document.querySelector("form").querySelectorAll("input");   //accessing radio inputs
const ConvertBtn = document.querySelector("button");        //button

//handling click on btn
ConvertBtn.onclick = (e) => {

    e.preventDefault();         //prevents reload
    
    //for C2F
    if (RadioList[0].checked) {     
        let C = document.querySelector(".Celsius").value;

        if (C == "") {
            return
        }

        let F = (C * 9/5) + 32;
        document.querySelector(".Fahrenheit").value = `${Math.floor(F * 1000)/1000} °F`;
    }

    //for F2C
    if (RadioList[1].checked) {     
       let F =  document.querySelector(".Fahrenheit").value;

        if (F == "") {
            return
        }

       let C = (F - 32) * 5 / 9;
       document.querySelector(".Celsius").value = `${Math.floor(C * 1000)/1000} °C`;
    }
    return

}




