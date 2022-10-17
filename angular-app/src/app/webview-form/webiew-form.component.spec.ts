import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebiewFormComponent } from './webiew-form.component';

describe('WebiewFormComponent', () => {
  let component: WebiewFormComponent;
  let fixture: ComponentFixture<WebiewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebiewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebiewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
