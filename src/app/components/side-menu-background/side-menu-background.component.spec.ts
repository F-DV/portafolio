import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuBackgroundComponent } from './side-menu-background.component';

describe('SideMenuBackgroundComponent', () => {
  let component: SideMenuBackgroundComponent;
  let fixture: ComponentFixture<SideMenuBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
