jQuery(function(){	
	
	// pagescroll
	$(".anchor_btn").click(function () {
		var i = $(".anchor_btn").index(this)
		var p = $(".anchor").eq(i).offset().top;
		$('html,body').animate({ scrollTop: p }, 'slow');
		return false;
	});
	
	// #�Ŏn�܂�A���J�[���N���b�N�����ꍇ�ɏ���
	$('a[href^=#]').click(function() {
		// �X�N���[���̑��x
		var speed = 400; // �~���b
		// �A���J�[�̒l�擾
		var href= $(this).attr("href");
		// �ړ�����擾
		var target = $(href == "#" || href == "" ? 'html' : href);
		// �ړ���𐔒l�Ŏ擾
		var position = target.offset().top;
		// �X���[�X�X�N���[��
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	

});