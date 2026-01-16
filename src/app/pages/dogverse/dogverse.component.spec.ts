import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogverseComponent } from './dogverse.component';

describe('DogverseComponent', () => {
  let component: DogverseComponent;
  let fixture: ComponentFixture<DogverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
