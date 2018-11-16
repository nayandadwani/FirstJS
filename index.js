
var t=0;
function count(){t++;}
function StartWatch()
{
    let reset,start, stop ;
    let flag=0;
    let countvalue;
    let second= new Date();
     let durations=t;
    
    this.start=function()
    {
        
        if(flag==0)
        {
           console.log("succesfull call"); 
           coutvalue=setInterval(count,1000);
            
        }
        else
        {
                console.log("start method already call ");
        }
      
       flag=1;     
    };
    this.stop=function()
    {
       
        if(flag==1)
        {
           clearInterval(countvalue);
           console.log("succesfull stop call"); 
         
           
        }
        else
        {
                console.log("can not call without star method ");
        }
      
        flag=0;
    };
    this.reset=function()
    {   
                    start=stop=durations=null;
    };
   Object.defineProperty(this,'durations',{
          set:function()
        {
            durations=t;
        },
        get:function(){return durations;}

      
    });

    
}

const sw= new StartWatch();

