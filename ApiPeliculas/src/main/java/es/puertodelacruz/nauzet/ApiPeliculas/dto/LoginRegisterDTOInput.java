package es.puertodelacruz.nauzet.ApiPeliculas.dto;

public class LoginRegisterDTOInput {
	public String username;
	public String password;
	
	public LoginRegisterDTOInput() {
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
