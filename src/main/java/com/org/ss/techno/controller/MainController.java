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

    @GetMapping("/soh")
    public String soh() {
        return "soh";
    }

    @GetMapping("/pmo-as-a-service")
    public String pmoService() {
        return "pmo-as-a-service";
    }

    @GetMapping("/managed-teams")
    public String managedTeams() {
        return "managed-teams";
    }

    @GetMapping("/insights")
    public String insights() {
        return "insights";
    }

    @GetMapping("/global-capability-center")
    public String globalCapabilityCenter() {
        return "global-capability-center";
    }

    @GetMapping("/digital-transformation")
    public String digitalTransformation() {
        return "digital-transformation";
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

    @GetMapping("/bot")
    public String bot() {
        return "bot";
    }

    @GetMapping("/about-us")
    public String aboutUs() {
        return "about-us";
    }

    @GetMapping("/index_test")
    public String home_test() {
        return "index_test";
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
