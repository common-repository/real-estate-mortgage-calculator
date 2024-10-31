document.write("<script>  \n");

function principal_calc(){
	
	var principal = document.principal.p.value;
	var interest  = document.principal.i.value;
	var noy 	  = document.principal.noy.value;
	
	if (principal == '') { principal = '0'; }
	if (interest == '')  { interest = '0'; }
	if (noy == '') 		 { noy = '0'; }
	
	if (principal == "0"){ 
		var display = 'Please fill "Loan Amount" field.'; 
		document.getElementById("status").innerHTML = display; 
		}
		
	if (interest == "0"){ 
		var display = 'Please fill "Interest Rate" field.'; 
		document.getElementById("status").innerHTML = display; 
		}
	
	if (noy == "0"){ 
		var display = 'Please fill "Length of Loan" field.'; 
		document.getElementById("status").innerHTML = display; 
		}
		
	if (principal != "0" && interest != "0" && noy != "0" ){ 
		var str = principal 
		var a = (str.replace(/,/, "")) 
		var t_years = eval(noy*12) 
		var t_interest = eval(interest/1200); 
		var t = eval(1.0 /(Math.pow((1+t_interest),t_years))); 
			
			if(t < 1){ 
				var payment = eval((a*t_interest)/(1-t)); 
			} else { 
				var payment = eval(amt/$t_years); 
			} 
			
		var total = payment.toFixed(2); 
		var display ='Your <span  style=\"font-weight: bold; color: #339900;\">Monthly Payment</span> is <span style=\"font-weight: bold; color: #155776;\">$'+total+'</span> a <span style=\"font-weight: bold; color: #339900;\">Month</span>.'; 
		
		document.getElementById("status").innerHTML = display; 
	
	}
		
}
document.write("</script>  \n");


 document.write("<form id=\"principal\" name=\"principal\" method=\"post\" action=\"\"> \n ");
 document.write("<table border=\"0\" cellpadding=\"5\" align=\"center\" cellspacing=\"0\" width=\"160px\" style=\"font-size: 2em; font-family: Arial, Helvetica, sans-serif; background-color: #f4f7f9; border-bottom: 1px solid #fff; font-size: .75em;\"> \n ");
 document.write("<tr><td style=\"background-color: #000; border-bottom: 1px solid #fff; font-size:13px;text-align:center;font-weight: 700; color: #fff;\">Mortgage Calculator</td> \n ");
 document.write("</tr><tr> \n ");
 document.write("<td width=\"40%\"><div align=\"center\"><strong>Loan Amount ($)<br /> \n ");
 document.write("</strong> \n ");
 document.write("<input name=\"p\" type=\"text\" id=\"p\" value=\"250,000\" size=\"10\" onchange=\"javascript:principal_calc();\" /> \n ");
 document.write("</div></td> \n ");
 document.write("</tr> \n ");
 document.write("<tr> \n ");
 document.write("<td width=\"40%\"><div align=\"center\"><strong>Interest Rate (%)<br /> \n ");
 document.write("</strong> \n ");
 document.write("<input name=\"i\" type=\"text\" id=\"i\" value=\"5.00\" size=\"10\" onchange=\"javascript:principal_calc();\" /> \n ");
 document.write("</div></td> \n ");
 document.write("</tr> \n ");
 document.write("<tr> \n ");
 document.write("<td width=\"40%\"><div align=\"center\"><strong>Length of Loan (Yrs)<br /> \n ");
 document.write("</strong> \n ");
 document.write("<input name=\"noy\" type=\"text\" id=\"noy\" value=\"30\" size=\"3\" maxlength=\"3\" onchange=\"javascript:principal_calc();\" /> \n ");
 document.write("</div></td> \n ");
 document.write("</tr> \n ");
 document.write("<tr> \n ");
 document.write("<td> \n ");
 document.write("<div align=\"center\"> \n ");
 document.write("<input type=\"button\" name=\"button\" id=\"btn\" value=\"Calculate\" onclick=\"javascript:principal_calc();\" /> \n ");
 document.write("</div></td></tr> \n ");
 document.write("<tr> \n ");
 document.write("<td><div id=\"status\"></div></td> \n ");
 document.write("</tr> </table></form> \n ");