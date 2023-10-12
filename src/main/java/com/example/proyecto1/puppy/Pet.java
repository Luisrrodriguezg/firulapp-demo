package com.example.proyecto1.puppy;
import java.util.*;

//This class contains all the information on the  pets of each owner
public class Pet {

    //Creating the attributes of the class pet
    private String Species;
    private int age;
    private int biologicalGender;
    private String name;

    public Pet(String species, int age, int biologicalGender, String name){
        this.Species = species;
        this.age = age;
        this.biologicalGender = biologicalGender;
        this.name = name;
    }
}
