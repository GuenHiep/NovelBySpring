package com.example.shousetsusuki.controller;

import com.example.shousetsusuki.entity.Novel;
import com.example.shousetsusuki.service.NovelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/novel")
public class NovelController {
    @Autowired
    private NovelService novelService;

    @GetMapping
    public List<Novel>getAllNovel(){
        return novelService.getAllNovel();
    }
    @GetMapping("/{id}")
    public Novel getNovelById(@PathVariable Long id){
        return novelService.getNovelById(id);
    }

    @PostMapping
    public Novel createNovel(@RequestBody Novel novel){
        return novelService.createNovel(novel);
    }

    @PutMapping("/{id}")
    public Novel updateNovel(@RequestBody Novel novel, @PathVariable Long id){
        return novelService.updateNovel(novel,id);
    }

    @DeleteMapping("/{id}")
    public void deleteNovel(@PathVariable Long id){
        novelService.deleteNovel(id);
    }
}
