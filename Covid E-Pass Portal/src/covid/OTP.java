package covid;
import java.net.http.HttpRequest;
import java .util.*;
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


public class OTP {
	private static int pin;
	public static int getPin() {
		return pin;
	}

	public static void setPin(int p) {
		pin = p;
	}

	public static void sendOTP(String recepient) throws Exception {
		
		System.out.println("sending otp");
		Properties prop = new Properties();
		prop.put("mail.smtp.auth", "true");
		 prop.put("mail.smtp.starttls.enable", "true");
		prop.put("mail.smtp.host","smtp.gmail.com");
		prop.put("mail.smtp.port","587");
		
		String myAccount = "kurvashiva.99@gmail.com";
		String password = "thankusachin100";
		
		Session session = Session.getInstance(prop, new Authenticator() {
			
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(myAccount, password);
			}
			
		});
		
		Message message = prepareMessage(session, myAccount, recepient);
		
		Transport.send(message);
		System.out.println("otp sent from otp.java");
		
	}

	private static Message prepareMessage(Session session, String myAccount, String recepient) throws AddressException, MessagingException {
		
			Random rand = new Random(); 
			int otp = rand.nextInt(10000);
			setPin(otp);
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(myAccount));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
			message.setSubject("Covid 19 E Pass Portal - OTP");
			message.setText(""+otp);
			return message;
		
	}

}
