import { Component } from '@angular/core';
import { Recruiter } from '../model/recruiter';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { RecruiterserviceService } from '../recruiterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-list',
  templateUrl: './recruiter-list.component.html',
  styleUrls: ['./recruiter-list.component.css']
})
export class RecruiterListComponent {

  public recruiter: Observable<Recruiter[]> = of([]);

  constructor(private service: RecruiterserviceService,
    private router: Router) {

  }

  ngOnInit() {
    this.getAllRecruiter();
  }

  getAllRecruiter() {
    this.recruiter = this.service.getAllRecruiter();
  }

  recruiterDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteRecruiter(id: number) {
    return this.service.deleteRecruiter(id).subscribe((data) => {
      console.log(data);
      this.getAllRecruiter();
    })

  }

  updateDetails(id: number) {
    this.router.navigate(['update', id]);
  }

}


