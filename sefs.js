$(document).ready(function() {
    function loadCSS(filename){ 
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("href", filename);
        document.head.appendChild(file);
    }

    //just call a function to load your CSS
    //this path should be relative your HTML location
    loadCSS("https://monash-eng-engine.github.io/moodle-sandbox/sefs.css");

    let sefHTML = `
        <div class='my-3 eng-sefs'>
            <a href='https://monash.syd1.qualtrics.com/jfe/form/SV_cROlli6qF2gUjcy' title='Engineering Student Experience Feedback Survey (SEFS)'>
                <img src='https://enigmathic.github.io/moodle-sandbox/SEFS-S1-2026-Header-Purple.jpg' alt='Student Experience Feedback Survey (SEFS). The mid-semester feedback forum for your engineering units. Closes 29 March.' width="100%"/>
                <img src='https://enigmathic.github.io/moodle-sandbox/SEFS-S1-2026-Footer-Purple.jpg' alt='Click here to complete the Engineering Student Experience Feedback Survey (SEFS) for a chance to win one of 5 100 dollar vourchers' width="100%"/>
            </a>
        </div>
    `;
    $(sefHTML).insertAfter("div.course-content > ul#mst-navigation");
});

