import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Character } from '../models/character';
import { HpapiService } from '../network/hpapi.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  // Signals
  characters = signal<Character[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  searchQuery = signal<string>('');

  searchControl = new FormControl('');

  // Computed filtered list
  filteredCharacters = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.characters();
    return this.characters().filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.house.toLowerCase().includes(query)
    );
  });

  constructor(private hpService: HpapiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(val => this.searchQuery.set(val ?? ''));
  }

  loadCharacters(): void {
    this.loading.set(true);
    this.error.set(null);
    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load characters. The API may be waking up — please try again in a moment.');
        this.loading.set(false);
      }
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }

  getHouseClass(house: string): string {
    switch (house.toLowerCase()) {
      case 'gryffindor': return 'house-gryffindor';
      case 'slytherin': return 'house-slytherin';
      case 'hufflepuff': return 'house-hufflepuff';
      case 'ravenclaw': return 'house-ravenclaw';
      default: return 'house-none';
    }
  }

  getHouseIcon(house: string): string {
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
