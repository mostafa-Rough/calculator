let  number=document.getElementsByClassName('btn');
let  op_screen=document.getElementById('operation');
let   result=document.getElementById('screen');
let mode=document.getElementsByName('i');
let del=document.getElementById('del');
let reset=document.getElementById('reset');
let equal=document.getElementById('equal');
let arithmetique=document.getElementsByClassName('arith');
let array=['/','x','+','-','.'];
op_screen.textContent=" ";
 for (const element of number) {
        element.addEventListener('click',function()
        {
                if(op_screen.textContent!=="invalid operation")
                        {
                                op_screen.textContent+=this.textContent;
                                let final=eval(op_screen.textContent.replace("x","*"));
                                if(Number.isInteger(final))
                                {
                                          result.textContent=final;
                                }else{
                                        result.textContent=final.toFixed(4);
                                }
                              
                        }
        })      
 }
 for (const element of arithmetique) {
        element.addEventListener('click',function()
        {
                  
                  
                  if(op_screen.textContent!==" " && op_screen.textContent!=="invalid operation")
                  {
                        let char=op_screen.textContent[op_screen.textContent.length-1];
                        if(array.includes(char))
                                {
                                      op_screen.textContent=op_screen.textContent.slice(0,-1)+this.textContent;
                                     
                                      
                                }else
                                {
                                        op_screen.textContent+=this.textContent;
                                }
                  }   
        })
         
 }
 reset.addEventListener('click',function()
{
         result.textContent=op_screen.textContent=' ';
})
 del.addEventListener('click',function()
{
        if(result.textContent!==" " && result.textContent!=="invalid operation")
                        {
                                op_screen.textContent=op_screen.textContent.slice(0,-1);
                                char=op_screen.textContent[op_screen.textContent.length-1];
                                          if(!array.includes(char))
                                          {
                                               let final =eval(op_screen.textContent);
                                                if(Number.isInteger(final))
                                                        {
                                                                  result.textContent=final;
                                                        }else{
                                                                result.textContent=final.toFixed(4);
                                                        }
                                                

                                          }
                        }
                        else
                        {
                                op_screen.textContent=result.textContent=" ";

                        }
})
 del.addEventListener('dblclick',function()
{
        if(result.textContent!==" " && result.textContent!=="invalid operation")
        {
                op_screen.textContent=op_screen.textContent.slice(0,-2);
                char=op_screen.textContent[op_screen.textContent.length-1];
                          if(!array.includes(char))
                          {
                                result.textContent=eval(op_screen.textContent);
                          }
        }
        else
        {
                result.textContent= op_screen.textContent=" ";
        }

})
equal.addEventListener('click',function()
{
        
        if(result.textContent!==' ')
{
        try {
                let final=eval(op_screen.textContent);
                result.textContent=final
                if(Number.isInteger(final))
                        {
                                  result.textContent=final;
                        }else{
                                result.textContent=final.toFixed(4);
                        }
                op_screen.textContent =result.textContent;

        } catch(error) {

                (()=>
        {
                op_screen.textContent="invalid operation";
        })();
        }finally
        {
                result.textContent=' ';
        }
}

})


