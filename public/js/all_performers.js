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
                        <img src='images/${performer.id}.jpg' alt='ciao' class='image-performer img-fluid'>
                    </div>
                    <div class='col-sm-9 abstract-information'>
                        Name: <span class='name-performer'>${performer.name}</span>
                        <br>
                        Bio: <span class='description-performer'>${performer.bio.substring(0, 200)}...</span>
                    </div>
                </div>`;
            $('#wrapper').prepend(template)
        })
    })
})

