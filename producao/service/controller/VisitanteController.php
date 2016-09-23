<?php



require_once 'model/VisitanteModel.php';

class VisitanteController{   
	
	public function verificar($email){
		$arr = $this->read();
		foreach ($arr as $key => $value){
		if($email == $value['email']){
			return 1;
			
		}
		
			}
		return 0;
		
	}
	
	
	public function create($value){
		if($this->verificar($value->email)){
			return 0;
		}
		$value = $this->object_to_array($value);
		$value = VisitanteModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = VisitanteModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = VisitanteModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = VisitanteModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['idade'] = mb_check_encoding($value->idade, 'UTF-8') ? $value->idade : utf8_encode($value->idade);
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
