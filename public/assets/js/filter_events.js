function filter() {
  var genre = $("input[name='genre']:checked").val();
  console.log('Selected ' + genre)
  var events = document.getElementsByClassName('one_event');
  var i = 0;
  var events_length = events.length;
  for (i = 0; i < events_length; i++) {
    var genre_event = events[i].getElementsByClassName('genre-event')[0].textContent;
    if (genre == 'All') {
      $('#'+ events[i].id).show();
    }
    else if (genre == 'What happens today') {
      what_happens_today();
    }
    else if (genre_event != genre) {
      $('#' + events[i].id).hide();
    }
    else if (genre_event == genre) {
      $('#' + events[i].id).show();
    }
  }
}

function what_happens_today() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  var all_events = document.getElementsByClassName('date-event')
  Array.from(all_events).forEach((element) => {
    if (today != element.textContent.substring(0, 10)) {
      var id_event = element.parentElement.parentElement.id
      $('#' + id_event).hide()
    }
  })
}

function filter_by_date() {

  var all_events = document.getElementsByClassName('date-event');
  Array.from(all_events).forEach((element) => {
      var id_event = element.parentElement.parentElement.id;
      $('#' + id_event).show();
  })

  selected_day = document.getElementById('selected_day').value;
  console.log(selected_day)
  var all_events = document.getElementsByClassName('date-event');
  Array.from(all_events).forEach((element) => {
    if (selected_day != element.textContent.substring(0, 10)) {
      var id_event = element.parentElement.parentElement.id;
      $('#' + id_event).hide();
    }
  })
}