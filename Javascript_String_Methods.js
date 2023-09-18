// replaceAll string method()

const myString = 'My Dog jumped on the bed. My dog is a bad Dog';

const newString = myString.replaceAll('Dog', 'Cat');// this doesn't replace all characthers that need replacing so we can use a regular expression to fix it

const correctstr = myString.replaceAll(/[Dd](1)og/g, 'cat');

// toUpperCase()

const myStr = 'some string';
console.log(myStr.toUpperCase());

//substring()

myStr.substring(5, 7);

//if we want to capitalize the first letter of the string

const result = myString[0].toUpperCase + myString.substring(1); // prints out 'Some string'

//trim()
const externalData = [
    {
        title: 'How to code        ',
        author: ' Zach' 
    
    },
    {
     title: ' What is Vim?' , 
     author: ' Zach'
    },
    {
        title: '  How do loops work in JavaScript?       ',
        author: ' Zach'
    }

];

for(let i = 0; i < externalData.length; i++){
    const currentTitle = externaldata[i].title;
    const curentAuthor = externalData[i].author;

    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
} 