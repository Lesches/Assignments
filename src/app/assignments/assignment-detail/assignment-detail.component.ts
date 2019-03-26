import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

 passedAssignment: Assignment;
  constructor(private assignmentService: AssignmentsService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {

this.getAssignment();
  }

  getAssignment(){
const id = +this.route.snapshot.params.id
this.assignmentService.getAssignment(id).subscribe(assignment => this.passedAssignment = assignment);
  }

  onAssignmentSubmitted(){
    this.passedAssignment.submitted = true;

    this.assignmentService.updateAssignments(this.passedAssignment).subscribe(res => console.log(res));
  }

  onDelete(){
this.assignmentService.deleteAssignment(this.passedAssignment).subscribe(res => console.log(res));
// this.passedAssignment = null;

this.router.navigate(['/home']);
  }

  onClickEdit(){
    this.router.navigate(['/assignment', this.passedAssignment.id, 'edit'], {queryParams: {name: this.passedAssignment.name}, fragment: 'editing'});
  }

  isAdmin(): boolean {
    return this.authService.loggedIn;
  }
}
