import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'app-card-footer1',
  standalone: true,
})
export class CardFooterDirective1 {}

@Directive({
  selector: 'app-card-header1',
  standalone: true,
})
export class CardHeaderDirective1 {}

@Directive({
  selector: '[appCardMainContent1]',
  standalone: true,
})
export class CardContentDirective1 {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardhelper.component.html',
  styleUrls: ['./cardhelper.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @ContentChild(CardContentDirective1) carMainContent?: CardContentDirective1;
}