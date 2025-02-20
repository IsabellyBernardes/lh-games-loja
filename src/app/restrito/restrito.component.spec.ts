import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestritoComponent } from './restrito.component';

describe('RestritoComponent', () => {
  let component: MenuRestritoComponent;
  let fixture: ComponentFixture<MenuRestritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRestritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
