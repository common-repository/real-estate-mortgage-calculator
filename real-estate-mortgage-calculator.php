<?php
/*
Plugin Name: Real Estate Mortgage Calculator
Plugin URI: http://www.relocals.com/tools.html
Description: Wordpress Widget plugin enabling a simple Real Estate Mortgage Calculator.
Author: RELOCALS.com
Version: 1.0
Author URI: http://www.relocals.com

*/

// We're putting the plugin's functions inside the init function to ensure the
// required Sidebar Widget functions are available.
  
  function widget_relocalsplugin_init() 
	  {
	  /* Your custom code starts here */
	  /* ---------------------------- */
	  
	  /* Your Function */
	  function relocalsplugin()
	  {
		  
		  /* Our Code ----------------- */ 

$basesdir = $_SERVER["PHP_SELF"];
$fullURL1 = "http://" . $_SERVER['HTTP_HOST'] . dirname($_SERVER['SCRIPT_NAME']);
echo '<div style="width:100%;" align="center">';
echo '<div style="width:180px" align="center">';
echo '<script src="';echo $fullURL1;echo '/wp-content/plugins/real-estate-mortgage-calculator/relocalsmortgagecalculator.js"></script>';
echo '<div></div>';

	  
		  /* End of Your Code ---------- */
		  
	  }
	  
	  /* -------------------------- */
	  /* Your custom code ends here */
	  
	  function widget_relocalsplugin($args) 
	  {
	  
	  	  // Collect our widget's options, or define their defaults.
		  $options = get_option('widget_relocalsplugin');
		  //$title = empty($options['title']) ? __('TITLE') : $options['title'];
			
		  $title = $options['title'];

		  extract($args);

		  relocalsplugin();

		  if($title=='yes'){echo "<div align=\"center\" style=\"width:200px;text-align:center;\"><font color=\"#000000\" size=\"1\">Powered by <a href=\"http://www.relocals.com/tools.html\" target=\"_blank\">RELocals</a></font></div><br /><br />";}	
	  }  
	  
	  // This is the function that outputs the form to let users edit
	  // the widget's title. It's an optional feature, but were're doing 
	  // it all for you so why not!
	  
	  function widget_relocalsplugin_control()
	  {
	  
		// Collect our widget options.
		$options = $newoptions = get_option('widget_relocalsplugin');
		
		// This is for handing the control form submission.
		if ( $_POST['widget_relocalsplugin-submit'] ) 
		{
			// Clean up control form submission options
//			$newoptions['title'] = strip_tags(stripslashes($_POST['widget_relocalsplugin-title']));
$newoptions['title'] = $_POST['widget_relocalsplugin-title'];
		}
				
		// If original widget options do not match control form
		// submission options, update them.
		if ( $options != $newoptions ) 
		{
			$options = $newoptions;
			update_option('widget_relocalsplugin', $options);
		}
						
		$title = $options['title'];

		echo '<p><label for="relocalsplugin-title1">';
		echo 'Give Credit to Plugin Author: <input name="widget_relocalsplugin-title" value="yes" type="checkbox" ';if($title=='yes'){echo 'checked';}echo " />";
		echo '</label></p>';
		echo '<font size=1>* giving credit above, will add a small link to plugin developer on bottom of widget.</font>';
		echo '<input type="hidden" id="widget_relocalsplugin-submit" name="widget_relocalsplugin-submit" value="1" />';
	  }
	  
	  
	// This registers the widget.
    register_sidebar_widget('Real Estate Mortgage Calculator', 'widget_relocalsplugin');
	
	// This registers the (optional!) widget control form.
    register_widget_control('Real Estate Mortgage Calculator', 'widget_relocalsplugin_control');
	
  }
    
  add_action('plugins_loaded', 'widget_relocalsplugin_init');

?>