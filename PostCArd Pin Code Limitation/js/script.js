

const Pincontrol=(e)=>{              //creating constrants in key press
       if(e.key>='0' && e.key<='9'){
        e.returnValue= true;
       }
       else{
        e.returnValue= false;
       }
       let d=document.getElementById("PinCode").value;
       if(d.length>=6){
        e.returnValue= false;
       }
     }