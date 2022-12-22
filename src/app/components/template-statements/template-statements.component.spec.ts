import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStatementsComponent } from './template-statements.component';

describe('TemplateStatementsComponent', () => {
  let component: TemplateStatementsComponent;
  let fixture: ComponentFixture<TemplateStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
