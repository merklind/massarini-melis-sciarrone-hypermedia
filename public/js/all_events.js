$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents',

    })
    .then(function(data) {
        data.reverse().forEach((event) => {
            var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='imgcol'>
                        <img src='images/${event.id}.jpg' alt='' class='image-event'>
                    </div>
                    <div class='abstract-information'>
                        Name: <span class='name-event'>${event.name}</span>
                        <br>
                        Date: <span class='date-event'>${event.date}</span>
                        <br>
                        Genre: <span class='genre-event'></span>
                        <br>
                        Description: <span class='description-event'>${event.description}</span>
                        <br>
                        <a class="btn btn-primary" href="one_event.html" role="button">Go to event</a>
                    </div>
                </div>`;
            $('#wrapper').prepend(template)
        })
    })
})


