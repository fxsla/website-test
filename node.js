const textNode = document.createTextNode("The wind howls through the mountains");
const elementNode = document.createElement("p");
const body = document.querySelector("body");

elementNode.appendChild(textNode);
body.append(elementNode)




