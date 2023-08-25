import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogoutComponent } from "./logout-button.component";

describe('ButtonLogoutComponent', () => {
  let component: ButtonLogoutComponent;
  let fixture: ComponentFixture<ButtonLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLogoutComponent]
    });
    fixture = TestBed.createComponent(ButtonLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
