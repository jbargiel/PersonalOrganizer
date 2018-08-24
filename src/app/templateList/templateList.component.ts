import { Component, OnInit } from '@angular/core';
import { Template } from '../template/template';
import { TemplateList } from './templatelist';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-templatelist',
  templateUrl: './templatelist.component.html',
  styleUrls: ['./templateList.component.css']
})

export class TemplateListComponent implements OnInit {

  templates: Template[];
  selectedTemplate: Template;

  constructor(private templateService: TemplateService) {
  }

  ngOnInit() {
    this.setTemplates();
  }

  onSelect(template: Template): void {
    this.selectedTemplate = template;
  }

  setTemplates(): void {
    this.templateService.getTemplates()
      .subscribe(templates => this.templates = templates);
  }

}
