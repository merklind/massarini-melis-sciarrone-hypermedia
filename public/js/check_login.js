$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'user/me',
        contentType: 'application/json',
        success: function(response) {
        }
    })
})