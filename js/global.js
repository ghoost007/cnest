/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {

    }
  };
  $(document).ready(function(){
        var $searchToggler = $('#main-search-button');
        $searchToggler.on('click', function(){
            $(this).toggleClass('expanded');
            $('#expand-search').toggleClass('expanded');
        });
    });
})(jQuery, Drupal);
