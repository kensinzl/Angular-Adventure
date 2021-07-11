import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() productParam!: Product; // property name productParam for the value pass from the parent component
  @Output() notify = new EventEmitter(); // also property name notify

  constructor() {}

  ngOnInit() {}
}
