function createElement(type, value = null) {
  const node = document.createElement(type);
  if (value !== null) {
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
  }
  return node;
}

export default createElement;
