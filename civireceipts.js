$(function() {
    $('input#SendFreshEmailBox').click(clickall);

    // added this code for click all checkboxes functionality,
    // since the clickall() function was not working.
    $("input[name=SendFreshEmailBox]").click(function() {
        var checked = this.checked;
        $("input[ @name ^= 'sendemailto_' ]" ).each(function() {
            this.checked = checked;
        });
    });
});
function clickall(){
    $("input[ @name ^= 'sendemailto_' ]" ).attr('checked',$('#SendFreshEmailBox').attr('checked'));
  }

