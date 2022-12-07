import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfordemoComponent } from './ngfordemo.component';

describe('NgfordemoComponent', () => {
  let component: NgfordemoComponent;
  let fixture: ComponentFixture<NgfordemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfordemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgfordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
