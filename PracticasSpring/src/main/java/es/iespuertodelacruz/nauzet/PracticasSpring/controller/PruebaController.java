package es.iespuertodelacruz.nauzet.PracticasSpring.controller;

import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.iespuertodelacruz.nauzet.PracticasSpring.service.PersonasService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PruebaController {
	
	@Autowired PersonasService personaRepository;
	/*@GetMapping("/findByName")
	public ResponseEntity<?> findByName(String name){
		return ResponseEntity.ok(personaRepository.findByName(name));
	}*/
	@GetMapping("/findAll")
	public ResponseEntity<?> findAll(){
		return ResponseEntity.ok(personaRepository.findAll());
	}
	@GetMapping("/saludar")
	public ResponseEntity<?> mispruebas(){
		return ResponseEntity.ok("hola mundo");
	}
	//Practica3
	@GetMapping("/personas")
	public ResponseEntity<?> practica3(){
		return ResponseEntity.ok("Esta respuesta es de prueba");
	}
}
