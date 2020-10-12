document.addEventListener('DOMContentLoaded', startGame)

var butID=document.getElementById('butId').onclick=function(){
      console.log(lib.formulorItems);

};


//audio.play();




// Define your `board` object here!
//Your board object needs a property named cells
//cells.board.cells should be an array.
//This board doesn't seem to have any cells in it... 
//try adding some elements to your array.
//At least one of those cells is not an object! { }

var board={
    cells: [ {row:0,col:0,value:-8,isMine:false,isMarked:false,hidden:true},
             {row:0,col:1,value:-9,isMine:true,isMarked:false,hidden:true},
             {row:0,col:2,value:-10,isMine:false,isMarked:false,hidden:true},
             {row:0,col:3,value:-1,isMine:false,isMarked:false,hidden:true},
            // {row:0,col:4,value:0,isMine:false,isMarked:false,hidden:true},

             {row:1,col:0,value:1,isMine:true,isMarked:false,hidden:true},
             {row:1,col:1,value:2,isMine:false,isMarked:false,hidden:true},
             {row:1,col:2,value:3,isMine:true,isMarked:false,hidden:true},
             {row:1,col:3,value:-2,isMine:false,isMarked:false,hidden:true},
            // {row:1,col:4,value:0,isMine:false,isMarked:false,hidden:true},

             {row:2,col:0,value:4,isMine:false,isMarked:false,hidden:true},
             {row:2,col:1,value:5,isMine:true,isMarked:false,hidden:true},
             {row:2,col:2,value:6,isMine:false,isMarked:false,hidden:true},
             {row:2,col:3,value:-3,isMine:false,isMarked:false,hidden:true},
           //  {row:2,col:4,value:1,isMine:false,isMarked:false,hidden:true},

             {row:3,col:0,value:7,isMine:false,isMarked:false,hidden:true},
             {row:3,col:1,value:8,isMine:true,isMarked:false,hidden:true},
             {row:3,col:2,value:9,isMine:false,isMarked:false,hidden:true},
             {row:3,col:3,value:-4,isMine:false,isMarked:false,hidden:true},
          //   {row:3,col:4,value:1,isMine:false,isMarked:false,hidden:true},

             {row:4,col:0,value:-6,isMine:false,isMarked:false,hidden:true},
             {row:4,col:1,value:0,isMine:true,isMarked:false,hidden:true},
             {row:4,col:2,value:10,isMine:false,isMarked:false,hidden:true},
             {row:4,col:3,value:-5,isMine:false,isMarked:false,hidden:true},
           //  {row:4,col:4,value:1,isMine:false,isMarked:false,hidden:true},

    ] ,
    calculate:calculate

}


   

function startGame () {
 

  lib.initBoard()

 
}
var result;
var operators=[];
var numberStr='';


function calculate(){


    for(var i=0;i<lib.formulorItems.length;i++){

       
      if(lib.formulorItems[i]>=0 ){
          numberStr=numberStr+lib.formulorItems[i].toString();
          console.log(numberStr);

      }

      else if(lib.formulorItems[i]<0){

           operators.push(lib.formulorItems[i]);
      }
    }
   /*   else if(cell.value==-3)
        {
          //node.innerHTML='-'
          operator='-';
          lib.formulorItems.push('-');
        

        }
      else if(cell.value==-4)
        {
          //node.innerHTML='+'
          lib.formulorItems.push('+');
          operator='+';

        }
      else if(cell.value==-5)
        {
          //formulorItems.push('=');
          console.log(formulorItems);
        
        
        // node.innerHTML='='
        }
      else if(cell.value==-6)
        {
        // node.innerHTML='+/-'
          //sformulorItems.push('');

        }
      else if(cell.value==-7)
        {
          lib.formulorItems.push('.');

        // node.innerHTML='.'
        operator='.';
        }
        else if(cell.value== -8)
        {
          //formulorItems.push('');

        // node.innerHTML='%'
        
        }
      else if(cell.value==-9)
        {
          lib.formulorItems=[];


        // node.innerHTML='CE'}
        }
      else if(cell.value==-10)
        {
          lib.formulorItems=[];

        // node.innerHTML='C'
        
        }  */



 }







