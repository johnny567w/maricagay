import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutorListarComponent } from './locutor-listar.component';

describe('LocutorListarComponent', () => {
  let component: LocutorListarComponent;
  let fixture: ComponentFixture<LocutorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocutorListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocutorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
