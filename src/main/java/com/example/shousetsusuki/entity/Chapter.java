package com.example.shousetsusuki.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "chapter")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @Column(name = "name",unique = true)
    private String name;

    @NonNull
    @Column(name = "content")
    private String content;

    @ManyToOne
    @JoinColumn(name = "novel_id", referencedColumnName = "id")
    private Novel novel;

}