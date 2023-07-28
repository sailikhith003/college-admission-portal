package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Applicant;
import com.example.demo.Repository.ApplicantRepository;

@Service
public class ApplicantService {
    @Autowired
    private ApplicantRepository applicantRepository;

    public Applicant post(Applicant applicant) {
        return applicantRepository.save(applicant);
    }
    public Optional<Applicant> findById(long id)
    {
    	return applicantRepository.findById(id);
    }
}