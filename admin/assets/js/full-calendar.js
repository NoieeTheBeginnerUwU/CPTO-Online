$(document).ready(function() {
    
    /* initialize the calendar
    -----------------------------------------------------------------*/
    $('#calendarFull').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-03-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $('#calendarFull').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendarFull').fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '-',
          start: '-'
        },
        {
          title: '-',
          start: '2018-03-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: '-',
          start: '2018-03-09T16:00:00'
        },
        {
          id: 999,
          title: '-',
          start: '2018-03-16T16:00:00'
        },
        {
          title: '-',
          start: '2018-03-11',
          end: '2018-03-13'
        },
        {
          title: '-',
          start: '2018-03-12T10:30:00',
          end: '2018-03-12T12:30:00'
        },
        {
          title: '-',
          start: '2018-03-12T12:00:00'
        },
        {
          title: '-',
          start: '2018-03-12T14:30:00'
        },
        {
          title: '-',
          start: '2018-03-12T17:30:00'
        },
        {
          title: '-',
          start: '2018-03-12T20:00:00'
        },
        {
          title: '-',
          start: '2018-03-13T07:00:00'
        },
        {
          title: '-',
          url: 'http://google.com/',
          start: '2018-03-28'
        }
      ]
    })

});
