package com.example.shousetsusuki.controller;

import com.example.shousetsusuki.entity.Genre;
import com.example.shousetsusuki.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genre")
public class GenreController {
    @Autowired
    GenreService genreService;

    @GetMapping
    public List<Genre> getAllGenre(){
        return genreService.getAllGenre();
    }

    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable Long id){
        return genreService.getGenreById(id);
    }

    @PostMapping
    public Genre createGenre(@RequestBody Genre genre){

        return genreService.createGenre(genre);
    }

    @PutMapping("/{id}")
    public Genre updateGenre(@RequestBody Genre genre,@PathVariable Long id){
        return genreService.updateGenre(genre,id);
    }

    @DeleteMapping("/{id}")
    public void deleteGenre(@PathVariable Long id){
        genreService.deleteGenre(id);
    }
}
