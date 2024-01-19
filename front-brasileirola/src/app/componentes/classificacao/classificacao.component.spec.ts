import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoComponent } from './classificacao.component';

describe('ClassificacaoComponent', () => {
  let component: ClassificacaoComponent;
  let fixture: ComponentFixture<ClassificacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificacaoComponent]
    });
    fixture = TestBed.createComponent(ClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
