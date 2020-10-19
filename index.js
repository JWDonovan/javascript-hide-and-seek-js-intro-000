function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node');
  // check if grand node has children
  // loop through children to see if they have children
  // loop through their children to see if they have children
  // if not, return element
  let lastChild(element) {
    let children = element.children;

    if (children) {
      children.forEach(child => {
        lastChild(child);
      });
    } else {
      return element;
    }
  }
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');

  rankedList.forEach(() => {
    console.log('woo');
  });
}
