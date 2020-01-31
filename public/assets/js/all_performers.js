$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/performers'
    })
    .then(function(data) {
        data.reverse().forEach((performer) => {
            var template = `
                <div class='row one_performer' id='${performer.id}'>
                    <div class='col-md-3 my-4'>
                        <img src='../assets/img/${performer.id}.jpg' alt=${performer.name} class='image-performer img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information'>
                        <b>Name</b>: <span class='name-performer'>${performer.name}</span>
                        <br>
                        <b>Bio</b>: <span class='description-performer'>${performer.bio.substring(0, 200)}...</span>
                        <br>
                        <a id='go-to-performer-button' class="btn btn-primary" href="one_performer.html?id=${performer.id}" role="button">Go to performer</a>
                    </div>
                </div>`;
            $('#wrapper').prepend(template)
        })
    })
})

