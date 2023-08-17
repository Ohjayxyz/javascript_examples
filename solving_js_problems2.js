//complete the solution so that it reverses the string passed into it.
//'world' => 'dlrow'
// 'word' => 'drow'

function solution (str){
const arr = str.split ("");
const reversed = arr.reversed ();
const finalAnswer = reversed.join ("");

return finalAnswer
}