$(function() { // document ready

  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaWeek,agendaDay'
    },
    defaultView: 'agendaWeek',
    defaultTimedEventDuration: '01:00',
    allDaySlot: false,
    scrollTime: '12:00',
    businessHours: {
      start: '12:00',
      end: '00:00',
    },
     
    eventOverlap: function(stillEvent, movingEvent) {
      return true;
    },
    events: [{
      title: 'Weekly Reminder',
      start: '2015-05-22T15:00+08:00'
    }, {
      title: 'Operations',
      start: '2015-05-22T12:00+08:00'
    }],
    editable: true,
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      var duration = (end - start) /1000;
      if(duration == 1800) {
      	end = start.add(30, 'mins');
        return calendar.fullCalendar('select', start, end);
      }
      var title = prompt('Event Title:');
      var eventData;
      if (title && title.trim()) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        calendar.fullCalendar('renderEvent', eventData);
      }
      calendar.fullCalendar('unselect');
    },
    eventRender: function(event, element) {
      var start = moment(event.start).fromNow();
      element.attr('title', start);
    },
    loading: function() {
      
    }
  });

});