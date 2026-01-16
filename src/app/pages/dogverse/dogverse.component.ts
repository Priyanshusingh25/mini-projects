import { Component } from '@angular/core';
import { DogserviceService } from '../../services/dogservice.service';

@Component({
  selector: 'app-dogverse',
  imports: [],
  templateUrl: './dogverse.component.html',
  styleUrl: './dogverse.component.css'
})
export class DogverseComponent  {

  Dogs: any[] = [];

  constructor(private dogService: DogserviceService) {
    this.dogService.getDogImages().subscribe((data)=>{
      console.log(data);
      this.Dogs=data.message;
    })
  }

  // ngOnInit(){
  //   this.dogService.getDogImages().subscribe((data)=>{
  //     console.log(data);
  //     this.Dogs=data.message;
  //   });
  // }

}
