$(document).ready(function() {
    var currentURL_string = window.location.href
    var currentURL = new URL(currentURL_string)
    var id = currentURL.searchParams.get('id')
    $.ajax({
        method:'GET',
        url: 'http://mbmfestival.herokuapp.com/artisticEvents/' + id,
        success: function(data) {
            
        }
    })
})