function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  // deepest child of #grand-node
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedList.length, i++) {
    let element = rankedList.children[i];
    let rank = parseInt(element.innerHTML);
    rank += n;
    element.innerHTML = rank;
  }
}
