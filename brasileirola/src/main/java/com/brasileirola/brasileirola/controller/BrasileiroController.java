package com.brasileirola.brasileirola.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brasileirola.brasileirola.model.Brasileiro;
import com.brasileirola.brasileirola.service.BrasileiroService;

@RestController
@RequestMapping(value = "/partidas")
@CrossOrigin("*")
public class BrasileiroController {
	
	@Autowired
	private BrasileiroService service;
	
	@GetMapping
	public ResponseEntity<List<Brasileiro>> findAll(){
		return ResponseEntity.ok(service.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Brasileiro> findById(@PathVariable Long id) {
		return service.findById(id).isPresent() ? ResponseEntity.status(HttpStatus.OK).body(service.findById(id).get()) : 
			ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@GetMapping("/vencedor/{vencedor}")
	public ResponseEntity<List<Brasileiro>> getByVitoriasTime(@PathVariable String vencedor){
		return ResponseEntity.ok(service.findVitoriasTime(vencedor));
	}
	
	@GetMapping("/rodada/{rodada}")
	public ResponseEntity<List<Brasileiro>> getByRodada(@PathVariable String rodada){
		return ResponseEntity.ok(service.findByRodada(rodada));
	}
}
