import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneCommandesComponent } from './zone-commandes.component';

describe('ZoneCommandesComponent', () => {
  let component: ZoneCommandesComponent;
  let fixture: ComponentFixture<ZoneCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
