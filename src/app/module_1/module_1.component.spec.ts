/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Module_1Component } from './module_1.component';

describe('Module_1Component', () => {
  let component: Module_1Component;
  let fixture: ComponentFixture<Module_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
