package com.org.ss.techno.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
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
}
