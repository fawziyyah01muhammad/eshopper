// ---------- JavaScript for toggle Menu
var checkmenu = document.getElementById("checkmenu")  
	function showMenu(){
		checkmenu.style.right = "0";
	}
	function hideMenu(){
		checkmenu.style.right = "-200px";
	}

    // ---------- JavaScript for dropdown-----------
    
        function dropDown() {
            document.getElementById("dropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  // openDropdown.classList.remove('show');
                }
              }
            }
          }



          // -----------JavaScript for addition and substaction of cart -----------
          
    