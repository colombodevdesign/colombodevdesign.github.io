var App = function(){

    function documentReady(){
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            init();
        } else {
            document.addEventListener('DOMContentLoaded', init());
        }
    }

    function animate() {
        var controller = new ScrollMagic.Controller();

        var an1 = TweenMax.from(".saetta-img", 1.5, {top:"10%", right:"-20%", opacity: 0, scale: 0.5, ease: Power2.easeOut});
        var an2 = TweenMax.staggerFromTo(".single-mondo", 1, {x: -150, ease: Power2.easeOut},{ opacity:1, x: 0 }, 0.1);
        
        // imposto una timeline per le animazioni
        var timeline = new TimelineMax()
        .add(an2)
        .add(an1, "-=0.5");

        var scene = new ScrollMagic.Scene({
            triggerElement: ".wrp-mondi",
            reverse: false,
        })
        .setTween(timeline)
        .addTo(controller);

        TweenMax.from("#menu", 1.4 , { x: "-100%", opacity: 0, ease: Power2.easeOut});
        TweenMax.from("#logo", 1.4 , { opacity: 0, scale: 0});

        if(document.getElementById("page-home")){
            TweenMax.staggerFrom(".animate", 1, {y:"+=150", opacity:0, delay: 1, ease: Power2.easeOut}, 0.2);
        }else{
            var m2 = TweenMax.staggerFromTo(".uscita-megazine", 1, {x: -100, ease: Power2.easeOut},{ opacity:1, x: 0 }, 0.1);
            var m1 = TweenMax.from(".animate", 1 , { x: -100, opacity: 0, ease: Power2.easeOut, delay: .8 } );
            var timelineM = new TimelineMax()
            .add(m1)
            .add(m2, "-=0.5");

            var inM = TweenMax.from(".wrp-car img", 1.5 , { x: "-100%", y: "-50%", scale: 0, opacity: 0, ease: Power2.easeOut } );

            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".full-screen",
                reverse: false,
            })
            .setTween(inM)
            .addTo(controller);
        }
    }

    function getWidth() {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        );
    }

    function init() {
        console.log('Ehhh volevi!');
        // if(getWidth() > 767){
            // animate();
            TweenMax.staggerFrom(".sfera", 3, {scale: 0, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)}, 0.3);
        // }
    }

    return documentReady()
}()