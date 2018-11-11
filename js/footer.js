var elements = document.getElementsByTagName('footer');
if (typeof elements != "undefined" && elements.length > 0) {
	var sFooter = elements[0];
	var sFooterContainer = document.createElement('div');
	sFooterContainer.className = 'container';
	sFooterContainer.id = 's-footer_container';
	sFooterContainer.innerHTML = '<h1 class="h1">контакты</h1><div class="footer__top"><div class="s-footer-contacts"><a href="tel:+79252658808">Телефон: <span>+7 925 265 88 08</span></a><a href="mailto:ya@dei.su">Почта: <span>ya@dei.su</span></a></div><div class="s-footer-socials"><a href="https://fb.com/decoinst" title="Facebook" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="https://vk.com/decoinst" title="VKontakte" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a><a href="https://medium.com/@LibreCenterRu" title="Medium" target="_blank"><i class="fa" aria-hidden="true"><b>M</b></i></a><a href="https://t.me/LibreCenter" title="Telegramm chanel" target="_blank"><i class="fa" aria-hidden="true"><b>T</b></i></a></div></div><div class="footer__btm"><span>© 2018</span><img src="img/logo.svg" alt=""></div>';
	sFooter.appendChild(sFooterContainer);
}
