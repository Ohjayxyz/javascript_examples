const regex = new RegExp('favortie');

const string1 = 'my favorite food is steak';
const string2= 'my favorite thing is to code';

/favorite/ // thisis a regular expression

/[ a-z]/.test(string1); // can be used for character grouping

/./.test(string1); // when used in the context of a regex represents any characther

/\d/.test(string1); // matches all numbers

/\s/.test(string1); //matches all whitespace characthers

/^/.test(string1); //represents the beginning of a string;

/$/.test(string1); // represents the end of a string;


const str = 'hello world, 2021 @ more of a string';

/^[a-z ]+, [0-9 ]+@[a-z ]$/.exec(str); // can be done simpler below

/.+/.exec(str);