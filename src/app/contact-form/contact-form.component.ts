import { Component } from '@angular/core';
import { ContactFormService } from '../Services/contact-form.service';
import { error } from 'console';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
    formData = { name: '', subject: '', phoneNo: '',email: '', message: ''};
    ContactformData: any = {};
    selectedItem: any = {};
    constructor(private contactFormService: ContactFormService) { }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getContactForms();
    }
    
    onSubmit() {
      debugger;
      this.contactFormService.AddContactForms(this.formData).subscribe({
        next: response => {
          console.log(response);
          this.getContactForms();
        },
        error: error => {
          console.error(error);
          // Handle error
        }
      });
    }
    
    // Get all contact forms
    getContactForms() {
      this.contactFormService.getContactForms().subscribe(
        (data: any) => {
          this.ContactformData = data;
          console.log(this.ContactformData);
        },
        error => {
          console.log(error);
        }
      );
    }

    // Delete contact form by id
    deleteContactForm(id: number) {
      this.contactFormService.deleteContactForm(id).subscribe({
        next: response => {
          console.log(response);
          this.ContactformData = this.ContactformData.filter((contact: { id: number; }) => contact.id !== id);
          this.getContactForms();
        },
        error: error => {
          console.error(error);
          // Handle error
        }
      });
    }
    
}
