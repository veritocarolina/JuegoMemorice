//script para el modal.

$(document).ready(function(){
	$('.item .delete').click(function(){
		var elem = $(this).closest('.item');

		$.comfirm({
			'title'			: 'Delete confirmation',
			'message'		: 'You are about to delete this item. <br/> It cannot be restored at a later time! Continue?',
			'buttons'		:{
				'Yes'		:{
					'class' : 'blue',
					'action': function(){
						elem.slideUp();
					}
				},
				'No'		:{
					'class' : 'gray',
					'action': function(){}
				}
			}
		});
	});
});