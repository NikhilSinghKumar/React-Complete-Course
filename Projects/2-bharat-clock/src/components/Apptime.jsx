let date = new Date();
let currentTime = date.toLocaleTimeString();
let dateToday = date.toLocaleDateString();

setInterval(() => {
  return currentTime;
}, 1000);

function AppTime() {
  return (
    <div>
      {dateToday} {currentTime}
    </div>
  );
}

export default AppTime;
