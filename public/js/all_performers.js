$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://mbmfestival.herokuapp.com/performers'
    })
    .then(function(data) {
        console.log(data)
        data.reverse().forEach((performer) => {
            var template = `
                <div class='row one_performer' id='${performer.id}'>
                    <div class='col-sm-3'>
                        <img src='images/${performer.id}.jpg' alt=${performer.name} class='image-performer img-fluid'>
                    </div>
                    <div class='col-sm-9 abstract-information'>
                        Name: <span class='name-performer'>${performer.name}</span>
                        <br>
                        Bio: <span class='description-performer'>${performer.bio.substring(0, 200)}...</span>
                        <br>
                        <a id='go-to-performer-button' class="btn btn-primary" href="one_performer.html?id=${performer.id}" role="button">Go to performer</a>
                    </div>
                </div>`;
            $('#wrapper').prepend(template)
        })
    })
})

