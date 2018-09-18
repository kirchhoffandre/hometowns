import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometownComponent } from './hometown.component';

describe('HometownComponent', () => {
  let component: HometownComponent;
  let fixture: ComponentFixture<HometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
