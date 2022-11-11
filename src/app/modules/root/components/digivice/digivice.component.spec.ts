import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiviceComponent } from './digivice.component';

describe('DigiviceComponent', () => {
  let component: DigiviceComponent;
  let fixture: ComponentFixture<DigiviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
