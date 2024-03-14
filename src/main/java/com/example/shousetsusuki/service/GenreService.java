package com.example.shousetsusuki.service;

import com.example.shousetsusuki.entity.Genre;
import com.example.shousetsusuki.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService {
    @Autowired
    GenreRepository genreRepository;

    public List<Genre> getAllGenre(){
        return genreRepository.findAll();
    }

    public Genre getGenreById(Long id){
        return genreRepository.findById(id).orElse(null);
    }

    public Genre createGenre(Genre genre){
        return genreRepository.save(genre);
    }

    public Genre updateGenre(Genre genre, Long id){
        if (genreRepository.existsById(id)){
            genre.setId(id);
            genreRepository.save(genre);
        }
        return null;
    }

    public boolean deleteGenre(Long id){
        if (genreRepository.existsById(id)){
            genreRepository.deleteById(id);
        }

        return false;
    }
}
