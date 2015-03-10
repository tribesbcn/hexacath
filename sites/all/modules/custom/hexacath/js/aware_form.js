(function ($) {
  Drupal.behaviors.aware_form = {
    attach: function (context, settings) {
      /* INITIAL CONFIG FOR STEMI AND NSTE-ACS GROUPS VIEW */
      $('.group-stemi-patients').hide();
	  $('.group-nste-acs-patients').hide();
	  if ($('#edit-field-clinical-presentation-und-stemi:checked').val() == 'STEMI') {
		  $('.group-stemi-patients').show();
      }
      if ($('#edit-field-clinical-presentation-und-nste-acs:checked').val() == 'NSTE-ACS') {
		  $('.group-nste-acs-patients').show();
      }
      // */
      /* TOOGLE VIEW FOR STEMI AND NSTE-ACS WHEN field_clinical_presentation CHANGES */
      $('#edit-field-clinical-presentation-und-stemi').change(function () {
    	  //$('#edit-field-stemi-presentation-und').prop('checked', true);
		  //$('#edit-field-nste-acs-presentation-und').prop('checked', false);
		  $('.group-stemi-patients').show();
		  $('.group-nste-acs-patients').hide();
      });
      $('#edit-field-clinical-presentation-und-nste-acs').change(function () {
    	  //$('#edit-field-nste-acs-presentation-und').prop('checked', true);
		  //$('#edit-field-stemi-presentation-und').prop('checked', false);
		  $('.group-nste-acs-patients').show();
		  $('.group-stemi-patients').hide();
      });
      /* UPDATE field_date WITH field_beginning_procedure VALUE WHEN SECOND CHANGES */
      $('#edit-field-beginning-of-the-procedure-und-0-value-datepicker-popup-0').change(function () {
    	  var date_value = $(this).val();
    	  //$('#edit-field-date-und-0-value-datepicker-popup-0').val(date_value);
    	  //$('#edit-field-date-und-0-value-date').prop('readonly', true);
    	  $('#edit-field-date-und-0-value-date').val(date_value);
    	  //alert(date_value);
      });
      /* DATES COMPARATION FOR MEDICATIONS SECTION TIME FIELDS */
      
    }
  };


})(jQuery);