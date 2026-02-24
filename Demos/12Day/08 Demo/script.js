function about()
{
  // console.log(ab)
  return `
      <h2>About our company</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium odio quidem assumenda odit dolorum, dolores id cupiditate aut sed, facere maiores perspiciatis? Excepturi ipsa architecto, quos placeat aspernatur tempora harum!</p>
  `
}
function getEmpData()
{
  return `
    <table class="table table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rob</td>
            <td>Jr. Developer</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sam</td>
            <td>Sr. Developer</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Peter</td>
            <td>Manager</td>
          </tr>
        </tbody>
      </table>
  `
}
function defaultpage()
{
  return `<h3>404: Page Not Found</h3>`
}

const refMainElement = document.getElementById('m1')

function LoadUI(page)
{
  switch (page) {
      case 'about':
        refMainElement.innerHTML = about()
        break;
      case 'empdata':
        refMainElement.innerHTML = getEmpData()
        break;  
      default:
        refMainElement.innerHTML = defaultpage()
        break;
  }
}

