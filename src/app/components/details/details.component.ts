import { Component,OnInit,inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { ReciepeService } from '../../services/reciepe.service';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatGridListModule,MatListModule ,CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  detail: any;
  service=inject(ReciepeService);
  route=inject(ActivatedRoute)
  detailid:number|null=null;



ngOnInit(): void {

//extract id from link
const detailId = Number(this.route.snapshot.paramMap.get('id'));

  this.service.getreciepeid(detailId).subscribe((res:any)=>{
    //console.log(res)
    this.detail=res
    console.log(this.detail)
})
  
}
}
