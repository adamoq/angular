/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BigLinksComponent } from './big-links.component';

describe('BigLinksComponent', () => {
  let component: BigLinksComponent;
  let fixture: ComponentFixture<BigLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
