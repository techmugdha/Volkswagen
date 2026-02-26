const refRoot = document.getElementById('root');

function LoadUI(pageName) {
  let contents = '';
  switch (pageName) {
    case 'home':
      contents = home();
      break;
    case 'about':
      contents = about();
      break;
    case 'contact':
      contents = contact();
      break;
    default:
      contents = defaultPage();
      break;
  }

  refRoot.innerHTML = contents;
}

LoadUI('home');
