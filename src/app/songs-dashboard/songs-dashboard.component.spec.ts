import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsDashboardComponent } from './songs-dashboard.component';

describe('SongsDashboardComponent', () => {
  let component: SongsDashboardComponent;
  let fixture: ComponentFixture<SongsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
