import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilsService} from '../../../core/services/utils.service';
import {Subscription} from 'rxjs';
import {Post} from "../../../core/interfaces/post.interface";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  
  chartSubscription: Subscription;
  
  single: number[] = [];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Hours';
  showYAxisLabel = true;
  yAxisLabel = 'Likes';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA, #E71D36, #8EC0E4', '#feee7d', '#7f9eb2', '#005f6b', '#8c9184', '#87314e']
  };
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.chartHasChanged.subscribe(
      posts => {
        debugger
        this.single = this.utilsService.setChart(posts);
        // SORT BY HOUR
        this.single.sort((a, b) => {
          if (a['name'] > b['name']) {
            return 1;
          } else if (a['name'] < b['name']) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    );
  }
  ngOnDestroy() {
    this.chartSubscription.unsubscribe();
  }

}
