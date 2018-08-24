import { Component, OnInit, Input } from '@angular/core';
import { Template } from './Template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  @Input() template: Template;

  ngOnInit() {
  }

}
