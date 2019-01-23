let counter=0;

 function takeANumber(katzDeliLine){
   
   counter+=1;
   
   katzDeliLine.push(counter);
   
   // Welcome you are number 47!
   return `Welcome you are number `+ counter + "!";
   // return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
   
 }
 let  line = []
 console.log(takeANumber(line))
 console.log(takeANumber(line))
 console.log(takeANumber(line))
 
 
 
 function nowServing(katzDeliLine){
   
   if(katzDeliLine.length===0){
     return "There is nobody waiting to be served!";
   } else {
     return "Currently serving " + katzDeliLine.shift() + ".";
   }
   
 }

 
function currentLine(katzDeliLine){
  
  if(katzDeliLine.length===0){
    
    return "The line is currently empty.";
    
  }else{
    
    var nowInLine = [];
    for(var i=0;i<katzDeliLine.length;i++){
      nowInLine.push(i+1 + ". " + katzDeliLine[i]); 
      
    }
    
    return "The line is currently: " + nowInLine.join(', ');
  }
  
}






