$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        method:'GET',
        url: 'https://mbmfestival.herokuapp.com/performers/' + id,
        success: function(data) {
            document.title = data.name;
            document.getElementById('performer-single-image').setAttribute('src', '../images/' + data.id + '.jpg');
            document.getElementById('performer-single-image').setAttribute('alt', data.name);
            document.getElementById('performer-single-description').innerHTML += ' ' + data.bio;
        }
    })
})

$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        method: 'GET',
        url: 'https://mbmfestival.herokuapp.com/performers/' + id + '/linkedEvents',
        success: function(data) {
            data.forEach(element => {
                var template = 
                    `
                        <div class="col-sm">
                            <p>
                                <b>Related Event</b>
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
                $('.event-performer').append(template);
            })
        }
    })
})