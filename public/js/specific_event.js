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
                    <div id='same-day-event'>
                        Same day event
                    </div>
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
                $('.same-day-event-list').append(template)
            })
        }
    })
})

$(document).ready(function() {
    var currentURL_string = window.location.href;
    var currentURL = new URL(currentURL_string);
    var id = currentURL.searchParams.get('id');
    $.ajax({
        url: 'https://mbmfestival.herokuapp.com/artisticEvents/' + id + '/linkedSeminars',
        method: 'GET',
        success: function(linkedSeminars) {
            linkedSeminars.forEach(linkedSeminar => {
                var template = 
                `
                <div class="col-sm">
                    <div id='linked-seminar-box' class="text-center">
                        Linked seminar
                    </div>
                    <div class="row m-3">
                        <div class="col-sm">
                            <div class="card text-center" style="width: 18rem;">
                                <img class="card-img-top" src='images/${linkedSeminar.id}.jpg' alt='${linkedSeminar.name}' style='height: 189.4'>
                                <div class="card-body">
                                    <h5 class="card-title">${linkedSeminar.name}</h5>
                                    <p class="card-text">${linkedSeminar.description.substring(0, 50)}...</p>
                                    <a href='http://mbmfestival.herokuapp.com/one_seminar.html?id=${linkedSeminar.id}' class="btn btn-primary">Go to the seminar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                $('.linked-seminar').append(template);
            })
        }
    })
})

$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        url: 'https://mbmfestival.herokuapp.com/artisticEvents/' + id + '/linkedPerformers',
        method: 'GET',
        success: function(allPerformers) {
            allPerformers.forEach(performer => {
                var template = 
                `
                <li><a href="one_performer.html?id=${performer.id}">${performer.name}</a></li>
                `
                $('#performer-list').append(template)
            })
        }
    })
})

function event_reservation() {
    var currentURL_string = window.location.href;
    var currentURL = new URL(currentURL_string);
    var idEvent = currentURL.searchParams.get('id');
    $.ajax({
        method: 'POST',
        url: '/user/registerEvent/' + idEvent,
        success: function() {
            console.log('Registrato all\'evento');
        }
    })
}