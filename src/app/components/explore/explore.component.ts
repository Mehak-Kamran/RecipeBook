import { Component,OnInit,inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReciepeService } from '../../services/reciepe.service';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit {
//4
reciepe:any[]=[]
//5
service=inject(ReciepeService)



//3
  ngOnInit(): void {

    this.service.getreciepe().subscribe((res:any)=>{
      console.log(res)
      this.reciepe=res.recipes
    })
    
  }
}
