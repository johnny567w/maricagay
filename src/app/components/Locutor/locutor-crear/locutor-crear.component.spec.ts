import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutorCrearComponent } from './locutor-crear.component';

describe('LocutorCrearComponent', () => {
  let component: LocutorCrearComponent;
  let fixture: ComponentFixture<LocutorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocutorCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocutorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
