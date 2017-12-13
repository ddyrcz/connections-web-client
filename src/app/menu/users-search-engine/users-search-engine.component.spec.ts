import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchEngineComponent } from './users-search-engine.component';

describe('UsersSearchEngineComponent', () => {
  let component: UsersSearchEngineComponent;
  let fixture: ComponentFixture<UsersSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
