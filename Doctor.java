package com.training.pms.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Entity
@Table(name="doctors")
public class Doctor {
	
	
	 @Id
	 private String doctorName;
	 private int doctorId;
	 private String speiciality;
	 private int phonenumber ;
	 private String AcceptedInsurance;
	// private String doctorLocation;
}
