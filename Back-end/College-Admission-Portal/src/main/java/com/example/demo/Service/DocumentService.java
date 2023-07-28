package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Document;
import com.example.demo.Repository.DocumentRepository;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentInfoRepository;

    public Document saveDocumentInfo(Document documentInfo) {
        return documentInfoRepository.save(documentInfo);
    }
}
