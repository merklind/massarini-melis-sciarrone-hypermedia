$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: 'https://mbmfestival.herokuapp.com/seminars'
    })
    .then(function(data) {
        data.forEach((seminar) => {
            var template = `
                <div class='row one_event' id='${seminar.id}'>
                    <div class='col-md-3'>
                        <img src='images/${seminar.id}.jpg' alt='${seminar.name}' class='image-event img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information' style='position: relative;'>
                        <b><i>Name:</i></b> <span class='name-event'>${seminar.name}</span>
                        <br>
                        <b><i>Date:</i></b> <span class='date-event'>${seminar.date.substring(0, 10)}</span>
                        <br>
                        <b><i>Genre:</i></b> <span class='genre-event'>${seminar.genre}</span>
                        <br>
                        <b><i>Description:</i></b> <span class='description-event'>${seminar.description.substring(0, 180)}...</span>
                        <br>
                        <a id='go-to-event-button' class="btn btn-primary" href="one_seminar.html?id=${seminar.id}" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').append(template)
        })
    })

    $.ajax({
        url: 'http://mbmfestival.herokuapp.com/artisticEvents',
        method: 'GET'
    })
    .then(function(data) {
        data.forEach((event) => {
            var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='col-md-3'>
                        <img src='images/${event.id}.jpg' alt='${event.name}' class='image-event img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information' style='position: relative;'>
                        <b><i>Name:</b></i> <span class='name-event'>${event.name}</span>
                        <br>
                        <b><i>Date:</b></i> <span class='date-event'>${event.date.substring(0, 10)}</span>
                        <br>
                        <b><i>Genre:</b></i> <span class='genre-event'>${event.genre}</span>
                        <br>
                        <b><i>Description:</b></i> <span class='description-event'>${event.description.substring(0, 180)}...</span>
                        <br>
                        <a id='go-to-event-button' class="btn btn-primary" href="one_event.html?id=${event.id}" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').append(template)
        })
    })

})
