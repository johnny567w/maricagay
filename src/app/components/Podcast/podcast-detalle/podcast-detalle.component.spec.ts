import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDetalleComponent } from './podcast-detalle.component';

describe('PodcastDetalleComponent', () => {
  let component: PodcastDetalleComponent;
  let fixture: ComponentFixture<PodcastDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
