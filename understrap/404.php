<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

$container = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="error-404-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content" tabindex="-1">

		<div class="row">

			<div class="col-md-12 content-area" id="primary">

				<main class="site-main" id="main">

					<section class="error-404 not-found">

						<!-- <header class="page-header">

							<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'understrap' ); ?></h1>

						</header> -->

						<div class="page-content">

							<div id="clouds">
								<div class="cloud x1"></div>
								<div class="cloud x1_5"></div>
								<div class="cloud x2"></div>
								<div class="cloud x3"></div>
								<div class="cloud x4"></div>
								<div class="cloud x5"></div>
							</div>

							<div id="error-msg">
								<div class="_404">404</div>
								<hr>
								<h1 class="h2 mb-5"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'understrap' ); ?></h1>
								<p><a class="btn btn-outline-light" href="/"><i class="fa fa-arrow-circle-left"></i> HOME</a></p>
							</div>

						</div><!-- .page-content -->

					</section><!-- .error-404 -->

				</main><!-- #main -->

			</div><!-- #primary -->

		</div><!-- .row -->

	</div><!-- #content -->

</div><!-- #error-404-wrapper -->

<?php get_footer(); ?>
