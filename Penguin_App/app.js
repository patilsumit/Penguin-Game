var indexArray=[];
var i;

    //getting random number using math .random js function
            function getrand(){
                return Math.floor((Math.random() * 9));
                }

    //checking if the rand num is  repeated
    function checkrand(number){
        var flag=false;
    //search all the elements of array whether the given random number is existing
        // for(x in indexArray){            
            for (i=0;i<=indexArray.length;i++)
                 {
                  if (indexArray[i]== number){
                    flag=true;
                }
            }return flag;
        //     if(indexArray[x]==number){
        //         flag=true;
        //         }
        //     }   
        // return flag;
    }
    
  //function to change Background img of div  
    function changeimage(ele){
        //get random number from getrandfunction
        var randnum=getrand();
        //check if given random number is already displayed
        if(!checkrand(randnum)){
            //if its the wacked penguin
            if(randnum==8){
                document.getElementById("article").style.display="none"; 
                document.getElementById("rest").style.display="block"; 
                //changing the background of given div
                ele.style.backgroundImage=" url('Images/penguin"+randnum+".png')"
                return true;
            }
            else{
                ele.removeAttribute("onclick");
                ele.style.backgroundImage=" url('Images/penguin"+randnum+".png')";
                //push the given random number to array index array so that its not repetative
                indexArray.push(randnum);
        return true;
               }
            }
        else{
            //if random number is repeated then call this same function again 
            changeimage(ele);
            }

    }
