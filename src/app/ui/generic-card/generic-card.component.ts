import { Component, ContentChild} from '@angular/core';
import { CardHeaderDirective } from '../../shared/directive/app-card-header';
import { CardContentDirective } from '../../shared/directive/app-card-content';
import { CardFooterDirective } from '../../shared/directive/app-card-footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [CommonModule, CardHeaderDirective, CardFooterDirective, CardContentDirective],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
@ContentChild(CardHeaderDirective) cardHeaderContent?:CardHeaderDirective;
@ContentChild(CardContentDirective) cardContent?:CardContentDirective;
@ContentChild(CardFooterDirective) cardFooterContent?:CardFooterDirective;

}
