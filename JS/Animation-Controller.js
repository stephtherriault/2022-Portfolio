'use strict';

console.log("javascript is running");

const callback = (entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting){
        //lets me know intersection code is working:
        console.log("onScreenObserver: intersection detected");
        //checks if intersecting On-Screen-Target is ALSO the element to be animated
        if (entry.target.classList.contains('Card-In') || entry.target.classList.contains('Simple-In') && !entry.target.classList.contains('Entered-Screen')){
          entry.target.classList.add('Entered-Screen');
        }
        //checks all children of the intersecting On-Screen-Target to see if they are the element to be animated
        let tempAddHolder = entry.target.querySelectorAll('.Card-In,.Simple-In');
        tempAddHolder.forEach(item => {
          if(!item.classList.contains('Entered-Screen')){
            item.classList.add('Entered-Screen');
          }
        });
      } else {
        //checks if intersecting On-Screen-Target is ALSO the element to be animated
        if (entry.target.classList.contains('Card-In')
        //|| entry.target.classList.contains('Simple-In')
        // Simple-ins are permanent once they've entered the screen
        && entry.target.classList.contains('Entered-Screen')){
          entry.target.classList.remove('Entered-Screen');
        }
        //checks all children of the intersecting On-Screen-Target to see if they are the element to be animated
        let tempRemoveHolder = entry.target.querySelectorAll('.Card-In');
        tempRemoveHolder.forEach(item => {
          if(item.classList.contains('Entered-Screen')){
            item.classList.remove('Entered-Screen');
          }
          if(item.classList.contains('Animation-Delay-Override-0')){
            item.classList.remove('Animation-Delay-Override-0');
          }
        });
      }
    }
  );
}

//threshold sets how much of the intersecting item needs to be on screen a threshold of 0.3 means intersecting items need to be 30% onscreen to trigger

let onScreenObserver = new IntersectionObserver(callback, {threshold:0.7});

const cardAnimationItems = document.querySelectorAll('.On-Screen-Target-For-Child-Cards');
cardAnimationItems.forEach(item => {
  onScreenObserver.observe(item);
});

const simpleInAnimationItems = document.querySelectorAll('.On-Screen-Target-For-Child-Simple-Ins');
simpleInAnimationItems.forEach(item => {
  onScreenObserver.observe(item);
});

const hoverableItems = document.querySelectorAll('.Hoverable');
hoverableItems.forEach(item => {
  item.addEventListener("mouseenter", function(event){
    if(!event.target.classList.contains('Animation-Delay-Override-0')){
      console.log("mouse entered hover area");
      event.target.classList.add('Animation-Delay-Override-0');
    }
  }, false);
});

/* code disabled for now, unsure of why it's not working.

const callbackMedia = (entries) => {
  entries.forEach(
    (entry) => {
      console.log("callbackMedia is being called");
      if (entry.isIntersecting && !entry.classList.contains('Image-Loaded') ){
        //lets me know intersection code is working:
        console.log("onScreenMediaObserver: intersection detected");
        entry.classList.add('Image-Loaded');
      }
    }
  );
}

let onScreenMediaObserver = new IntersectionObserver(callbackMedia, {threshold:0.7});

const mediaItems = document.images;

console.log("Code fails after this");

mediaItems.forEach(item => {
  onScreenMediaObserver.observe(item);
});
console.log("code fails before this");

*/
