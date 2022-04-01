package com.training.pms.repository;

import org.springframework.data.repository.CrudRepository;

import com.training.pms.model.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor,Integer> {

}
