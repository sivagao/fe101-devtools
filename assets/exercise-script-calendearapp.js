window.Calendar = {
    getEvents: function() {
        var events;
        events = JSON.parse(localStorage.getItem('events'))
        if (!events) {
            return Calendar.events();
        }
        return events;
    },

    saveEvent: function(event) {
        var events;
        events = JSON.parse(localStorage.getItem('events'));
        if (!events || (events.length > 5)) {
            events = Calendar.events();
        }
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
    },

    events: function() {
        return [{
            "name": "Run 5K",
            "date": "2014-03-06T18:05:06.636Z"
        }, {
            "name": "Build Robot",
            "date": "2014-03-06T18:05:06.636Z"
        }, {
            "name": "Take Over the World",
            "date": "2014-03-06T18:05:06.636Z"
        }];
    },


    displayEvents: function() {
        var daysEvents = Calendar.getEvents();
        $events = $('.wdj-exercise-script .events');
        $events.html('');
        for (var i = 0; i < daysEvents.length; i++) {
            var event = daysEvents[i];
            $('.wdj-exercise-script .events').append('<li class="event">' + event.name + '</li>')
        }
    },

    displayCreate: function() {
        $('.wdj-exercise-script .new').hide();
        $('.wdj-exercise-script .create').show();
        $('.wdj-exercise-script .create input[type="text"]').focus();
    },

    createEvent: function() {
        var name = $('.wdj-exercise-script .create input[type="text"]').val();
        if (name == "") {
            $('.wdj-exercise-script .create input[type="text"]').addClass('required');
        } else {
            Calendar.saveEvent({
                name: name,
                date: new Date()
            });
            Calendar.displayEvents();
            $('.wdj-exercise-script .create input[type="text"]').removeClass('required').val('');
        }
    },

    countEvents: function() {
        return this.events().length;
    },

    setup: function() {
        $('.wdj-exercise-script .create').hide();
        $('.wdj-exercise-script .create').submit(function(e) {
            e.preventDefault();
            Calendar.createEvent();
        });
        $('.wdj-exercise-script .new').click(function(e) {
            e.preventDefault();
            Calendar.displayCreate();
        });

        Calendar.displayEvents();
    }
}

$(window).load(Calendar.setup);


Calendar.createEvent = function() {
    var field = $('.createForm input[type="text"]')[0];
    var name = field.value;
    if (name == "") {
        $(field).addClass('required');
    } else {
        Calendar.saveEvent({
            name: name,
            date: new Date(),
        });
        Calendar.displayEvents();
        $(field).removeClass('required').val('');
        localStorage.setItem('javascript', 1);
    }
};