package com.brasileirola.brasileirola.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Brasileiro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String rodada;
	
	private String data;
	
	private String hora;
	
	private String mandante;
	
	private String visitante;
	
	private String formacao_mandate;
	
	private String formacao_visitante;
	
	private String tecnico_mandante;
	
	private String tecnico_visitante;
	
	private String vencedor;
	
	private String estadio;
	
	private String placar_mandante;
	
	private String placar_visitante;
	
	private String estado_mandante;
	
	private String estado_visitante;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRodada() {
		return rodada;
	}

	public void setRodada(String rodada) {
		this.rodada = rodada;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public String getMandante() {
		return mandante;
	}

	public void setMandante(String mandante) {
		this.mandante = mandante;
	}

	public String getVisitante() {
		return visitante;
	}

	public void setVisitante(String visitante) {
		this.visitante = visitante;
	}

	public String getFormacao_mandate() {
		return formacao_mandate;
	}

	public void setFormacao_mandate(String formacao_mandate) {
		this.formacao_mandate = formacao_mandate;
	}

	public String getFormacao_visitante() {
		return formacao_visitante;
	}

	public void setFormacao_visitante(String formacao_visitante) {
		this.formacao_visitante = formacao_visitante;
	}

	public String getTecnico_mandante() {
		return tecnico_mandante;
	}

	public void setTecnico_mandante(String tecnico_mandante) {
		this.tecnico_mandante = tecnico_mandante;
	}

	public String getTecnico_visitante() {
		return tecnico_visitante;
	}

	public void setTecnico_visitante(String tecnico_visitante) {
		this.tecnico_visitante = tecnico_visitante;
	}

	public String getVencedor() {
		return vencedor;
	}

	public void setVencedor(String vencedor) {
		this.vencedor = vencedor;
	}

	public String getEstadio() {
		return estadio;
	}

	public void setEstadio(String estadio) {
		this.estadio = estadio;
	}

	public String getPlacar_mandante() {
		return placar_mandante;
	}

	public void setPlacar_mandante(String placar_mandante) {
		this.placar_mandante = placar_mandante;
	}

	public String getPlacar_visitante() {
		return placar_visitante;
	}

	public void setPlacar_visitante(String placar_visitante) {
		this.placar_visitante = placar_visitante;
	}

	public String getEstado_mandante() {
		return estado_mandante;
	}

	public void setEstado_mandante(String estado_mandante) {
		this.estado_mandante = estado_mandante;
	}

	public String getEstado_visitante() {
		return estado_visitante;
	}

	public void setEstado_visitante(String estado_visitante) {
		this.estado_visitante = estado_visitante;
	}

	
	
	
	
}
