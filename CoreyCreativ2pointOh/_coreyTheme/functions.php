<?php

// Add scripts and stylesheets
function startwordpress_scripts() {
	wp_enqueue_style( 'normalize', get_template_directory_uri() . '/css/normalize.min.css', array(), '4.2.0' );
	wp_enqueue_style( 'blog', get_template_directory_uri() . '/css/blog.css' );
}

add_action( 'wp_enqueue_scripts', 'startwordpress_scripts' );