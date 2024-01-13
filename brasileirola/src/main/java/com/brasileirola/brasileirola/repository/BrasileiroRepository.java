package com.brasileirola.brasileirola.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brasileirola.brasileirola.model.Brasileiro;

@Repository
public interface BrasileiroRepository extends JpaRepository<Brasileiro, Long>{
	public Optional<Brasileiro> findById(Long id);

	public List<Brasileiro> findByRodada(String rodada);

	public List<Brasileiro> findByVencedor(String vencedor);
}
