package com.example.proyecto1.puppy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerService {

    private final OwnerRepository ownerRepository;
    @Autowired
    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    //This method will allow us to add new owner to the database

    public void addNewOwner(Owner owner){
     Optional<Owner> ownerOptional  = ownerRepository.findByEmail(owner.getEmail());
     //This condition checks if the email that the person is entering is already in the system, and if it is it throws an exception
     if(ownerOptional.isPresent()){
         throw new IllegalStateException("Email taken");
     }
     else{
         ownerRepository.save(owner);
     }
    }

    public List<Owner> getOwners(){
        return ownerRepository.findAll();
    }
}
