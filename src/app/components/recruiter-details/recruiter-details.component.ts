import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recruiter } from 'src/app/model/recruiter';
import { RecruiterserviceService } from 'src/app/recruiterservice.service';

@Component({
  selector: 'app-recruiter-details',
  templateUrl: './recruiter-details.component.html',
  styleUrls: ['./recruiter-details.component.css']
})
export class RecruiterDetailsComponent {
  id: number = 0;
  recruiter: Recruiter = new Recruiter();

  constructor(private route: ActivatedRoute, private router: Router,
    private service: RecruiterserviceService) { }

  ngOnInit() {
    this.recruiter = new Recruiter();

    this.id = this.route.snapshot.params['id'];


    this.service.getOneRecruiter(this.id).subscribe((data) => {
      console.log(data);
      this.recruiter = data;
    })


  }

  list() {
    this.router.navigate(['list']);
  }
}

