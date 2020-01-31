$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/user/eventsReservation",
    success: function(events) {
      if (events.length == 0) {
        var template = `
                <div id='no-reservation'>
                    <p>Non sei registrato a nessun evento</p>
                </div>
                `;
        $("#wrapper").append(template);
      } else {
        events.forEach(event => {
          var template = `
                <div class='row one_event' id='${event.id}'>
                    <div class='col-md-3 my-4'>
                        <img src='../assets/img/${event.id}.jpg' alt='${
            event.name
          }' class='image-event img-fluid'>
                    </div>
                    <div class='col-md-9 abstract-information' style='position: relative;'>
                        <b><i>Name:</b></i> <span class='name-event'>${
                          event.name
                        }</span>
                        <br>
                        <b><i>Date:</b></i> <span class='date-event'>${event.date.substring(
                          0,
                          10
                        )}</span>
                        <br>
                        <b><i>Genre:</b></i> <span class='genre-event'>${
                          event.genre
                        }</span>
                        <br>
                        <b><i>Description:</b></i> <span class='description-event'>${event.description.substring(
                          0,
                          180
                        )}...</span>
                        <br>
                        <a id='go-to-event-button' class="btn btn-primary" href="one_event.html?id=${
                          event.id
                        }" role="button">Go to event</a>
                    </div>
                </div>
                `;
          $("#wrapper").append(template);
        });
      }
    }
  });
});
