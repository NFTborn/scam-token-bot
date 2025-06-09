async function checkToken() {
  const tokenAddress = document.getElementById("tokenInput").value;
  const resultBox = document.getElementById("resultBox");

  resultBox.innerText = "⏳ Scanning...";

  try {
    const res = await fetch(`https://your-backend-url/check?address=${tokenAddress}`);
    const data = await res.json();
    resultBox.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    resultBox.innerText = "❌ Error fetching token data.";
  }
}
