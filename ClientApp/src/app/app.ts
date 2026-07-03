import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicinesComponent } from './medicines/medicines';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [MedicinesComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ClientApp');
}
