<?php
add_theme_support( 'post-thumbnails' );

// rest api thumbnailの内容を追加
add_action( 'rest_api_init', 'api_add_fields' );
function api_add_fields() {
  register_rest_field( 'post',
    'thumbnail_url',
     array(
      'get_callback'    => 'register_fields',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}
function register_fields( $post, $name ) {
  return get_the_post_thumbnail_url($post['id'], 'full');
}

// ローカルでアプリケーションパスワードを有効化
define('WP_ENVIRONMENT_TYPE', 'local');