import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruiterserviceService } from '../recruiterservice.service';
import { Recruiter } from 'src/app/model/recruiter';
@Component({
  selector: 'app-updaterecruiter',
  templateUrl: './updaterecruiter.component.html',
  styleUrls: ['./updaterecruiter.component.css']
})
export class UpdaterecruiterComponent {






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

  onSubmit() {
    this.updateRecruiter();
  }
  /*
    updatePlayerr(){
      this.service.updatePlayer(this.playerId,this.player).subscribe(
        (data)=>{
          console.log(data);
          this.player= new Player();
          this.gotoList();
        }
      )
      }
*/

  updateRecruiter() {
    this.service.updateDetails(this.recruiter).subscribe((data) => {
      console.log(data);
      this.recruiter = new Recruiter();
      this.gotoList();
    })
  }
  gotoList() {
    this.router.navigate(['list']);
  }

}
