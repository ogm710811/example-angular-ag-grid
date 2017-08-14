import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodEditorComponent } from './mood-editor.component';

describe('MoodEditorComponent', () => {
  let component: MoodEditorComponent;
  let fixture: ComponentFixture<MoodEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
