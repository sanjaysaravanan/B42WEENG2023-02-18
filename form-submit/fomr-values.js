const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // initialization of data outside loop
  var data = {};

  Array.from(e.target.elements).forEach((element) => {

    // nodeName
    if (element.nodeName === 'INPUT') {
      if (element.type === 'radio') {
        if (element.checked) {
          data[element.name] = element.id;
        }
      } else {
        data[element.name] = element.value;
      }
    }
  });
  console.log('Data', data);
});