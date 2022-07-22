import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class PaytechService {
  constructor(private http: HttpService, private config: ConfigService) {}

  // data shape  :
  //   {
  //     item_name:"Iphone 7",
  //     item_price:"560000",
  //     currency:"XOF",
  //     ref_command:"HBZZYZVUZZZV",
  //     command_name:"Paiement Iphone 7 Gold via PayTech",
  //     env:"test",
  //     ipn_url:"https://domaine.com/ipn",
  //     success_url:"https://domaine.com/success",
  //     cancel_url:"https://domaine.com/cancel",
  //     custom_field:JSON.stringify({
  //        custom_fiel1:"value_1",
  //        custom_fiel2:"value_2",
  //     })
  //     };

  authenticate(data) {
    return this.http
      .post('https://paytech.sn/api/payment/request-payment', data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          API_KEY: this.config.get('PAYTECH_API_KEY'),
          API_SECRET: this.config.get('PAYTECH_API_SECRET'),
        },
      })
      .pipe(map((res) => res.data));
  }
}
