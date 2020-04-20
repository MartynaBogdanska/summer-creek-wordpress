<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>

<div class="wrapper" id="wrapper-footer">

	<div class="<?php echo esc_attr( $container ); ?>">

		<div class="row">

			<div class="col-md-12">

				<footer class="site-footer" id="colophon">

					<div class="site-info center">

						<?php //understrap_site_info(); ?>
						<p class="small">	&copy; 2020 Summer Creek. <a href="/polityka">Polityka Prywatności</a></p>

					</div><!-- .site-info -->

				</footer><!-- #colophon -->

			</div><!--col end -->

		</div><!-- row end -->

	</div><!-- container end -->

</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<!-- Preloader by MB -->
<div id="preload" style="">
	<div id="preload-content" style="">
		<div class="preload-spinner">
			<div class="loading-logo-wraper">
				<img src="/wp-content/themes/understrap/images/sc-symbol-gold.png" alt="">
			</div>
			<div class="spinner">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>
		</div>
	</div>
</div>

<?php wp_footer(); ?>

</body>

</html>

