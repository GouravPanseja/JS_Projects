//the updateCounter function on its first call sets the target and increment
//value then as the if cond is satisfied the display value is updated to value = incr
// after that a setTimout API is set that repeats this updateCounter func every 10mili
// now this func gets called back in loops of time gap 10ms untill display value gets equal to
// target. 
// same thing is repeated for all display elements
// note that here at every loop a new settimout api is made for the same element that overlaps

const displays = document.querySelectorAll(".display");

displays.forEach((display) => {
  display.innerHTML = 0;

  const updateCounter = () => {
    const target = Number(display.getAttribute("target")); // get the target value

    const initial_count = +display.innerHTML;

    const incr = target / 100;

    if (initial_count < target) {
      display.innerHTML = `${Math.round(initial_count + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      display.innerHTML = target;
    }
  };

  updateCounter();
});
