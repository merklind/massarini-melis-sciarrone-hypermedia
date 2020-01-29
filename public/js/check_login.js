$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'user/me',
        contentType: 'application/json',
        statusCode: {
            200: function(data) {
                console.log("Autorizzato")
                $('#login-navbar').hide();
                $('#signup-navbar').hide();
                var template =
                `
                <li id='myreservation-navbar' class='nav-item'>
                    <a class='nav-link' href='my_reservation.html'>My reservation</a>
                </li>
                `
                $('#right-navbar').append(template);
            },
            401: function(){
                console.log("Non autorizzato");
                $('#bookNowButton').hide();
            }
        }
    })
})