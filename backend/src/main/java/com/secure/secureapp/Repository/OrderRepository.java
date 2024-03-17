package com.secure.secureapp.Repository;

import com.secure.secureapp.Models.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Employer, Long> {
    Employer findFirstByEmailAndOrderNumber(String email, long orderNumber);
}
