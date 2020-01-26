$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        method:'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents/' + id,
        success: function(data) {
            var date = data.date
            let d = new Date(Date.parse(date))
            document.getElementById('event-single-image').setAttribute('src', '../images/' + data.id + '.jpg')
            document.getElementById('event-single-date').innerHTML += ' ' + d
            document.getElementById('event-single-genre').innerHTML += ' ' + data.genre
            document.getElementById('event-single-description').innerHTML += ' ' + data.description

        }
    })
})