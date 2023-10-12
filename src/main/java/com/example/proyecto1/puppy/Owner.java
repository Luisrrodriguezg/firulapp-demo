package com.example.proyecto1.puppy;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;
import java.util.*;

@Entity
//we create a table called owner_data which will store in columns all the attributes in owner
@Table (name = "owner_data")
public class Owner {

    @Id
    @SequenceGenerator(
            name = "Owner_sequence",
            sequenceName = "Owner_sequence",
            allocationSize = 1

    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Owner_sequence"
    )

    //Creating the attributes of the class owner
    private Long id;
    private String name;
    private String departament;
    private LocalDate dob;
    private String email;

    //We use @Transient so that this attributes will not be columns on the database, it adds it to the database without asking for it
    @Transient
    private Integer age;
    @Transient
    private ArrayList<Pet> pets = new ArrayList<>();

    public Owner() {
    }

    // Constructor of the class Owner
    public Owner(String name, String departament, LocalDate dob, String email) {
        this.name = name;
        this.departament = departament;
        this.dob = dob;
        this.email = email;
    }

    //we create the setters and getters of the class
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ArrayList<Pet> getPets() {
        return pets;
    }

    public void setPets(Pet pet) {

        pets.add(pet);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    //This method calculates the age of the owner based on the date of birth
    public Integer getAge() {

        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    //We create a toString ,method that allows us to print all the information of the attributes in the class owner
    @Override
    public String toString() {
        return "Owner{" +
                "name='" + name + '\'' +
                ", departament='" + departament + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", pets=" + pets +
                ", id=" + id +
                ", age=" + getAge() +
                '}';
    }
}
