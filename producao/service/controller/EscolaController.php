<?php

require_once 'model/EscolaModel.php';

class EscolaController{

	public function create($value){
		$value = $this->object_to_array($value);
		$value = EscolaModel::create($value);
		return $value->to_array();
	}
		
	public function read(){
		$arr = EscolaModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}
	public function update($value){
		$model = EscolaModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = EscolaModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['telefone'] = mb_check_encoding($value->telefone, 'UTF-8') ? $value->telefone : utf8_encode($value->telefone);
		$obj['telefone2'] = mb_check_encoding($value->telefone2, 'UTF-8') ? $value->telefone2 : utf8_encode($value->telefone2);
		$obj['endereco'] = mb_check_encoding($value->endereco, 'UTF-8') ? $value->endereco : utf8_encode($value->endereco);
		$obj['cidade'] = mb_check_encoding($value->cidade, 'UTF-8') ? $value->cidade : utf8_encode($value->cidade);
		$obj['estado'] = mb_check_encoding($value->estado, 'UTF-8') ? $value->estado : utf8_encode($value->estado);

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