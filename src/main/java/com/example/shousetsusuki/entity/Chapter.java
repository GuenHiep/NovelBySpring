package com.example.shousetsusuki.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Chapter")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long chapterId;

    @ManyToOne
    @JoinColumn(name = "novel_id",nullable = false)
    private Novel novel;

    @Column(name = "name",nullable = false,unique = true)
    private String name;

    @Column(name = "content",nullable = false)
    private String content;
}
