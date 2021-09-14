/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Module_3Component } from './module_3.component';

describe('Module_3Component', () => {
  let component: Module_3Component;
  let fixture: ComponentFixture<Module_3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module_3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module_3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
