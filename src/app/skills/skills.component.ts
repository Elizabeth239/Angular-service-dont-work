import { Component } from '@angular/core';

import {SkillsService} from './skills.service';

@Component({
  selector: 'app-skills',
  template: `<p>SKILLS:</p>
<!--<p>{{skill.skills[0]}}</p>
<p>{{skill.skills[1]}}</p>
<p>{{skill.skills[2]}}</p>-->

<table>
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </table>

`,

  styleUrls: ['./skills.component.css'],
  providers: [SkillsService]
})


export class SkillsComponent {

items: string[] = [];

   constructor(private skillsService: SkillsService){}

  ngOnInit(): {
  	this.items = this.skillsService.getData();
  }

}
