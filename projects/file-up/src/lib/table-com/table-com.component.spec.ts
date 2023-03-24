import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComComponent } from './table-com.component';

describe('TableComComponent', () => {
  let component: TableComComponent;
  let fixture: ComponentFixture<TableComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
