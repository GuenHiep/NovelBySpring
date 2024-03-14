package com.example.shousetsusuki.service;

import com.example.shousetsusuki.entity.Novel;
import com.example.shousetsusuki.repository.NovelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class NovelService {
    @Autowired
    private NovelRepository novelRepository;

    public List<Novel> getAllNovel(){
        return novelRepository.findAll();
    }

    public Novel getNovelById(Long id){
        return novelRepository.findById(id).orElse(null);
    }

    public Novel createNovel(Novel novel){
        return novelRepository.save(novel);
    }

    public Novel updateNovel(Novel novel,Long id){
        if (novelRepository.existsById(id)) {
            novel.setId(id);
            return novelRepository.save(novel);
        }
        return null;
    }

    public boolean deleteNovel(Long id){
        if (novelRepository.existsById(id)) {
            novelRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
