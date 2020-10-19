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
  rankedList.forEach(element => {
    rank = parseInt(element.children[i].innerHTML);
    rank += n;
    element.children[i].innerHTML = rank;
  });
}
