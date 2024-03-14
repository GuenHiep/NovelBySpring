package com.example.shousetsusuki.repository;

import com.example.shousetsusuki.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre,Long> {
}
