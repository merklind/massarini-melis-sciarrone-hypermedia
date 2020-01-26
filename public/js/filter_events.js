function filter() {
  var genre = $("input[name='genre']:checked").val();
  console.log('Selected ' + genre)
  var events = document.getElementsByClassName('one_event');
  var i = 0;
  var events_length = events.length;
  for (i = 0; i < events_length; i++) {
    var genre_event = events[i].getElementsByClassName('genre-event')[0].textContent;
    if (genre_event != genre) {
      $('#' + events[i].id).hide();
    }
    if (genre_event == genre) {
      $('#' + events[i].id).show();
    }
    if (genre == 'All') {
      $('#'+ events[i].id).show();
    }
  }
}
