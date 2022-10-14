// const checkbox = document.querySelector('#toggle');
// const html = document.querySelector('html');

// checkbox.addEventListener('click', function () {
//   checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
// })


// darkmode
document.querySelector('#toggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark');
});