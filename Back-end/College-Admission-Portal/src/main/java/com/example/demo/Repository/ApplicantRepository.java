package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Applicant;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
	Optional<Applicant> findByEmail(String email);
}
