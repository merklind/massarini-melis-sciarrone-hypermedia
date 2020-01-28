$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents'
    })
    .then(function(data) {
        data.reverse().forEach((event) => {
            var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='col-md-3'>
                        <img src='images/${event.id}.jpg' alt='${event.name}' class='image-event img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information' style='position: relative;'>
                        Name: <span class='name-event'>${event.name}</span>
                        <br>
                        Date: <span class='date-event'>${event.date.substring(0, 10)}</span>
                        <br>
                        Genre: <span class='genre-event'>${event.genre}</span>
                        <br>
                        Description: <span class='description-event'>${event.description.substring(0, 180)}...</span>
                        <br>
                        <a id='go-to-event-button' class="btn btn-primary" href="one_event.html?id=${event.id}" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').append(template)
        })
    })
    $.ajax({
        method: 'GET',
        url: 'https://mbmfestival.herokuapp.com/seminars'
    })
    .then(function(data) {
        data.reverse().forEach((event) => {
            var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='col-md-3'>
                        <img src='images/${event.id}.jpg' alt='${event.name}' class='image-event img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information' style='position: relative;'>
                        Name: <span class='name-event'>${event.name}</span>
                        <br>
                        Date: <span class='date-event'>${event.date.substring(0, 10)}</span>
                        <br>
                        Genre: <span class='genre-event'>${event.genre}</span>
                        <br>
                        Description: <span class='description-event'>${event.description.substring(0, 180)}...</span>
                        <br>
                        <a id='go-to-event-button' class="btn btn-primary" href="one_event.html?id=${event.id}" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').append(template)
        })
    })
    
})
