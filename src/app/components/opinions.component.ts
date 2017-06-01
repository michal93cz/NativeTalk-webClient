import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Opinion } from '../models/opinion';
import { UserService } from '../services/user.service';

@Component({
  selector: 'opinions',
  template: `
    <h3>Top Opinions</h3>
    <div>
      <a *ngFor="let opinion of opinions" class="col-1-4">
        <div>
          <h4>{{opinion.description}}</h4>
          <h2>{{opinion.value}}</h2>
        </div>
      </a>
    </div>
  `
})

export class OpinionsComponent implements OnInit {
  opinions: Opinion[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getOpinions(params['id']))
      .subscribe(opinions => this.opinions = opinions);
  }
}
