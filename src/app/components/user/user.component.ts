import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username='youngTech';
  favoriteFramework='';

  showFavoriteFramework(){
    alert(this.favoriteFramework);
  }
}
