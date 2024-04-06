export class LoginDto {
    email: string;
    pwd: string;

    constructor(email: string, pwd: string) {
        this.email = email;
        this.pwd = pwd;
    }
}
