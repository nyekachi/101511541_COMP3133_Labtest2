import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character';
import { HpapiService } from '../network/hpapi.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  // Signals
  character = signal<Character | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hpService: HpapiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCharacter(id);
    } else {
      this.error.set('No character ID provided.');
    }
  }

  loadCharacter(id: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.hpService.getCharacterById(id).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.character.set(data[0]);
        } else {
          this.error.set('Character not found.');
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load character details. Please try again.');
        this.loading.set(false);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getHouseClass(house: string): string {
    switch (house?.toLowerCase()) {
      case 'gryffindor': return 'theme-gryffindor';
      case 'slytherin': return 'theme-slytherin';
      case 'hufflepuff': return 'theme-hufflepuff';
      case 'ravenclaw': return 'theme-ravenclaw';
      default: return 'theme-none';
    }
  }

  getHouseEmoji(house: string): string {
    switch (house?.toLowerCase()) {
      case 'gryffindor': return '🦁';
      case 'slytherin': return '🐍';
      case 'hufflepuff': return '🦡';
      case 'ravenclaw': return '🦅';
      default: return '✨';
    }
  }
}
