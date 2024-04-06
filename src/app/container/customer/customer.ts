export class Customer {
    empName: string;
    email: string;
    pwd:string;
    doj: Date;
    phno: number | null;
    sal: number;
    city: string;
    constructor(empName: string, email: string, pwd:string, doj: Date, phno: number | null, sal: number, city: string) {
        this.empName = empName;
        this.email = email;
        this.pwd=pwd;
        this.doj = doj;
        this.phno = phno;
        this.sal = sal;
        this.city = city;
    }
}
