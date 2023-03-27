import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishRegularVerbsPageComponent } from './english-regular-verbs-page.component';

describe('EnglishRegularVerbsPageComponent', () => {
  let component: EnglishRegularVerbsPageComponent;
  let fixture: ComponentFixture<EnglishRegularVerbsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishRegularVerbsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishRegularVerbsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
