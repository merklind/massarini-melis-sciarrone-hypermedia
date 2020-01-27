$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents'
    })
    .then(function(data) {
        data.reverse().forEach((event) => {
            var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='col-sm-3'>
                        <img src='images/${event.id}.jpg' alt='${event.name}' class='image-event img-fluid'>
                    </div>
                    <div class='col-sm-9 abstract-information'>
                        Name: <span class='name-event'>${event.name}</span>
                        <br>
                        Date: <span class='date-event'>${event.date}</span>
                        <br>
                        Genre: <span class='genre-event'>${event.genre}</span>
                        <br>
                        Description: <span class='description-event'>${event.description.substring(0, 200)}...</span>
                        <br>
                        <a class="btn btn-primary" href="one_event.html?id=${event.id}" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').append(template)
        })
    })
    
})
