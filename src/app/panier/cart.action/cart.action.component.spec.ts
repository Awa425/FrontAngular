import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart.ActionComponent } from './cart.action.component';

describe('Cart.ActionComponent', () => {
  let component: Cart.ActionComponent;
  let fixture: ComponentFixture<Cart.ActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cart.ActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cart.ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
