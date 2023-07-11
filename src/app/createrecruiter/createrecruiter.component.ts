import { Component } from '@angular/core';
import { Recruiter } from '../model/recruiter';
import { RecruiterserviceService } from '../recruiterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrecruiter',
  templateUrl: './createrecruiter.component.html',
  styleUrls: ['./createrecruiter.component.css']
})
export class CreaterecruiterComponent {
  submitted = false;
  recruiter = new Recruiter();

  constructor(private service: RecruiterserviceService,
    private router: Router) { }

  onSubmit() {
    this.submitted = true;

    this.save();
  }

  save() {
    this.service.createRecruiter(this.recruiter).subscribe();
    // this.service.createPlayer(this.player).subscribe((data)=>{
    //   console.log(data);
    //   this.player=new Player();
    //   this.gotoList();
    // })
  }
  gotoList() {
    this.router.navigate(['list']);
  }
}




