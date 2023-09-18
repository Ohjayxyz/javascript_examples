const myDate = new Date();

myDate.toString(); // returns the calue of myDate as astring

myDate.toISOString(); //returns the value of myDate in ISO 8601 extended string format

myDate.getDate(); //returns the value of the day ofthe month

myDate.getMonth(); /* returns the month of the year but uses zero indexing
so if the month is January, it  returns zero */

myDate.getFullYear(); // returns the alueof the year