function createElement(type, value = null) {
  let node = document.createElement(type);
  if (value !== null) {
    let textNode = document.createTextNode(value);
    node.appendChild(textNode);
  }
  return node
}

export {createElement}