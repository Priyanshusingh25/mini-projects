import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatverseComponent } from './catverse.component';

describe('CatverseComponent', () => {
  let component: CatverseComponent;
  let fixture: ComponentFixture<CatverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
