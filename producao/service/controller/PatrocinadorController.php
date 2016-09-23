<?php

require_once 'model/PatrocinadorModel.php';

class PatrocinadorController{   

	public function create($value){
		$value = $this->object_to_array($value);
		$value = PatrocinadorModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = PatrocinadorModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = PatrocinadorModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = PatrocinadorModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['senha'] = mb_check_encoding($value->senha, 'UTF-8') ? $value->senha : utf8_encode($value->senha);
		$obj['cnpj'] = mb_check_encoding($value->cnpj, 'UTF-8') ? $value->cnpj : utf8_encode($value->cnpj);
		$obj['cep'] = mb_check_encoding($value->cep, 'UTF-8') ? $value->cep : utf8_encode($value->cep);
		$obj['telefone'] = mb_check_encoding($value->telefone, 'UTF-8') ? $value->telefone : utf8_encode($value->telefone);
		$obj['telefone2'] = mb_check_encoding($value->telefone2, 'UTF-8') ? $value->telefone2 : utf8_encode($value->telefone2);
		$obj['pais'] = mb_check_encoding($value->pais, 'UTF-8') ? $value->pais : utf8_encode($value->pais);
		$obj['estado'] = mb_check_encoding($value->estado, 'UTF-8') ? $value->estado : utf8_encode($value->estado);
		$obj['cidade'] = mb_check_encoding($value->cidade, 'UTF-8') ? $value->cidade : utf8_encode($value->cidade);
		$obj['caminhoimagem'] = mb_check_encoding($value->caminhoimagem, 'UTF-8') ? $value->caminhoimagem : utf8_encode($value->caminhoimagem);
		
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