package com.org.ss.techno.service;

import com.org.ss.techno.controller.MainController;
import com.org.ss.techno.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private SpringTemplateEngine templateEngine;
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);


    public void sendEmail(User user) {
        try{
//            SimpleMailMessage message = new SimpleMailMessage();
//            message.setTo("pappunawale1000@gmail.com");
//            message.setFrom("sstechno1000@gmail.com");
//            message.setSubject("New Form Submission");
//            message.setText(formatUserDetails(user));
//            emailSender.send(message);
            Context thymeleafContext = new Context();
            thymeleafContext.setVariable("fullName", user.getFullName());
            thymeleafContext.setVariable("email", user.getEmail());
            thymeleafContext.setVariable("contactNumber", user.getContactNumber());
            thymeleafContext.setVariable("country", user.getCountry());
            thymeleafContext.setVariable("description", user.getDescription());
            String htmlBody = templateEngine.process("form-submission", thymeleafContext);

            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo("sstechno1000@gmail.com");
            helper.setFrom(user.getEmail());
            helper.setSubject("Inquiry Submitted: "+user.getFullName());
            helper.setText(htmlBody, true);

            emailSender.send(message);
            logger.info("Email Sent SuccessFully : {}",user);
            sendAcknowledgmentEmail(user);
            logger.info("Email ack send : {}",user.getEmail());
        }
        catch(Exception e)
        {
            logger.error("Error occurs while sending ack :{}",e);
        }
    }

    private String formatUserDetails(User user) {
        return String.format("Full Name: %s\nEmail: %s\nContact Number: %s\nCountry: %s\nDescription: %s",
                user.getFullName(), user.getEmail(), user.getContactNumber(), user.getCountry(), user.getDescription());
    }

//    private void sendAcknowledgmentEmail(String userEmail) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(userEmail);
//        message.setSubject("Thank You for Your Submission");
//        message.setText("Thank you for your submission! We will get back to you shortly.");
//        emailSender.send(message);
//    }
public void sendAcknowledgmentEmail(User user) throws MessagingException {
    Context thymeleafContext = new Context();
    thymeleafContext.setVariable("fullName", user.getFullName());
    thymeleafContext.setVariable("email", user.getEmail());
    thymeleafContext.setVariable("contactNumber", user.getContactNumber());
    thymeleafContext.setVariable("country", user.getCountry());
    thymeleafContext.setVariable("description", user.getDescription());

    String htmlBody = templateEngine.process("acknowledgment", thymeleafContext);

    MimeMessage message = emailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom("sstechno1000@gmail.com");
    helper.setTo(user.getEmail());
    helper.setSubject("Inquiry Submitted: "+user.getFullName());
    helper.setSubject("Thank You for Your Submission");
    helper.setText(htmlBody, true);
    emailSender.send(message);
    System.out.println("Acknowledgment email sent successfully!");
}

}
