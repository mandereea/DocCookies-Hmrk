//set a cookie on a document
document.cookie = 'theme=blue';

//read all cookies
let cookies = document.cookie;
console.log("after setting the theme cookie, all cookies are" , cookies);

//add two radio buttons with two available languages
const buttonsWrapper = document.createElement('div');
buttonsWrapper.innerHTML = `ro-Ro
                            <input type="radio"  name="language" value="ro-Ro"/>
                            en-En
                            <input type="radio"  name="language" value="en-En"/>`
document.body.appendChild(buttonsWrapper);


//getting the radio buttons in an array
const radioBtns = document.getElementsByName('language');

//fct for setting the languageCookie.value 
function setLanguageCookie(){
    //getting the document cookies 
    const cookies = getCookiesIntoObject();

    radioBtns.forEach(buton => {
        //logic for pre-set language based on pervious (session) choice
        if(buton.value === cookies.language){
            buton.checked = true;
        }
        //adding click event on radio buttons to get the (new) cookie value
        buton.addEventListener('click', event =>{
            document.cookie = `language=${event.target.value}`
            console.log("new cookies after click are", document.cookie)
        })
    })

}
setLanguageCookie();

//preparing the function for translating cookies into object
function getCookiesIntoObject(){
    const cookiesArray=cookies.split('; ');
           
    const cookiesObj = {}    
            
    cookiesArray.forEach((cookie) => {
        cookie = cookie.split('=')
            //console.log(cookie)
        cookiesObj[cookie[0]] = cookie[1]
    })
        //console.log(cookiesObj)
        return cookiesObj;
    }
