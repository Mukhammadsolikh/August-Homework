

var color = "black"
var maxAttempt = 5;
for( let i = 0; i < maxAttempt; i++ ){
    var answer = prompt('Rangni top?') //qizil
    if( answer == null ){
        break;
    }
   if( answer != color ){
        continue; 
    } 
    else{
        document.write( ` <h1>tabriklaymiz siz yutdingiz!`)
       
        break;
    }
} 
console.log(answer)
document.write(` <h1> uyin tugadi </h1>`) 


 




// var color = 'black';
// var maxAttempt = 5;
// var i = 0;
// while( i < maxAttempt) {
//     i++
//     var answer = prompt ( 'Rangni top?' )
//     if( answer == null ){
//         break 
//     }
//      else if (answer != color){
//         continue
//      }   
//      else{
//         document.write (`<h1> tabriklaymiz </h1>`)
//         break
//      }
//     }
//     document.write(` <h1> uyin tugadi </h1>`) 
