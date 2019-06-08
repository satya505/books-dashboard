import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDashboardComponent } from './containers/books-dashboard/books-dashboard.component';

@NgModule({
    declarations:[BookDashboardComponent],
    imports:[CommonModule],
    exports:[BookDashboardComponent]
}
)
export class BookDashboardModule{

}