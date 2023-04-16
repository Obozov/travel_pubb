

$(function() {
		var config = {
			type: 'pie',
			data: {
				datasets: [{
					data: [8, 16
			
					],
					backgroundColor: [
						'rgba(29,227,85,1.00)',
                		'rgba(18, 201, 70, 1)',
					
					],
					label: 'Dataset 1'
				}],
				labels: [
					'активных',
					'не активных',
					
				]
			},
			options: {
				responsive: true
			}
		};
	var config2 = {
			labels: ['Март', 'Апрель', 'Май'],
			datasets: [{
				type: 'line',
				label: 'Результат',
				borderColor: 'rgba(255,214,49,1.00)',
				
				borderWidth: 2,
				fill: false,
				data: [
					4,
					6,
					10,
					
				]
			}, {
				type: 'bar',
				label: 'Поступления',
				backgroundColor: 'rgba(75, 192, 192, 1)',
				data: [
					8,
					10,
					20,
					
				],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Выплаты',
				backgroundColor: 'rgba(255, 99, 132, 1)',
				data: [
					2,
					6,
					8,
					
				]
			}]

		};
	
	var config4 = {
			labels: ['Март', 'Апрель', 'Май'],
			datasets: [{
				type: 'line',
				label: 'План',
				borderColor: 'rgba(18,201,70,1.00)',
				
				borderWidth: 2,
				fill: false,
				data: [
					30,
					30,
					30,
					
				]
			},
					   {
				type: 'line',
				label: 'Минимальное выполнение',
				borderColor: 'rgba(217,46,46,1.00)',
				
				borderWidth: 2,
				fill: false,
				data: [
					15,
					15,
					15,
					
				]
			},
					   {
				type: 'bar',
				label: 'Выполнение по 1 линии',
				backgroundColor: 'rgba(75, 192, 192, 1)',
				data: [
					8,
					17,
					35,
					
				],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Выполнение общей глубины',
				backgroundColor: 'rgba(255, 99, 132, 1)',
				data: [
					16,
					31,
					35,
					
				]
			}]

		};
	
	
	
	var config3 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						69,
						11,
						7,
						6,
						5,
						1,
						1,
					],
					backgroundColor: [
						
						
                		'rgba(75, 192, 192, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255,205,86,1.00)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(75, 192, 125, 1)',
						'rgba(126, 111, 217, 1)',
						
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Расходы по основной деятельности',
					'Налоги',
					'Выплаты акционерам и учредителям',
					'Персонал',
					'Хозяйственные расходы',
					'Маркетинг',
					'Управленические расходы',
					
				]
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Структура выплат по категориям'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};
	


			window.onload = function() {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myPie = new Chart(ctx, config);
			
			
			var cty = document.getElementById('canvas').getContext('2d');
			window.myMixedChart = new Chart(cty, {
				type: 'bar',
				data: config2,
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Фактические платежи'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					}
				}
			});
		
	
			var ctl = document.getElementById('canvas2').getContext('2d');
			window.myDoughnut = new Chart(ctl, config3);
				
			var ctm = document.getElementById('canvas3').getContext('2d');
			window.myMixedChart2 = new Chart(ctm, {
				type: 'bar',
				data: config4,
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Структурное выполнение'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					}
				}
			});
		
		
			
		};


  });






$(document).ready(function(){
$('#menudesc').flexMenu();
});

(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true,
			});
			$('.ios-toggle').styler('destroy');
		});
		})(jQuery);


(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	var tabIndex = window.location.hash.replace('#tab','')-1;
	if (tabIndex != -1) $('ul.tabs__caption li').eq(tabIndex).click();

	$('a[href*=#tab]').click(function() {
		var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
		$('ul.tabs__caption li').eq(tabIndex).click();
	});

});
})(jQuery);
(function($) {
$(function() {

	$('ul.tabs__caption_ok').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs_ok').find('div.tabs__content_ok').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

(function($) {
$(function() {

	$('ul.w_tab_cap').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.w_tab').find('div.w_tab_content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

(function($) {
$(function() {

	$('ul.w_tab_cap_ref').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.w_tab_ref').find('div.w_tab_content_ref').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

(function($) {
$(function() {

	$('ul.w_tab_cap_ch').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.w_tab_ch').find('div.w_tab_content_ch').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

$(document).ready(function(){
  $(".owl-carousel2").owlCarousel(
  {
	  
    loop:true,
    margin:0,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
       
	}
  });
});

$(document).ready(function(){
  $(".owl-carousel3").owlCarousel(
  {
	stagePadding: 50,  
    loop:true,
    margin:50,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:4
        },
       
	}
  });
});

        $(function() {

            $('#slider').slider({
				range:"min",
				min:20,
				max:3000000,
                value:50000,
				step:10,
                create: setInputsFromSlider,
                slide: setInputsFromSlider,
                stop: setInputsFromSlider
            })

            function setInputsFromSlider() {
                $('#slideVal').val($('#slider').slider("value"));
            }
			
			 $('#slider2').slider({
				range:"min",
				min:3,
				max:24,
                value: 12,
				step:1,
                create: setInputsFromSlider2,
                slide: setInputsFromSlider2,
                stop: setInputsFromSlider2
            })

            function setInputsFromSlider2() {
                $('#slideVal2').val($('#slider2').slider("value"));
            }
            
         
                        
            $('input').change(function(e) {
                switch (this.id) {
                   
                    case "slideVal":
                        $('#slider').slider("value", $(this).val())
                        break;
						
					case "slideVal2":
                        $('#slider2').slider("value", $(this).val())
                        break;
						
                }
            })
});


$(function() {
        $(".dial").knob();
    });

$(document).ready(function(){
  
	 $('#modal1').modal();
	});
$(function() {
  $('.cop').click(function() {
     $('#reff')[0].select(); 
     document.execCommand('copy');
     $('#reff').append(' ');
     $('#reff').val().slice(0, -1);
  });
});


 $( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons: icons,
		active: false,
        collapsible: true,
		heightStyle: "content"
	
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  } );

 $( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( ".accord_otch" ).accordion({
      icons: icons,
		active: false,
        collapsible: true,
		heightStyle: "content"
	
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( ".accord_otch" ).accordion( "option", "icons" ) ) {
        $( ".accord_otch" ).accordion( "option", "icons", null );
      } else {
        $( ".accord_otch" ).accordion( "option", "icons", icons );
      }
    });
  } );


 $( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( ".acc_part" ).accordion({
      icons: icons,
		active: false,
        collapsible: true,
		heightStyle: "content"
	
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( ".acc_part" ).accordion( "option", "icons" ) ) {
        $( ".acc_part" ).accordion( "option", "icons", null );
      } else {
        $( ".acc_part" ).accordion( "option", "icons", icons );
      }
    });
  } );


$( function() {
    $( document ).tooltip();
  } );