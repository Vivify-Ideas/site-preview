import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSitePreviewLibComponent } from './angular-site-preview-lib.component';

describe('AngularSitePreviewLibComponent', () => {
  let component: AngularSitePreviewLibComponent;
  let fixture: ComponentFixture<AngularSitePreviewLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSitePreviewLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSitePreviewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
