class DOMNodeCollection {
  constructor(HTMLElements) {
    this.nodes = HTMLElements;
  }

  html(string) {
    if (string) {
      this.nodes.forEach((node) => {
        node.innerHTML = string;
      });
    } else {
      if (this.nodes.length > 0) {
        return this.nodes[0].innerHTML;
      }
    }
  }

  empty() {
    this.nodes.forEach(node => {
      node.innerHTML = "";
    });
  }

  append(arg) {
    this.nodes.forEach(node => {
      node.innerHTML += arg;
    });
  }

  attr(arg) {
    this.nodes.forEach(node => {
      node.setAttribute(arg);
    });
  }

  addClass(className) {
    this.nodes.forEach(node => {
      node.classList.add(className);
    });
  }

  removeClass(className) {
    this.nodes.forEach(node => {
      node.classList.remove(className);
    });
  }

  children() {
    const childrenArray = [];
    this.nodes.forEach(node => {
      childrenArray.push(node.children);
    });
    return new DOMNodeCollection(childrenArray);
  }

  parent() {
    const parentArray = [];
    this.nodes.forEach(node => {
      parentArray.push(node.parentElement);
    });
    return new DOMNodeCollection(parentArray);
  }

  find(arg) {
    const selector = [];
    this.nodes.forEach(node => {
      selector.push(node.querySelectorAll(arg));
    });
    return new DOMNodeCollection(Array.from(selector));
  }

  remove() {
    this.nodes.forEach(node => {
      node.remove();
    });
  }

  on(type, eventHandler) {
    this.nodes.forEach(node => {
      node.addEventListener(type, eventHandler);
    });
  }

}

module.exports = DOMNodeCollection;
