import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  emailAddress: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendEmail(emailAddress, content) {
    const url = '${https://us-central1-the-irresoluteduck-collection.cloudfunctions.net}/httpEmail'
    const Params = new HttpParams();
    const Headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    Params.set('to', 'johnnykiet@live.com');
    Params.set('from', 'hello@angularfirebase.com');
    Params.set('content', content);

    return this.http.post(url, Params, Headers).toPromise().then( res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  }
}
