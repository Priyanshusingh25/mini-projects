import { ComponentFixture, TestBed } from '@angular/core/testing';
import { othersComponent } from './others.component';

describe('othersComponent', () => {
  let component: othersComponent;
  let fixture: ComponentFixture<othersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [othersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(othersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
