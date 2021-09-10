/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Module_2Component } from './module_2.component';

describe('Module_2Component', () => {
  let component: Module_2Component;
  let fixture: ComponentFixture<Module_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
