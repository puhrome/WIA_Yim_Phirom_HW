//JS Script for FullPage video
$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        afterRender: function(){


            //playing the video
            $('video').get(0).play();
        }
    });
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 1000
    });

});

$(document).ready(function(){
    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',

        //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });

});