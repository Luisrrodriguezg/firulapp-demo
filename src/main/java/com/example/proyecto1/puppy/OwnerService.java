package com.example.proyecto1.puppy;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class OwnerService {

    public List<Owner> getOwners(){
        return List.of(new Owner("Mario", "Antioquia", LocalDate.of(2004,9,23), "sofiaaristizabal23@gmail.com", 1025642483L));
    }
}
