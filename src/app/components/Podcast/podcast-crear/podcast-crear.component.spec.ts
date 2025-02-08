import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCrearComponent } from './podcast-crear.component';

describe('PodcastCrearComponent', () => {
  let component: PodcastCrearComponent;
  let fixture: ComponentFixture<PodcastCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
