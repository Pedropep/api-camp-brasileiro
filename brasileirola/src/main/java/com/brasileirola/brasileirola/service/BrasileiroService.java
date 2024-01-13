package com.brasileirola.brasileirola.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brasileirola.brasileirola.model.Brasileiro;
import com.brasileirola.brasileirola.repository.BrasileiroRepository;

@Service
public class BrasileiroService {
	@Autowired
	private BrasileiroRepository repository;
	
	public Optional<Brasileiro> findById(Long id){
		return repository.findById(id);
	}
	
	public List<Brasileiro> findAll() {
		return repository.findAll();
	}
	
	public List<Brasileiro> findByRodada(String rodada){
		return repository.findByRodada(rodada);
	}
	
	public List<Brasileiro> findVitoriasTime(String vencedor){
		return repository.findByVencedor(vencedor);
	}
	
}	
