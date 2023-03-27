import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishIrregularVerbsPageComponent } from './english-irregular-verbs-page.component';

describe('EnglishIrregularVerbsPageComponent', () => {
  let component: EnglishIrregularVerbsPageComponent;
  let fixture: ComponentFixture<EnglishIrregularVerbsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishIrregularVerbsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishIrregularVerbsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
