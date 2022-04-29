import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    provideFirestore(() => getFirestore())
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {
}
