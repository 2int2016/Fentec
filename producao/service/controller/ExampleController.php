<?php

require_once 'model/ExampleModel.php';

class ExampleController{

	public function create($value){
		$value = $this->object_to_array($value);
		$value = ExampleModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = ExampleModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = ExampleModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = ExampleModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['senha'] = mb_check_encoding($value->senha, 'UTF-8') ? $value->senha : utf8_encode($value->senha);
		$obj['instituicao'] = mb_check_encoding($value->instituicao, 'UTF-8') ? $value->instituicao : utf8_encode($value->instituicao);

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