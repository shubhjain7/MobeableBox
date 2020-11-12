            
  jQuery(document).ready(function($){
    $('#toggle-click').on('click',function(){
      if($(this).attr('data-click-state') == 1) {
        var noOfBoxes=1;
         			var element_pos = 0; 
         			var iCnt ;
         	
         	$(document).ready(function() {
         	
         		$('#btnClick').click(function() {
         		try{
         		noOfBoxes++;
         		
                    var dynamic_div = $(document.createElement('div')).css({
                       
         			background:'black'  ,
         			left: element_pos +'px', 
                        top: $('.box').height() + 25 +'px' , 
                        width: '20', height: '20', padding: '5px', margin: '5px'
                    });
         		
         		$(dynamic_div).attr("class", "box");
         		$(dynamic_div).attr("id", "box"+noOfBoxes);
         		
         		//$(dynamic_div).attr("name", "box"+noOfBoxes);
         		//$(dynamic_div).attr("onFocus", "onFocus(this,true)");
         		//$(dynamic_div).attr("onblur", "onFocus(this,false)");
         		
                    element_pos = element_pos + $('.box').width() + 20;
         
                    
                    $('#pane').append($(dynamic_div))
         		$(dynamic_div).focus();
                    // APPEND THE NEWLY CREATED DIV TO "divContainer".
                    
         		 
         		}
         		catch(err){
         			alert(err);
         		}
                    
                });
         	});
         
         var pane = $('#pane'),
         	box = $('#box1'),
         	
         	
         	clickid='';
         	
         
         $(function(){
         	$(document).click(function(event) { 
         	
         	clickid = event.target.id;
         	console.log(clickid);
         	box = $('#'+clickid);
             
         
         	var w = pane.width() - box.width(),
         	d = {},
         	x = 3;
         
         function newv(v, a, b) {
         		var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
         		return n < 0 ? 0 : n > w? w : n;
         	}
         	
         	 $(document).on('keyup',function(e){
         		
         		if(e.which == 46) // not delete key
         			$('#'+clickid).remove();
         	});
         
         
         	$(window).keydown(function(e) {
         				d[e.which] = true;
         	});
         	$(window).keyup(function(e) {
         				d[e.which] = false;
         	});
         
         	setInterval(function() {
         		box.css({
         			left: function(i, v) {
         			return newv(v, 65, 68);		
         		},
         		top: function(i, v) {
         			return newv(v, 87, 83);
         		}
         	});
         	}, 20);
         	});
         });
        $(this).attr('data-click-state', 0);
        console.log(' yes');

      }
      else {
        
        $(this).attr('data-click-state', 1);
        console.log('was no');
      
      }
    });
  });
            
            
            
            
            