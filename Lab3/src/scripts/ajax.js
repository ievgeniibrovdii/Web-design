var submitButton = document.querySelector('#submitButton');
var clearButton = document.querySelector('#clearButton');
var text = document.querySelector('.text');

function updateFile(obj) {
      console.log(obj);
}

submitButton.addEventListener('click', function() {
    var textData = textingEditor.document.body.innerHTML;

    var elem = {
      data: textData,
    };

    fetch('send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(elem),
    })
    .catch(error => console.log(error));
    var textData = textingEditor.document.body.innerHTML;
});

clearButton.addEventListener('click', function() {
    var elem = {
      data: "",
    };

    fetch('send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(elem),
    })
    .catch(error => console.log(error));

    textingEditor.document.body.innerHTML = '';
});

document.addEventListener("DOMContentLoaded", function(event) {
    fetch('text.json')
    .then(data => {
      return data.json();
    })
    .then(data => {
        textingEditor.document.body.innerHTML = data.data;
    })
    .catch(error => console.log(error));
});
