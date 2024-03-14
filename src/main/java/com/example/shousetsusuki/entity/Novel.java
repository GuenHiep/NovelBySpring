package com.example.shousetsusuki.entity;

import jakarta.persistence.*;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "NovelService")
public class Novel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title",nullable = false,unique = true)
    private String title;

    @Column(name = "author",nullable = false)
    private String author;

    @Column(name = "genre",nullable = false)
    private String genre;

    @Column(name = "chapters",nullable = false)
    private int chapters;

    @Column(name = "views")
    private int views;

    @Column(name = "likes")
    private int likes;

    @Column(name = "status",nullable = false)
    private String status;

}
