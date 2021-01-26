import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraComponent } from './configura.component';

describe('ConfiguraComponent', () => {
  let component: ConfiguraComponent;
  let fixture: ComponentFixture<ConfiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
