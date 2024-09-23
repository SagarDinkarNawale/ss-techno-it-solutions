package com.org.ss.techno.controller;

import com.org.ss.techno.Main;
import com.org.ss.techno.model.User;
import com.org.ss.techno.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    @Autowired
    EmailService emailService;
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @GetMapping("/index")
    public String home() {
        return "index";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/careers")
    public String careers() {
        return "careers";
    }
    @GetMapping("/services")
    public String services() {
        return "services";
    }

    @GetMapping("/about-us")
    public String aboutUs() {
        return "about-us";
    }
    @PostMapping("/submit")
    public String submitForm(@RequestBody User user) {
        logger.info("UserInfo : {}",user);
        emailService.sendEmail(user);
        return "done";
    }
}
