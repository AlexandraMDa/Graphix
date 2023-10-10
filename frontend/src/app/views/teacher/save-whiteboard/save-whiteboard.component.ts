import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawingService } from 'src/app/shared/services/drawing.service';
import { GraphService } from 'src/app/shared/services/graph.service';
import { fabric } from 'fabric';
import { WhiteboardService } from '../services/whiteboard.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-whiteboard',
  templateUrl: './save-whiteboard.component.html',
  styleUrls: ['./save-whiteboard.component.scss']
})
export class SaveWhiteboardComponent implements OnInit {

  public loading: boolean = true;
  private subscription: Subscription = new Subscription();
  private currentWhiteboard: string = '';
  public whiteboardForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required)
  });

  constructor(private graphService: GraphService,
    private drawingService: DrawingService,
    private whiteboardService: WhiteboardService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription.add(
      this.graphService.currentGraphObj.subscribe((res) => {
        this.currentWhiteboard = res;
        console.log("bai wtf ", res)
      })
    )
  }

  public saveWhiteboard(): void {
    if(this.whiteboardForm.valid) {
      this.whiteboardService.postWhiteboard(this.currentWhiteboard, this.whiteboardForm.value.name).subscribe(() => {});
    }
  }

}
