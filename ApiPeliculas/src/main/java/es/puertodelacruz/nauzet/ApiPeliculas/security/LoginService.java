package es.puertodelacruz.nauzet.ApiPeliculas.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Usuario;
import es.puertodelacruz.nauzet.ApiPeliculas.service.UsuarioService;

@Service
public class LoginService {
	@Autowired
	private UsuarioService usuarioservice;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtService jwtService;



	public String authenticate(UserDetailsLogin request) {
		Usuario userentity = usuarioservice.findByName(request.getUsername());
		UserDetailsLogin userlogin = null;
		if (userentity != null) {

			if (passwordEncoder.matches(request.getPassword(), userentity.getPassword())) {
				userlogin = new UserDetailsLogin();
				userlogin.setUsername(userentity.getNombre());
				userlogin.setPassword(userentity.getPassword());
				userlogin.setRole(userentity.getRol());
			}
		}
		String generateToken = null;
		if (userlogin != null) {
			generateToken = jwtService.generateToken(userentity.getNombre(), userentity.getRol());
		}
		return generateToken;
	}

	public String register(UserDetailsLogin request) {
		Usuario userentity = new Usuario();
		userentity.setNombre(request.getUsername());
		userentity.setPassword(passwordEncoder.encode(request.getPassword()));
		userentity.setRol("ROLE_USER");
		Usuario save = usuarioservice.save(userentity);
		request.setRole(userentity.getRol());
		String generateToken = jwtService.generateToken(request.username, request.password);
		return generateToken;
	}
}