package com.example.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

	@Value("${spring.mail.username}")
	private String toEmail;

	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public String sendMail(String subject, String body) {
		// TODO Auto-generated method stub

		try {
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();

			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

			mimeMessageHelper.setTo(toEmail);
			mimeMessageHelper.setSubject(subject);
			mimeMessageHelper.setText(body);

			javaMailSender.send(mimeMessage);

			return "Email sent";
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
