import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaisHtmlComponent } from './portais-html.component';

describe('PortaisHtmlComponent', () => {
  let component: PortaisHtmlComponent;
  let fixture: ComponentFixture<PortaisHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortaisHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaisHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
