// when it just loads, it shud start checking if any ad is there on youtube
window.onload = function () {
  setInterval(checkSkipButton, 500); // evrey half second it would check skip ad button presence
};

// actually checks that skip button
function checkSkipButton() {
  let skipAd = document.querySelector("button.ytp-ad-skip-button"); // suc ta
  if (skipAd !== null) {
    skipAd.click();
  }
}
