import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigImageViewerComponent } from './big-image-viewer.component';

describe('BigImageViewerComponent', () => {
  let component: BigImageViewerComponent;
  let fixture: ComponentFixture<BigImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigImageViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
