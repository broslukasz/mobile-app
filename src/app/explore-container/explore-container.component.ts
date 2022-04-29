import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

interface Food {
  food: string;
  description: string;
}

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  description$ = this.store.collection<Food>('food')
                     .doc('28-04-2022')
                     .valueChanges()
                     .pipe(
                       map(value => value.description)
                     );

  constructor(private store: AngularFirestore) {
  }

  ngOnInit() {
  }

  upload(food: string, description: string): void {
    this.store.collection('food').doc('28-04-2022').set({
      food,
      description
    });
  }
}
