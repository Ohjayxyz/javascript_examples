const elementNode = document.createElementNS('p');
const textNode = document.createTextNode('Content');
const AttributeNode = docyent.createAtrribute('class');


elementNode // prints <p></p>
textNode //  prints "Content"
attributeNode //prints class=""

attributeNode.value = 'some-class'; // prints "some-class"
attributeNode // prints class="some-class"

elementNode.setAttributeNode(attributeNode); //  prints null
elementNode // prints <p class='some-class>Content</p>
document.body.appendChild(elementNode); //   