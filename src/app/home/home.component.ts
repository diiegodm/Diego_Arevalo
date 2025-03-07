import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  timelineData = [
    { number: '1', title: 'Foundation', tag: '2020', description: 'Foundation of the Borcelle company.', 
      color: 'bg-orange-400', borderColor: 'border-orange-400', tagColor: 'text-orange-500' },

    { number: '2', title: 'First Product', tag: '2021', description: 'Launch of its first product.',
      color: 'bg-yellow-400', borderColor: 'border-yellow-400', tagColor: 'text-yellow-500' },

    { number: '3', title: 'Expansion', tag: '2022', description: 'International expansion with eight new branches.', 
      color: 'bg-red-400', borderColor: 'border-red-400', tagColor: 'text-red-500' },

    { number: '4', title: 'Market Leader', tag: '2023', description: 'Acquisition of a competing company.', 
      color: 'bg-pink-400', borderColor: 'border-pink-400', tagColor: 'text-pink-500' },

    { number: '5', title: 'New Product', tag: '2025', description: 'Development of a new innovative product.', 
      color: 'bg-blue-400', borderColor: 'border-blue-400', tagColor: 'text-blue-500' },

    { number: '6', title: 'Alliance', tag: '2026', description: 'Strategic alliance with a leading AI company.', 
      color: 'bg-indigo-400', borderColor: 'border-indigo-400', tagColor: 'text-indigo-500' }
  ];
}
