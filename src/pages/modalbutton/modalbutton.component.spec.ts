import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbuttonComponent } from './modalbutton.component';

describe('ModalbuttonComponent', () => {
  let component: ModalbuttonComponent;
  let fixture: ComponentFixture<ModalbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
