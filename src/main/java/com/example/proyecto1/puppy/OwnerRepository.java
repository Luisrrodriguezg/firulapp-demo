package com.example.proyecto1.puppy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//This interface contains a bunch of methods that allow us to interact with the database

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Long> {

    //email is going to equal to whatever we pass
    @Query("SELECT s FROM Owner s WHERE s.email= ?1")
    Optional<Owner> findByEmail(String email);
}
