import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
    appointmentId !: Number;
    appointmentDescription!:string;
    notableSymptoms!:string;
    appointmentDate!:Date;
    doctorId!:Number;
    patientId!:Number;

    constructor(appointmentDescription:string, notableSymptoms:string, doctorId:Number ,patientId:Number){
        this.appointmentDescription = appointmentDescription
        this.notableSymptoms = notableSymptoms
        this.doctorId = doctorId
        this.patientId = patientId
    }
}
