package tn.esprit.spring.kaddem.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kaddem")
public class RootController {
    @GetMapping("")
    public String root() {
        return "Application is running!";
    }
}