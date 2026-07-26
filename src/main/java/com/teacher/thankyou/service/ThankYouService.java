package com.teacher.thankyou.service;

import com.teacher.thankyou.dto.ThankYouRequest;
import com.teacher.thankyou.dto.ThankYouResponse;
import org.springframework.stereotype.Service;

@Service
public class ThankYouService {

    public ThankYouResponse executeThankYou(
            ThankYouRequest request) {

        if ("RUN_PROGRAM".equals(request.getAction())) {

            return new ThankYouResponse(
                    "PROGRAM EXECUTED SUCCESSFULLY ❤️",
                    "Prasanna Mishra Kumar Sir",
                    "SUCCESS"
            );
        }

        return new ThankYouResponse(
                "INVALID ACTION",
                "Prasanna Mishra Kumar Sir",
                "FAILED"
        );
    }
}
