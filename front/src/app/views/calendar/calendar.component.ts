import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import 'jqueryui';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  user = this.userService.getUserDetails();
  tasks = this.taskService.getTasks();

  constructor(private userService: UserService, private authService: AuthService, private taskService: TaskService) { }

  ngOnInit() {
    console.log("Tasks : ");console.log(this.tasks);
  
    $(document).ready(function() {

      $('#external-events .fc-event').each(function() {

          $(this).data('event', {
              title: $.trim($(this).text()), 
              stick: true 
          });

          $(this).draggable({
              zIndex: 999,
              revert: true, 
              revertDuration: 0 
          });

      });

      $('#calendar').fullCalendar({
          locale: 'fr',
          header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          },
          editable: true,
          droppable: true, 
          dragRevertDuration: 0,
          drop: function() {
             
                  $(this).remove();
              
          },
          eventDragStop: function( event, jsEvent, ui, view ) {
              
              if(isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
                  $('#calendar').fullCalendar('removeEvents', event._id);
                  var el = $( "<div class='fc-event'>" ).appendTo( '#external-events-listing' ).text( event.title );
                  el.draggable({
                    zIndex: 999,
                    revert: true, 
                    revertDuration: 0 
                  });
                  el.data('event', { title: event.title, id :event.id, stick: true });
              }
          },
          views: {
            month: {
              //titleFormat: "Y-M-d"
            }
          },
          businessHours: [
            {
              dow: [ 1, 2, 3 ], 
              start: '08:00', 
              end: '18:00' 
            },
            {
              dow: [ 4, 5 ],
              start: '10:00', 
              end: '16:00' 
            },
            {
              dow: [6,0],
              start: '14:00',
              end: "14:30"
            }
          ],
          nowIndicator: true,
          height: "parent",
          defaultView: 'agendaWeek'

      });


      var isEventOverDiv = function(x, y) {

          var external_events = $( '#external-events' );
          var offset = external_events.offset();
          offset.right = external_events.width() + offset.left;
          offset.bottom = external_events.height() + offset.top;

          if (x >= offset.left
              && y >= offset.top
              && x <= offset.right
              && y <= offset .bottom) { return true; }
          return false;

      }


  });
  }

  

}
