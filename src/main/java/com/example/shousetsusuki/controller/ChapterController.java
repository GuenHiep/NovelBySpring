package com.example.shousetsusuki.controller;

import com.example.shousetsusuki.entity.Chapter;
import com.example.shousetsusuki.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chapter")
public class ChapterController {
    @Autowired
    ChapterService chapterService;

    @GetMapping
    public List<Chapter> getAllChapter(){
        return chapterService.getAllChapter();
    }

    @GetMapping("/{id}")
    public Chapter getChapterById(@PathVariable Long id){
        return chapterService.getChapterById(id);
    }

    @PostMapping
    public Chapter createChapter(@RequestBody Chapter chapter){

        return chapterService.createChapter(chapter);
    }

    @PutMapping("/{id}")
    public Chapter updateChapter(@RequestBody Chapter chapter, @PathVariable Long id){
        return chapterService.updateChapter(chapter,id);
    }


    @DeleteMapping("/{id}")
    public void deleteChapter(@PathVariable Long id){
        chapterService.deleteChapter(id);
    }
}
