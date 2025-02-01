import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryOverviewComponent } from './library-overview.component';

describe('LibraryOverviewComponent', () => {
  let component: LibraryOverviewComponent;
  let fixture: ComponentFixture<LibraryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
