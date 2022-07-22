import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class PaytechService {
    private http;
    private config;
    constructor(http: HttpService, config: ConfigService);
    authenticate(data: any): import("rxjs").Observable<any>;
}
