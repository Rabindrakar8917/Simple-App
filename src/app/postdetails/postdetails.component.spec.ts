import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './postdetails.component';

describe('PostdetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent]
    });
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
