import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer/customer';
import { Customerservice } from '../customer/customerservice';
import { error } from 'console';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  public isSubmit: boolean = false;

  constructor(private service: Customerservice) { }

  public regform: any = new FormGroup({
    empName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z0-9]{3,}$/)]),
    doj: new FormControl('', [Validators.required]),
    phno: new FormControl('', [Validators.required, Validators.minLength(10)]),
    sal: new FormControl(''),
    city: new FormControl('', [Validators.required])
  });
  get con() {
    return this.regform.controls;
  }

  reg() {
    this.isSubmit = true;
    console.log(this.regform.value);

    if (this.regform.valid) {
      
      const customerData: Customer = this.regform.value;
      this.service.saveCustomer(customerData).subscribe(res => {
        alert(res);
        this.regform.reset();
      }, error => {
        console.error('Error saving customer:', error);

      })

    }
  }
}
