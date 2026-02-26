function home() {
  return `<h1>Home Page Contents</h1>`;
}
function about() {
  return `<h1>About Page Contents</h1>`;
}
function contact() {
  return `<h1>Contact Page Contents</h1>`;
}
function defaultPage() {
  return `<h1>404 Page Not Found</h1>`;
}
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
