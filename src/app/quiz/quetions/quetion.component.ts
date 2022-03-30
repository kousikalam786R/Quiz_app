import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuetionServiceService } from 'src/app/quetion-service.service';

@Component({
  selector: 'app-quetions',
  templateUrl: './quetions.component.html',
  styleUrls: ['./quetions.component.css']
})
export class QuetionComponent implements OnInit {
data:Question={
  id: 1,
    question:"",
    correct_answer:"",
    options:""
};
question_no:number;
  constructor(private questionService:QuetionServiceService) {
    this.question_no=0;

   }

  ngOnInit(): void {
    
    this.showQuestion(this.question_no)

  }
  
productSelected:boolean=false;

 
onSelectedProduct(){
  this.productSelected=true;
}
getNextQuestion(){
  this.question_no++;
  this.showQuestion(this.question_no)
}

showQuestion(q_no:number){
  console.log(q_no)
  this.questionService.getQuestion(q_no).subscribe((data:any)=>{
    data=data.data;
    this.data=data[0];
console.log(data);
    
  })
}

}
