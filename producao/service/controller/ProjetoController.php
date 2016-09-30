<?php

require_once 'model/ProjetoModel.php';
require_once 'model/EscolaModel.php';
class ProjetoController{

	public function create($value){
		$value = $this->object_to_array($value);
		$value = ProjetoModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = ProjetoModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = ProjetoModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}
	public function change($id){
		$model = ProjetoModel::find($id);
		return $model->to_array();
	}

	public function delete($id){
		$model = ProjetoModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['idescola'] =  $value->idescola;
		$obj['escola']=EscolaModel::find($value->idescola)->nome;
		//$escola  = EscolaModel::find($obj['idescola']);
		$obj['estado'] = mb_check_encoding($value->estado, 'UTF-8') ? $value->estado : utf8_encode($value->estado);
		$obj['cidade'] = mb_check_encoding($value->cidade, 'UTF-8') ? $value->cidade : utf8_encode($value->cidade);
		$obj['categoria'] = mb_check_encoding($value->categoria, 'UTF-8') ? $value->categoria : utf8_encode($value->categoria);
		$obj['metaobj'] = mb_check_encoding($value->metaobj, 'UTF-8') ? $value->metaobj : utf8_encode($value->metaobj);
		$obj['datainicio'] = mb_check_encoding($value->datainicio, 'UTF-8') ? $value->datainicio : utf8_encode($value->datainicio);
		$obj['datafinal'] = mb_check_encoding($value->datafinal, 'UTF-8') ? $value->datafinal : utf8_encode($value->datafinal);
		$obj['arquivo'] = mb_check_encoding($value->arquivo, 'UTF-8') ? $value->arquivo : utf8_encode($value->arquivo);
		$obj['problema'] = mb_check_encoding($value->problema, 'UTF-8') ? $value->problema : utf8_encode($value->problema);
		$obj['hipotese'] = mb_check_encoding($value->hipotese, 'UTF-8') ? $value->hipotese : utf8_encode($value->hipotese);
		$obj['descricao'] = mb_check_encoding($value->descricao, 'UTF-8') ? $value->descricao : utf8_encode($value->descricao);
		$obj['bibliografia'] = mb_check_encoding($value->bibliografia, 'UTF-8') ? $value->bibliografia : utf8_encode($value->bibliografia);
		$obj['resumo'] = mb_check_encoding($value->resumo, 'UTF-8') ? $value->resumo : utf8_encode($value->resumo);
		$obj['primeirapalavra'] = mb_check_encoding($value->primeirapalavra, 'UTF-8') ? $value->primeirapalavra : utf8_encode($value->primeirapalavra);
		$obj['segundapalavra'] = mb_check_encoding($value->segundapalavra, 'UTF-8') ? $value->segundapalavra : utf8_encode($value->segundapalavra);
		$obj['terceirapalavra'] = mb_check_encoding($value->terceirapalavra, 'UTF-8') ? $value->terceirapalavra : utf8_encode($value->terceirapalavra);
		$obj['relatorio'] = mb_check_encoding($value->relatorio, 'UTF-8') ? $value->relatorio : utf8_encode($value->relatorio);

		return $obj;
	}

	private function object_to_array(stdClass $Class){
		#http://www.php.net/manual/en/language.types.object.php#102735		
		$Class = (array)$Class;
		foreach($Class as $key => $value){
			if(is_object($value)&&get_class($value)==='stdClass'){
				$Class[$key] = self::object_to_array($value);
			}
		}
		return $Class;
	}

}