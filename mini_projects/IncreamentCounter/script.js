//REQUIREMENT:-  To get all the three numbers to start rolling since the time of window laod 
// and stop all together after a perticular time with their separate arbitrary
// target values.

// APPROACH:- A setTimout function repeats a function after some regular interval of time
// In each loop the function sets all the display values. After a perticular loop count
// all the display values reaches their target.


// In order to set the count limit (here,41) we arbitrarily fix it for
// any one jump value(here, i) and adjust other jump values accordingly
// here we had set the i jump =10 and target set was 400 therefore
// it gave count of 40looops and j and k jumps were set accordingly acc to their 
// targets
const display1= document.getElementById('display1');
const display2= document.getElementById('display2');
const display3= document.getElementById('display3');

let i =0;
var j=0;
var k=0;
var count=0;
window.addEventListener('load',()=>{
    
    const counter1=  setInterval(()=>{

        display1.innerHTML=`${i}+`
        i= i+10
     

        display2.innerHTML=`${j}+`
        j= j+375
       
        
        display3.innerHTML=`${k}+`
        k= k+6

       count++;         // if count =1 then loop is also 1

        if(count==41){               // one extra loop in the first loop 0 was only printed 
            clearInterval(counter1)  // therefore they needed one extra loop to get to target
        }

     
    },20)

     
    }

)