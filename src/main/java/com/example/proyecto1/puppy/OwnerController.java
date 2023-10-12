package com.example.proyecto1.puppy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.sun.beans.introspect.PropertyInfo.Name.required;

@RestController
@RequestMapping(path="api/v1/Owner")

public class OwnerController {

    private final OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping
    public List<Owner> getOwners(){
        return ownerService.getOwners();
    }

    //This method uses the method addNewOwner from ownerService to register owners that the user/client publishes
    //The request body asks the user for the information and maps it into an owner
    @PostMapping
    public void registerNewOwner(@RequestBody Owner owner){

        ownerService.addNewOwner(owner);
    }

    @DeleteMapping(path = "{ownerId}")
    public void deleteOwner(@PathVariable("ownerId") Long ownerId){
        ownerService.deleteOwner(ownerId);
    }

    @PutMapping(path = "{ownerId}")
    public void updateOwner( @PathVariable("ownerId") Long ownerId,
                             @RequestParam(required = false) String name,
                             @RequestParam(required = false) String department,
                             @RequestParam(required = false) String email) {

        ownerService.updateOwner(ownerId, name, department, email);
    }



}
