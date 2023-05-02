
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    _   __                               __           __                                                           
   / | / /  ____ _  _____   ____ _  ____/ /  _____   / /_   ___    _____   _____  ___    _____ _   __  ___    _____
  /  |/ /  / __ `/ / ___/  / __ `/ / __  /  / ___/  / __ \ / _ \  / ___/  / ___/ / _ \  / ___/| | / / / _ \  / ___/
 / /|  /  / /_/ / / /__   / /_/ / / /_/ /  / /__   / / / //  __/ (__  )  (__  ) /  __/ / /    | |/ / /  __/ / /    
/_/ |_/   \__,_/  \___/   \__, /  \__,_/   \___/  /_/ /_/ \___/ /____/  /____/  \___/ /_/     |___/  \___/ /_/     
                         /____/                                                                                    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
