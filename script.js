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
                op_screen.textContent+=this.textContent;
              
                result.textContent=eval(op_screen.textContent.replace("x","*"));
        })
         
 }
 for (const element of arithmetique) {
        element.addEventListener('click',function()
        {
                  
                  
                  if(op_screen.textContent!==" ")
                  {
                        let char=op_screen.textContent[op_screen.textContent.length-1];
                        if(array.includes(char))
                                {
                                      op_screen.textContent=op_screen.textContent.slice(0,-1)+this.textContent;
                                      console.log(char)
                                      
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
        if(result.textContent!==" " && result.textContent!=="Unvalid operation")
                        {
                                op_screen.textContent=op_screen.textContent.slice(0,-1);
                                char=op_screen.textContent[op_screen.textContent.length-1];
                                          if(!array.includes(char))
                                          {
                                                result.textContent=eval(op_screen.textContent);
                                                

                                          }
                        }
                        else
                        {
                                op_screen.textContent=result.textContent=" ";

                        }
})
 del.addEventListener('dblclick',function()
{
        if(result.textContent!==" " && result.textContent!=="Unvalid operation")
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
        try {
                if(result.textContent!==' ')
                        {
                             op_screen.textContent =result.textContent;
                        }
                        throw new Error('Unvalid operation')
        } catch (error) {
                op_screen.textContent=error.message;
                op_screen.style.color='red';
                op_screen.style.fontSize='0.8em';
        }finally
        {
                result.textContent=' ';
        }

})
