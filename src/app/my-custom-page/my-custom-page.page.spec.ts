import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCustomPagePage } from './my-custom-page.page';

describe('MyCustomPagePage', () => {
  let component: MyCustomPagePage;
  let fixture: ComponentFixture<MyCustomPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCustomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
