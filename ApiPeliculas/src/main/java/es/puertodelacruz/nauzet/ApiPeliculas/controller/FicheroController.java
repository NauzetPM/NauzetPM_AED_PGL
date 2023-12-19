package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.net.URLConnection;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import es.puertodelacruz.nauzet.ApiPeliculas.service.FileStorageService;

@RestController
@CrossOrigin
@RequestMapping("/Api/Fichero")
public class FicheroController {

	@Autowired
	FileStorageService storageService;

	@PostMapping("/upload")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			String namefile = storageService.save(file);
			message = "" + namefile;
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + ". Error: " + e.getMessage();
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}

	@GetMapping("/ficheros/{filename}")
	public ResponseEntity<?> getFiles(@PathVariable String filename) {
		Resource resource = storageService.get(filename);
		// Try to determine file's content type
		String contentType = null;
		try {
			contentType = URLConnection.guessContentTypeFromStream(resource.getInputStream());
		} catch (IOException ex) {
			System.out.println("Could not determine file type.");
		}
		// Fallback to the default content type if type could not be determined
		if (contentType == null) {
			contentType = "application/octet-stream";
		}
		String headerValue = "attachment; filename=\"" + resource.getFilename() + "\"";
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
				.header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, headerValue).body(resource);
	}
}
