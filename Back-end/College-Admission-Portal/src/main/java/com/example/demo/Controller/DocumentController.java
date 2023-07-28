package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Document;
import com.example.demo.Service.DocumentService;

@RestController
@CrossOrigin(origins = "*")

public class DocumentController {
    @Autowired
    private DocumentService documentInfoService;

    @PostMapping("/upload")
    public ResponseEntity<Document> uploadDocument(@RequestBody Document documentInfo) {
        Document savedDocument = documentInfoService.saveDocumentInfo(documentInfo);
        return new ResponseEntity<>(savedDocument, HttpStatus.CREATED);
        
    }
}

