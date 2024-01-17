import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoLogosComponent } from './techno-logos.component';

describe('TechnoLogosComponent', () => {
  let component: TechnoLogosComponent;
  let fixture: ComponentFixture<TechnoLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnoLogosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnoLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
