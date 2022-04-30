export class User {

    firstName!: string;
    lastName!: string;
    email!: string
    birthDate!: number;
    street!: string;
    zipCode!: number;
    city!: number;


    /**
     * creates JSON of user. 
    * @param { json }  
    */
    constructor(obj?: any) { // Das "?" Zeichen am obj bedeutet, dass wir das "obj" optional geben können. Somit können wir einen anderen User erstellen ( new User({}) muss nicht in Parameter ), ohne dieses obj zu benutzen. 
        this.firstName = obj ? obj.firstName : ''; // Wenn obj existiert dann "obj.firstName", ansonsten leerer string. (else if Abfrage in Kurzform) 
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    toJson() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthDate: this.birthDate,
        street: this.street,
        zipCode: this.zipCode,
        city: this.city
    }
}

}