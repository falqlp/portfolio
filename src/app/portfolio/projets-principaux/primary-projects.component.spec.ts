import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryProjectsComponent } from './primary-projects.component';

describe('ProjetsPrincipauxComponent', () => {
  let component: PrimaryProjectsComponent;
  let fixture: ComponentFixture<PrimaryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
