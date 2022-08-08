import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommParDateComponent } from './liste-comm-par-date.component';

describe('ListeCommParDateComponent', () => {
  let component: ListeCommParDateComponent;
  let fixture: ComponentFixture<ListeCommParDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommParDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCommParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
