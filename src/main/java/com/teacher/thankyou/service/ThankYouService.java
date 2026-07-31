package com.teacher.thankyou.service;

import com.teacher.thankyou.model.ThankYouRequest;
import com.teacher.thankyou.model.ThankYouResponse;
import org.springframework.stereotype.Service;

@Service
public class ThankYouService {

    public ThankYouResponse executeThankYou(
            ThankYouRequest request) {

        if ("RUN_PROGRAM".equals(request.getAction())) {

            return new ThankYouResponse(
                    "PROGRAM EXECUTED SUCCESSFULLY ❤️",
                    "Prasanna Kumar Mishra Sir",
                    "SUCCESS"
            );
        }

        return new ThankYouResponse(
                "INVALID ACTION",
                "Prasanna Kumar Mishra Sir",
                "FAILED"
        );
    }
}
