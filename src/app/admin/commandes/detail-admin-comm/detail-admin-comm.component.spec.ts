import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdminCommComponent } from './detail-admin-comm.component';

describe('DetailAdminCommComponent', () => {
  let component: DetailAdminCommComponent;
  let fixture: ComponentFixture<DetailAdminCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAdminCommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAdminCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
