let values="";

let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            values=eval(values);
            console.log(values);
            document.querySelector('input').value= values;
        }

        else if(e.target.innerHTML == 'AC'){
            values="";
            document.querySelector('input').value= values;
        }

        else{
        console.log(e.target);
        values = values + e.target.innerHTML;
        document.querySelector('input').value= values;
        }

    })
    

})