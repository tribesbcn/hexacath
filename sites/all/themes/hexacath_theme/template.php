<?php

/**
 * Override the date field we are themming
 */
function hexacath_theme_date_combo($variables) {
  //dpm($variables);
  return theme('form_element', $variables);
}
