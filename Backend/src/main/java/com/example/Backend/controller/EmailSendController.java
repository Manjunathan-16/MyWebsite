package com.example.Backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.service.EmailService;

@RestController
public class EmailSendController {
	private EmailService emailService;

	public EmailSendController(EmailService emailService) {
		this.emailService = emailService;
	}

	@PostMapping("/send")
	public String sendMail(
			String subject, String body) {
		return emailService.sendMail(subject, body);
	}
}
