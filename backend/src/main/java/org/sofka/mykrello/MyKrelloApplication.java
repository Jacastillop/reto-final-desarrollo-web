package org.sofka.mykrello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class MyKrelloApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyKrelloApplication.class, args);
	}

}
