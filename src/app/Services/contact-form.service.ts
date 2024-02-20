import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private apiUrl = 'https://localhost:44362/api/ContactForm'; // API URL
  constructor(private http: HttpClient) { }

  //Post all contact forms
  AddContactForms(formData:any): Observable<any> {
    debugger;
    return this.http.post(this.apiUrl + '/AddContactForm',formData);
  }

  // Get contact form by id
  getContactForms(): Observable<any> {
    debugger;
    return this.http.get(this.apiUrl + '/GetContactForms');
  }

  // Delete contact form by id
  deleteContactForm(id: number): Observable<any> {
    debugger;
    return this.http.delete(this.apiUrl + '/DeleteContactForm/' + id);
  }

  // Update contact form by id
  updateContactForm(id: number, formData: any): Observable<any> {
    debugger;
    return this.http.put(this.apiUrl + '/UpdateContactForm/' + id, formData);
  }
}
