import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGLComponent } from './dgl.component';

describe('DGLComponent', () => {
  let component: DGLComponent;
  let fixture: ComponentFixture<DGLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
