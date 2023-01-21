 
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}
	
});

function Kontakt() {
    function sacuvaj(){
        alert("Poruka sacuvana")
    }
    return ( 
    <>
    <header>
	<h1>Contact us</h1>
</header>
    <div id="form">
    
    <div className="fish" id="fish"></div>
    <div className="fish" id="fish2"></div>
    
    <form id="waterform" >
    
    <div className="formgroup" id="name-form">
        <label for="name">Your name*</label>
        <input type="text" id="name" name="name" />
    </div>
    
    <div className="formgroup" id="email-form">
        <label for="email">Your e-mail*</label>
        <input type="email" id="email" name="email" />
    </div>
    
    <div className="formgroup" id="message-form">
        <label for="message">Your message</label>
        <textarea id="message" name="message"></textarea>
    </div>
    
        <input type="submit" value="Send your message!" onClick={sacuvaj} />
    </form>
    </div>
  
  
    </>
  
    );
  }
  
  export default Kontakt;
  