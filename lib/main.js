const DOMNodeCollection = require('./dom_node_collection');

window.$l = (arg) => {
  if (arg instanceof HTMLElement){
    return new DOMNodeCollection(Array.from(arg));
  } else {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
};
