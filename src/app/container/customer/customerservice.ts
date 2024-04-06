import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";
import { LoginDto } from "./login-dto";
export class Customerservice {

    regUrl: string = "localhost:8080/reg";
    logUrl: string = "localhost:8080/login";

    constructor(public httpclient: HttpClient) { }

    saveCustomer(data: Customer) {
        return this.httpclient.post(this.regUrl, data, { responseType: 'text' });
    }

    validateCustomer(data: LoginDto) {
        return this.httpclient.post(this.logUrl, data, { responseType: 'text' });
    }

}
