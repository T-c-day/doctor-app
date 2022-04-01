import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
    appointmentId !: Number;
    appointmentDescription!:string;
    notableSymptoms!:string;
    appointmentDate!:Date;
    doctor!:Doctor;
    patient!:Patient;
}
