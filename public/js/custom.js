// When Details btn is clicked
// POST id to /meme 

function viewMeme(id) {
  var form = document.createElement('form');
  form.method = 'POST';
  form.action = '/meme';

  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'id';
  input.value = id;

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}