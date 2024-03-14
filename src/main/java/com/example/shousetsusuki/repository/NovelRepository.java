package com.example.shousetsusuki.repository;

import com.example.shousetsusuki.entity.Novel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NovelRepository extends JpaRepository<Novel,Long> {
}
