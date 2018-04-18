/* ==========================================================================
   parallax.js - beeback.io
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    var scene1 = document.getElementById('scene1');
    var parallax1 = new Parallax(scene1, {
        relativeInput: true,
        clipRelativeInput: false,
        hoverOnly: true,
        frictionX: 0.1,
        frictionY: 0.1,
        limitX: false,
        limitY: false,
        invertX: false,
        invertY: true,
        scalarX: -20,
        scalarY: -20
    });

    var scene2 = document.getElementById('scene2');
    var parallax2 = new Parallax(scene2, {
        scalarX: 20,
        scalarY: 30
    });

    var scene3 = document.getElementById('scene3');
    var parallax3 = new Parallax(scene3, {
        scalarX: -10,
        scalarY: 20
    });

    var scene4 = document.getElementById('scene4');
    var parallax4 = new Parallax(scene4, {
        scalarX: 15,
        scalarY: -25
    });

    var scene5 = document.getElementById('scene5');
    var parallax5 = new Parallax(scene5, {
        scalarX: -40,
        scalarY: 30
    });

    var scene11 = document.getElementById('scene11');
    var parallax11 = new Parallax(scene11, {
        scalarX: -40,
        scalarY: -40
    });
});
