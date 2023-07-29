<?php 
class Alerts {
  public $alerts;
  public $colors;
  public function __construct() {
    $this->alerts = array();
    $this->colors = array(
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
      "light",
      "dark"
    );
  }
  public function add($text, $color = 0) {
    $cacheColor = "";
    if(is_string($color)){
        $cacheColor = $color;
    }
    else {
        $cacheColor = $this->colors[$color];
    }
    array_push($this->alerts, array(
      "text" => $text,
      "color" => $cacheColor
    ));
  }
  public function print(){
    print_r($this->alerts);
  }
  public function html(){
    $html = "";
    foreach ($this->alerts as $alert) {
        $color = $alert['color'];
        $text = $alert['text'];
        $html .= "<div class='alert alert-$color' role='alert'>$text</div>";
    }
    return $html;
  }
  public function eHtml(){
    echo($this->html());
  }
  
}
?>