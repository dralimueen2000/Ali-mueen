
const API_URL = "https://2a1e8b91-2aab-422c-b229-4d827993b226-00-3h0n5i70nh3qe.pike.replit.dev/api/chat";

document.getElementById("chat-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userInput = document.getElementById("user-input").value;
  const responseElement = document.getElementById("response");

  responseElement.textContent = "الرد: جارٍ المعالجة...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    responseElement.textContent = "الرد: " + data.reply;
  } catch (error) {
    responseElement.textContent = "الرد: حدث خطأ في الاتصال.";
    console.error("Error:", error);
  }
});
