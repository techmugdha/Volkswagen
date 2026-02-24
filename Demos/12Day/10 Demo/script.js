function login(){
  debugger
  const unm = document.getElementById('un').value;
  const pwd = document.getElementById('pwd').value;

  // against db
  const validunm = 'admin'
  const validpwd = '1234'

  if((unm !== '' || unm === validunm) && (pwd !== '' || pwd === validpwd))
  {
    window.location.href= "home.html"
  }
  else{
    alert('Invalid credentials!!')
  }
}