var elements = document.getElementsByTagName('header');
if (typeof elements != "undefined" && elements.length > 0) {
	var sHeader = elements[0];

	var sLogo = document.createElement('div');
	sLogo.className = 's-header_logo';
	sLogo.id = 's-header-logo';
	sLogo.innerHTML = '<img class="s-header_logo__img" src="/img/logo.svg">';
	sHeader.appendChild(sLogo);

	var sHeaderMenu = document.createElement('ul');
	sHeaderMenu.className = 's-header-menu';
	sHeaderMenu.id = 's-header-menu';
	sHeaderMenu.innerHTML = '<li><a href="/edu">Образование</a></li><li><a href="/projects">Проекты</a></li>';
	sHeader.appendChild(sHeaderMenu);
}
