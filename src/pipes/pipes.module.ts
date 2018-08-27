import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
import { UpperPipe } from './upper/upper';
import { OrderPipe } from 'ngx-order-pipe';
@NgModule({
	declarations: [FilterPipe, UpperPipe],
	imports: [],
	exports: [FilterPipe, UpperPipe]
})
export class PipesModule {}
