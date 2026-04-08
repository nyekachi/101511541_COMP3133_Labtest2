import { Component, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../models/character';
import { HpapiService } from '../network/hpapi.service';

@Component({
  selector: 'app-characterfilter',
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent implements OnInit {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  houseControl = new FormControl('Gryffindor');

  // Signals
  characters = signal<Character[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  selectedHouse = signal<string>('Gryffindor');

  constructor(private hpService: HpapiService, private router: Router) {}

  ngOnInit(): void {
    this.loadByHouse('Gryffindor');
    this.houseControl.valueChanges.subscribe(house => {
      if (house) {
        this.selectedHouse.set(house);
        this.loadByHouse(house);
      }
    });
  }

  loadByHouse(house: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load characters for this house. Please try again.');
        this.loading.set(false);
      }
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }

  getHouseTheme(house: string): string {
    switch (house.toLowerCase()) {
      case 'gryffindor': return 'theme-gryffindor';
      case 'slytherin': return 'theme-slytherin';
      case 'hufflepuff': return 'theme-hufflepuff';
      case 'ravenclaw': return 'theme-ravenclaw';
      default: return '';
    }
  }

  getHouseEmoji(house: string): string {
    switch (house.toLowerCase()) {
      case 'gryffindor': return '🦁';
      case 'slytherin': return '🐍';
      case 'hufflepuff': return '🦡';
      case 'ravenclaw': return '🦅';
      default: return '✨';
    }
  }

  trackById(index: number, character: Character): string {
    return character.id;
  }
}
