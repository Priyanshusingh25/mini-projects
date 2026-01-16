import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToHome(){
    this.router.navigate(['/home']).then(() =>
      scrollTo(0, 0)
    );
  }

  goToDogverse() {
    this.router.navigate(['/dogverse']).then(() =>
      scrollTo(0, 0)
    );
  }

  goToCatverse() {
    this.router.navigate(['/catverse']).then(() =>
      scrollTo(0, 0)
    );
  }

  goToOthers() {
    this.router.navigate(['/others']).then(() =>
      scrollTo(0, 0)
    );
  }
  
  goToAbout() {
    this.router.navigate(['/about']).then(() =>
      scrollTo(0, 0)
    );
  }
}
