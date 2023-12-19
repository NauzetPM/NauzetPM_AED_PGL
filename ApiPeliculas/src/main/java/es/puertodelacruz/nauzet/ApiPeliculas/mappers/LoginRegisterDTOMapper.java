package es.puertodelacruz.nauzet.ApiPeliculas.mappers;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.LoginRegisterDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.security.UserDetailsLogin;

public class LoginRegisterDTOMapper {
    public static UserDetailsLogin toDomain(LoginRegisterDTOInput loginRegisterDto) {
    	UserDetailsLogin userDetails = new UserDetailsLogin();
    	userDetails.setUsername(loginRegisterDto.getUsername());
    	userDetails.setPassword(loginRegisterDto.getPassword());
        return userDetails;
    }
}
