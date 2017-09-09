var fileChooser = document.createElement("input");
fileChooser.type = 'file';

fileChooser.addEventListener('change', function (evt) {
  var f = evt.target.files[0];
  if(f) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      /* Handle your document contents here */
      document.location.href = url_array; // My extension's logic
    }
    reader.readAsText(f);
  }
});

document.body.appendChild(fileChooser);
fileChooser.click();