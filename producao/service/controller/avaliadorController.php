<?php

require_once 'model/avaliadorModel.php';

class avaliadorController{

	public function create($value){
		$value = $this->object_to_array($value);
		$value = avaliadorModel::create($value);
		return $value->to_array();
	}
		
	public function read(){
		$arr = avaliadorModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = avaliadorModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = avaliadorModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['senha'] = mb_check_encoding($value->senha, 'UTF-8') ? $value->senha : utf8_encode($value->senha);
		$obj['nascimento'] = mb_check_encoding($value->nascimento, 'UTF-8') ? $value->nascimento : utf8_encode($value->nascimento);
		$obj['nacionalidade'] = mb_check_encoding($value->nacionalidade, 'UTF-8') ? $value->nacionalidade : utf8_encode($value->nacionalidade);
		$obj['rg'] = mb_check_encoding($value->rg, 'UTF-8') ? $value->rg : utf8_encode($value->rg);
		$obj['profissao'] = mb_check_encoding($value->profissao, 'UTF-8') ? $value->profissao : utf8_encode($value->profissao);
		$obj['empresa'] = mb_check_encoding($value->empresa, 'UTF-8') ? $value->empresa : utf8_encode($value->empresa);
		$obj['escolaridade'] = mb_check_encoding($value->escolaridade, 'UTF-8') ? $value->escolaridade : utf8_encode($value->escolaridade);

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