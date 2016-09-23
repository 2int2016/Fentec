<?php

require_once 'model/IntegranteModel.php';

class IntegranteController{   

	public function create($value){
		$value = $this->object_to_array($value);
		$value = IntegranteModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = IntegranteModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = IntegranteModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = IntegranteModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['senha'] = mb_check_encoding($value->senha, 'UTF-8') ? $value->senha : utf8_encode($value->senha);
		$obj['escola'] = mb_check_encoding($value->escola, 'UTF-8') ? $value->escola : utf8_encode($value->escola);
		$obj['data_nascimento'] = mb_check_encoding($value->cpf, 'UTF-8') ? $value->data_nascimento : utf8_encode($value->data_nascimento);
		$obj['cpf'] = mb_check_encoding($value->cpf, 'UTF-8') ? $value->cpf : utf8_encode($value->cpf);
		$obj['telefone'] = mb_check_encoding($value->telefone, 'UTF-8') ? $value->telefone : utf8_encode($value->telefone);
		$obj['endereco'] = mb_check_encoding($value->endereco, 'UTF-8') ? $value->endereco : utf8_encode($value->endereco);
		$obj['cidade'] = mb_check_encoding($value->cidade, 'UTF-8') ? $value->cidade : utf8_encode($value->cidade);
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