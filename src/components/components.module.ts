import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table/data-table';
import { PerfilComponent } from './perfil/perfil';
@NgModule({
	declarations: [DataTableComponent,
    PerfilComponent],
	imports: [],
	exports: [DataTableComponent,
    PerfilComponent]
})
export class ComponentsModule {}
