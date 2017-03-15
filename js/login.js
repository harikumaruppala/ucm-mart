/*
	Project: UCM ISO Mart,
	Designed & Developed By:
		- Hari Kumar Uppala (700646627)
	Module: JavaScript file for Login.html.
 */
 
 $(document).ready(function(){
				$("#select").change(function(){
					var type=$("#select").val();
					if(type=='Accomadation')
					{
					$("#select1").html("<select class="select">
						  <option value="All Item Type">All Item Type</option>
						  <option value="For Sharing">For Sharing</option>
						  <option value="For rent">For rent</option>
						  <option value="For pg">For pg</option>
						  <option value="sales">sales</option>
						</select>");
					}
					else if(type=='carpooling')
					{
					$("select1").html("<select class="select">
						  <option value="All Item Type">All Item Type</option>
						  <option value="For Sharing">Oneway</option>
						  <option value="For rent">TwoWay</option>
						</select>");
					}
					else if(type=='TS State')
					{
					$("#select1").html("<select class="select">
						  <option value="All Item Type">All Item Type</option>
						  <option value="For Sharing">Music</option>
						  <option value="For rent">Computer</option>
						  <option value="For rent">Phone</option>
						</select>");
					}
					else{
					$("#select1").html("<select class="select">
						  <option value="All Item Type">All Item Type</option>
						  <option value="For Sharing">computer science</option>
						  <option value="For rent">Nursing</option>
						  <option value="For rent">Medical</option>
						</select>");
					}
					
				});
				
			});