import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastReporteComponent } from './podcast-reporte.component';

describe('PodcastReporteComponent', () => {
  let component: PodcastReporteComponent;
  let fixture: ComponentFixture<PodcastReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
