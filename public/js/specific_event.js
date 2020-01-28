$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        method:'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents/' + id,
        success: function(data) {
            document.title = data.name;
            var date = data.date;
            let d = new Date(Date.parse(date));
            document.getElementById('event-single-image').setAttribute('src', '../images/' + data.id + '.jpg');
            document.getElementById('event-single-image').setAttribute('alt', data.name);
            document.getElementById('event-single-date').innerHTML += ' ' + data.date.substring(0, 10);
            document.getElementById('event-single-genre').innerHTML += ' ' + data.genre;
            document.getElementById('event-single-description').innerHTML += ' ' + data.description;

        }
    })
})

$(document).ready(function() {
    var currentURL_string = window.location.href;
    var currentURL = new URL(currentURL_string);
    var id = currentURL.searchParams.get('id');
    $.ajax({
        method: 'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents/' + id + '/sameDayEvents',
        success: function(data) {
            data.forEach(element => {
                var template = 
                `
                    <div class="col-sm">
                        <p>
                            Same day event
                        </p>
                        <div class="row m-3">
                            <div class="col-sm">
                                <div class="card text-center" style="width: 18rem;">
                                    <img id='same-day-event-image' class="card-img-top" src='images/${element.id}.jpg' alt="${element.name}" style="height: 189.4">
                                    <div class="card-body">
                                        <h5 id='same-day-event-title' class="card-title">${element.name}</h5>
                                        <p id='same-day-event-description' class="card-text">${element.description.substring(0,50)}...</p>
                                        <a id='same-day-event-link' href="one_event.html?id=${element.id}" class="btn btn-primary">Go to event</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                $('.same-day-event').append(template)
            })
        }
    })
})