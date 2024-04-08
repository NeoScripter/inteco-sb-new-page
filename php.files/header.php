<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="yandex-verification" content="3ef67d669f5b7d85" />
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="nav-outer-wrapper centering">
    <div class="nav-wrapper">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Inteco logo" class="main-logo">
        <nav class="primary-nav">
            <?php 
            wp_nav_menu([
                'menu' => 'header-menu', 
                'container' => '',
                'items_wrap' => '<ul class="primary-nav">%3$s</ul>',
                'container_class' => 'menu'
            ]); ?>
        </nav>
        <div class="links-wrapper">
            <div class="link-group-left">
                <div class="flex-nav-subgroup margin-bottom">
                    <a href="tel:+7 (499) 322-41-88" class="nav-link"><img src="assets/nav/phone_dark_fill.png" alt="иконка звонка" class="cnts-small-icon"></a>
                    <a href="tel:+7 (499) 322-41-88" class="nav-link">+7 (499) 322-41-88</a>
                </div>
                <div class="flex-nav-subgroup">
                    <a href="tel:+7 (926) 961-58-50" class="nav-link"><img src="assets/nav/phone_light_fill.png" alt="иконка звонка" class="cnts-small-icon"></a>
                    <a href="tel:+7 (926) 961-58-50" class="nav-link">+7 (926) 961-58-50</a>
                </div>
            </div>
            <div class="link-group-right">
                <div class="flex-nav-subgroup">
                    <a href="mailto:info@inteco-sb.ru" class="nav-link"><img src="assets/nav/message_fill.png" alt="иконка сообщения" class="cnts-small-icon"></a>
                    <a href="mailto:info@inteco-sb.ru" class="nav-link">info@inteco-sb.ru</a>
                </div>
                <div class="nav-large-icons-wrapper">
                    <div class="nav-large-icons-subwrapper">
                        <a href="#" class="nav-large-icon"><img src="assets/nav/telegram-icon.png" alt="Иконка телеграма"></a>
                        <a href="#" class="nav-large-icon"><img src="assets/nav/whatsapp-icon.png" alt="Иконка вотсапа"></a>
                    </div>
                    <p class="nav-emerging-par">Напишите нам</p>
                </div>
            </div>
        </div>
    </div>
</header>
