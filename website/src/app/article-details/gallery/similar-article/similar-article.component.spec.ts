import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArticleComponent } from './similar-article.component';

describe('SimilarArticleComponent', () => {
  let component: SimilarArticleComponent;
  let fixture: ComponentFixture<SimilarArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
