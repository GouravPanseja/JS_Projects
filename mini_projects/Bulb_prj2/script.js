const btn=document.querySelector('#btn');
var text = btn.innerHTML;
const image= document.getElementById('image')


        btn.addEventListener('click',()=>{

            if(text=='OFF'){
                btn.innerHTML='ON';
                text= 'ON';
                image.src='images/bulbON.png'
                console.log('button on')
            
               
             
            }
            else if(text=='ON'){
                btn.innerHTML='OFF';
                image.src='images/bulbOFF.png'
                text='OFF'
                console.log('button off')

            }
            
        })
        