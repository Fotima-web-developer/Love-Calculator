function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names!");
    return;
  }

  const loveScore = Math.floor(Math.random() * 100) + 1; // Random number 1–100

  let message = "";

  if (loveScore > 80) {
    message = `😍 ${loveScore}% – You are a perfect match!`;
  } else if (loveScore > 50) {
    message = ` 😊 ${loveScore}% – There’s potential for love!`;
  } else if (loveScore > 30) {
    message = `😐 ${loveScore}% – It could work, but needs effort.`;
  } else {
    message = `💔 ${loveScore}% – Not looking great. Be careful!`;
  }

  document.getElementById("result").innerText = message;
}


