console.log('demo code');

//component
const template = React.createElement('p', {
  children: 'My Sample Paragraph',
});

const divRoot = document.getElementById('root');

ReactDOM.render(template, divRoot);
