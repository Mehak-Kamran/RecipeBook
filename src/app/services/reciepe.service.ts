import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
//1 step
  http =inject(HttpClient)
  //2 step we have to define api fetching function
  //we have to define type of function
  getreciepe():Observable <any>{
    return this.http.get('https://dummyjson.com/recipes')
  }

  getreciepeid(id:number):Observable <any>{
    return this.http.get(`https://dummyjson.com/recipes/${id}`)
  }
}
