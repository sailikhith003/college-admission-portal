package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "document_info")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Double tenthPercentage;
    private Double twelvethPercentage;
    private String document1Path;
    private String document2Path;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Double getTenthPercentage() {
		return tenthPercentage;
	}
	public void setTenthPercentage(Double tenthPercentage) {
		this.tenthPercentage = tenthPercentage;
	}
	public Double getTwelvethPercentage() {
		return twelvethPercentage;
	}
	public void setTwelvethPercentage(Double twelvethPercentage) {
		this.twelvethPercentage = twelvethPercentage;
	}
	public String getDocument1Path() {
		return document1Path;
	}
	public void setDocument1Path(String document1Path) {
		this.document1Path = document1Path;
	}
	public String getDocument2Path() {
		return document2Path;
	}
	public void setDocument2Path(String document2Path) {
		this.document2Path = document2Path;
	}
    
   
}
