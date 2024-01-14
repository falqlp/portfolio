import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryProjectsComponent } from './secondary-projects.component';

describe('SecondaryProjectsComponent', () => {
  let component: SecondaryProjectsComponent;
  let fixture: ComponentFixture<SecondaryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
