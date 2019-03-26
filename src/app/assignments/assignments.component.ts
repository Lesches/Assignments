import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title= 'My assignments application';
  enabled = false;
  formVisible= false;
  name: string;
  dueDate: Date;
  submitted: boolean;
  selectedAssignment: Assignment;

assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {

    //  this.assignments = this.assignmentsService.getAssignments();
this.getAssignments();
  }

getAssignments(){
    this.assignmentsService.getAssignments().subscribe(assignments => this.assignments = assignments);
    }

  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddBtnClick(){
//this.formVisible = true;
this.selectedAssignment = null;
  }

 /* onNewAssignment(event: Assignment) {
    this.assignmentsService.addAssignments(event).subscribe(success => console.log(success));
    this.formVisible = false;
  }*/


}
