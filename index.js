function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');

  rankedList.forEach(() => {
    console.log('woo');
  });
}
