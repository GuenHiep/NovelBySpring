package com.example.shousetsusuki.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "novel")
public class Novel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @NonNull
    @Column(name = "title", unique = true)
    private String title;

    @NonNull
    @Column(name = "author")
    private String author;

    @NonNull
    @Column(name = "genre")
    private String genre;

    @NonNull
    @Column(name = "chapter")
    private String chapter;


    @Column(name = "views")
    private int views;


    @Column(name = "likes")
    private int likes;

    @NonNull
    @Column(name = "status")
    private String status;

    @OneToMany(mappedBy = "novel", cascade = CascadeType.ALL)
    private List<Chapter> chapters = new ArrayList<>();

}