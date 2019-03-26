import { Injectable } from '@angular/core';
import {Assignment} from '../assignments/assignment.model';
import {Observable, observable, of} from 'rxjs';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {


  assignments: Assignment[] = [{
    id: 1,
    name: 'One',
    dueDate: new Date('2019-03-24'),
    submitted: true
  },

    {
      id: 2,
      name: 'Two',
      dueDate: new Date('2020-03-24'),
      submitted: false
    }]
  constructor(private loggingService: LoggingService) {


  }

  getAssignments(): Observable<Assignment[]> {
return of (this.assignments);
  }
getAssignment(id: number): Observable<Assignment>{
    return of (this.assignments.find(x => x.id === id));
}
  addAssignments(assignment: Assignment): Observable <string> {
this.assignments.push(assignment);

this.loggingService.log(assignment.name, 'added');
return of('assignment added!');
  }

  updateAssignments(assignment: Assignment): Observable<string>{
this.assignments.forEach((assignment, i) =>{
if(assignment === assignment) {
this.assignments[i] = assignment;
}

    });

this.loggingService.log(assignment.name, 'updated');
return of ('assignment updated');
  }

  deleteAssignment(deleteAssignment: Assignment): Observable<string>{
this.assignments.forEach( (assignment, i) => {
if (assignment === deleteAssignment) {
this.assignments.splice(i, 1);
}
});

this.loggingService.log(deleteAssignment.name, 'deleted');

return of('assignment deleted.');
  }


}
