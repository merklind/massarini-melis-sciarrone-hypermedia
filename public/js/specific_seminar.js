$(document).ready(function() {
    var currentURL_string = window.location.href;
    var currentURL = new URL(currentURL_string);
    var id = currentURL.searchParams.get('id');
    $.ajax({
        method: 'GET',
        url: 'seminars/' + id + '/',
        success: function(data) {
            console.log(data)
            document.getElementById('seminar-image').setAttribute('src', '../images/' + id + '.jpg');
            document.getElementById('seminar-image').setAttribute('alt', data.name);
            document.getElementById('seminar-single-title').innerHTML += data.name;
            document.getElementById('seminar-single-date').innerHTML += data.date.substring(0, 10);
            document.getElementById('seminar-single-description').innerHTML += data.description;
            $.ajax({
                method: 'GET',
                url: 'seminars/' + id + '/linkedEvents/',
                success: function(data) {
                    data.forEach(element => {
                        var template = 
                        `
                        <div class="col-sm">
                            <div id='related-event-inner'>
                                Related event
                            </div>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <div class="card text-center" style="width: 18rem;">
                                        <img id='related-event-image' class="card-img-top" src='images/${element.id}.jpg' alt="${element.name}" style="height: 189.4">
                                        <div class="card-body">
                                            <h5 id='related-event-title' class="card-title">${element.name}</h5>
                                            <p id='related-event-description' class="card-text">${element.description.substring(0,50)}...</p>
                                            <a id='related-event-button' href="one_event.html?id=${element.id}" class="btn btn-primary">Go to event</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        $('.related-event').append(template)
                    })
                }
            })
        }
    })
    
})