package com.example.proyecto1.puppy;

import jakarta.transaction.Transactional;
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

    public void deleteOwner(Long OwnerId){

        boolean exist = ownerRepository.existsById(OwnerId);

        if(!exist){
            throw new IllegalStateException("Owner with Id " + OwnerId + " does not exist");
        } else{
            ownerRepository.deleteById(OwnerId);
        }

    }

    @Transactional
    public void updateOwner(Long id, String name, String department, String email){
     Owner owner = ownerRepository.findById(id).orElseThrow( () -> new IllegalStateException("student with id " + id+ " does not exist"));

     if(name != null && !name.isEmpty() && !owner.getName().equals(name)){
          owner.setName(name);
     }

     if(department != null && !department.isEmpty() && !owner.getDepartament().equals(department)){
            owner.setDepartament(department);
     }

     if(email != null && !email.isEmpty() && !owner.getEmail().equals(email)){
            Optional<Owner> ownerOptional = ownerRepository.findByEmail(email);

            if(ownerOptional.isPresent()) {
                throw new IllegalStateException("This email is already taken");
            } else{
                owner.setEmail(email);
            }
     }

    }


    public List<Owner> getOwners(){
        return ownerRepository.findAll();
    }
}
