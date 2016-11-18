<?php

require_once 'model/NotaModel.php';

class NotaController{

	public function create($value){
		$value = $this->object_to_array($value);
		$value = NotaModel::create($value);
		return $value->to_array();
	}
		
	public function read(){
		$arr = NotaModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = NotaModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = NotaModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nota'] = mb_check_encoding($value->nota, 'UTF-8') ? $value->nota : utf8_encode($value->nota);
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