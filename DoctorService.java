package com.training.pms.service;

import java.util.ArrayList;
import java.util.List;

import com.training.pms.model.Doctor;

public interface DoctorService {
	
	public String getDoctorInfo(Doctor obj);
	
	public String getDoctorSchedule(Doctor obj);
	
	public String  addPatient(Doctor obj);
	
	
	
	public ArrayList<Doctor> getDoctorInfo();

	public String addDoctor(Doctor obj);

	public String updateDoctor(Doctor obj);

	public String deleteDoctor(Doctor obj);

	public Doctor getDoctorById(int id);

	public List<Doctor> getAllDoctors();

	public List<Doctor> getDoctoryBySpecialty(String spec);
	
	
	
	
	
	

}
