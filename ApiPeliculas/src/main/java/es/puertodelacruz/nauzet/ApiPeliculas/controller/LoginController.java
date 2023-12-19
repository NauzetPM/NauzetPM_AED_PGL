package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.LoginRegisterDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.mappers.LoginRegisterDTOMapper;
import es.puertodelacruz.nauzet.ApiPeliculas.security.LoginService;
import es.puertodelacruz.nauzet.ApiPeliculas.security.UserDetailsLogin;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoginController {
	Logger log;
	@Autowired
	private LoginService service;

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody LoginRegisterDTOInput request) {
		UserDetailsLogin userDetails=LoginRegisterDTOMapper.toDomain(request);
		return ResponseEntity.ok(service.register(userDetails));
	}

	@PostMapping("/login")
	public ResponseEntity<String> authenticate(@RequestBody LoginRegisterDTOInput request) {
		UserDetailsLogin userDetails=LoginRegisterDTOMapper.toDomain(request);
		String token = service.authenticate(userDetails);
		if (token == null)
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User/passerróneo");
		else
			return ResponseEntity.ok(token);
	}
}