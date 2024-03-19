package com.example.shousetsusuki.service;


import com.example.shousetsusuki.entity.Chapter;
import com.example.shousetsusuki.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {
    @Autowired
    ChapterRepository chaptersRepository;

    public List<Chapter> getAllChapter(){
        return chaptersRepository.findAll();
    }

    public Chapter getChapterById(Long id){
        return chaptersRepository.findById(id).orElse(null);
    }

    public Chapter createChapter(Chapter chapter){
        return chaptersRepository.save(chapter);
    }

    public Chapter updateChapter(Chapter chapter, Long id){
        if (chaptersRepository.existsById(id)){
            chapter.setId(id);
            chaptersRepository.save(chapter);
        }
        return null;
    }

    public boolean deleteChapter(Long id){
        if (chaptersRepository.existsById(id)){
            chaptersRepository.deleteById(id);
        }
        return false;
    }
}
