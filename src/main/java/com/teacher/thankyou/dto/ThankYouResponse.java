package com.teacher.thankyou.dto;



public class ThankYouResponse {

    private String message;
    private String teacher;
    private String status;

    public ThankYouResponse(String message, String teacher, String status) {
        this.message = message;
        this.teacher = teacher;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public String getTeacher() {
        return teacher;
    }

    public String getStatus() {
        return status;
    }
}
