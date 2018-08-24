import { Injectable } from '@angular/core';

import { Template } from './template/template';
import { TemplateList } from './templateList/templateList';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TemplateService {

  constructor(private messageService: MessageService) { }

  getTemplates(): Observable<Template[]> {
    return of(TemplateList);
  }
}
