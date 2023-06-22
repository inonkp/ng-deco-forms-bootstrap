import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideFieldWrapperComponent } from './hide-field-wrapper.component';

describe('HideFieldWrapperComponent', () => {
  let component: HideFieldWrapperComponent;
  let fixture: ComponentFixture<HideFieldWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideFieldWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
