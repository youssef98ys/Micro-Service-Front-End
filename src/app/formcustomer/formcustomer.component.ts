import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-formcustomer',
  templateUrl: './formcustomer.component.html',
  styleUrls: ['./formcustomer.component.css']
})
export class FormcustomerComponent implements OnInit {

  formErrors = {
    'id': '',
    'name': '',
    'email': ''
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
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    }
  };
  customerForm: FormGroup;
  hideForm = false;
  customer: any;
  redirect = false;
  submittedCustomer: any;
  @ViewChild('cform') customerFormDirective;
  constructor(private fb: FormBuilder,
              private service: CustomerService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.customerForm = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(25)] ],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email]  ]
    });
    this.customerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.customerForm) { return; }
    const form = this.customerForm;
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
    this.customer = this.customerForm.value;
    console.log(this.customer);
    this.service.postCustomer(this.customer).subscribe(data => { this.submittedCustomer = data;
      setTimeout(() => {
        this.submittedCustomer = null;
        this.redirect = true;
        this.customerForm.reset({
          id: '',
          name: '',
          email: ''
        });
        this.customerFormDirective.resetForm();
      }, 5000);
    });
  }

}
