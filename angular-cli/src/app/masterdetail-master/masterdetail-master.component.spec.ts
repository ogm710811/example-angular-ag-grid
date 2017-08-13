import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdetailMasterComponent } from './masterdetail-master.component';

describe('MasterdetailMasterComponent', () => {
  let component: MasterdetailMasterComponent;
  let fixture: ComponentFixture<MasterdetailMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdetailMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdetailMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
