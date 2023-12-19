package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.puertodelacruz.nauzet.ApiPeliculas.service.MailService;
import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin
@RequestMapping("/Api/registerverify")
public class Emailcontroller {
	/*
	 * primero /api/register
	 * nombre pass
	 * guardar en base de datos 
	 * nombre pass correo role verificado(bolean) // guardar uid
	 * despues /api/registerverify
	 * */
	@Autowired
	MailService mailservice;
	@PostMapping("/{correo}")
	public String enviarMensaje(@PathVariable String correo) {
		String message = "Enviado";
		return message;

	}
}
