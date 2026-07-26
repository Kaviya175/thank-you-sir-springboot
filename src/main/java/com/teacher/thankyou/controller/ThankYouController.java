package com.teacher.thankyou.controller;


import com.teacher.thankyou.dto.ThankYouRequest;
import com.teacher.thankyou.dto.ThankYouResponse;
import com.teacher.thankyou.service.ThankYouService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThankYouController {

    @Autowired
    private ThankYouService thankYouService;


    @PostMapping("/api/thankyou/execute")
    public ThankYouResponse executeProgram(@RequestBody ThankYouRequest request) {

        return thankYouService.executeThankYou(request);
    }
}
