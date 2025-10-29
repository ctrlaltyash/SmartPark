// --- DOM references ---
const car = document.getElementById("car");
const availableCountEl = document.getElementById("available-count");
const paths = [
  document.getElementById("slot1Path"),
  document.getElementById("slot2Path"),
  document.getElementById("slot3Path"),
  document.getElementById("slot4Path")
];

let slotData = [0,0,0,0]; // 0 = free, 1 = occupied

// --- Dashboard update ---
function updateDashboard(){
  availableCountEl.textContent = slotData.filter(s=>s===0).length;
}

// --- Move car along SVG path ---
function driveToSlot(slotNum){
  if(slotData[slotNum]===1) return;
  slotData[slotNum]=1;
  updateDashboard();

  const path = paths[slotNum];
  const pathLength = path.getTotalLength();

  let progress = 0; // 0 to 1
  const duration = 5000; // ms

  function animate(){
    if(progress > 1) return;
    const point = path.getPointAtLength(pathLength * progress);

    // Get tangent for rotation
    const nextPoint = path.getPointAtLength(pathLength * Math.min(progress + 0.01, 1));
    const dx = nextPoint.x - point.x;
    const dy = nextPoint.y - point.y;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    car.style.transform = `translate(${point.x - 50}px, ${point.y - 25}px) rotate(${angle}deg)`; // car offset center
    progress += 1 / (duration/16); // 16ms per frame ~60fps
    requestAnimationFrame(animate);
  }

  animate();
}

// --- Demo simulation ---
function simulateTraffic(){
  const action = Math.random()<0.6?"arrive":"leave";

  if(action==="arrive"){
    const freeSlot = slotData.findIndex(s=>s===0);
    if(freeSlot!==-1) driveToSlot(freeSlot);
  } else {
    const occupied = slotData.map((v,i)=>v===1?i:-1).filter(i=>i!==-1);
    if(occupied.length>0){
      const slot = occupied[Math.floor(Math.random()*occupied.length)];
      slotData[slot]=0;
      updateDashboard();
    }
  }
}

updateDashboard();
setInterval(simulateTraffic, 7000);
