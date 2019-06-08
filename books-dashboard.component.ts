import { Component } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
    selector:'books-dashboard',
    template:`
<div>
    <h1> Books Dashboard</h1>
    <ul>
        <li *ngFor="let book of books;let i=index">
                {{book.title}}
                {{book.published}}
        </li>
    </ul>
\</div>
    `})
    export class BookDashboardComponent{
        books:Book[]=[
            {
                id:1,
                title:"node fundamentas",
                published:145625,
                instock:false,
                authors:[{
                    name:"satya",
                    age:25
                }]
            },
            {
                id:2,
                title:"angular fundamentals",
                published:12145,
                instock:true,
                authors:[{
                    name:"mani",
                    age:22
                }]
            },
            {
                id:3,
                title:"javascript fundamentas",
                published:11565,
                instock:true,
                authors:[{
                    name:"chai",
                    age:21
                }]
            }
        ]
    }


