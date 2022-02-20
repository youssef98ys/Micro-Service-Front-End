import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
  formErrors = {
    'id': '',
    'name': '',
    'price': '',
    'quantity': ''
  };
  validationMessages = {
    'id': {
      'required':      'Id is required.',
      'maxlength':     'Id cannot be more than 25 characters long.'
    },
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'price': {
      'required':      'Price number is required.'
    },
    'quantity': {
      'required':      'Quantity is required.'
    },
  };
  productForm: FormGroup;
  hideForm = false;
  product: any;
  redirect = false;
  submittedProduct: any;
  @ViewChild('pform') productFormDirective;
  constructor(private fb: FormBuilder,
              private service: ProductService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.productForm = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(25)] ],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      price: ['', [Validators.required] ],
      quantity: ['', [Validators.required] ]
    });
    this.productForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.productForm) { return; }
    const form = this.productForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.hideForm = true;
    this.product = this.productForm.value;
    console.log(this.product);
    this.service.postProduct(this.product).subscribe(data => { this.submittedProduct = data;
        setTimeout(() => {
          this.submittedProduct = null;
          this.redirect = true;
          this.productForm.reset({
            id: '',
            name: '',
            price: '',
            quantity: ''
          });
          this.productFormDirective.resetForm();
        }, 5000);
    });
  }
}
