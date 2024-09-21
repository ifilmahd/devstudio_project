document.addEventListener('DOMContentLoaded', function () {
  function sendMessage() {
    let userMessage = document.getElementById("inputText").value;
    if (userMessage) {
      addMessageToChatbox("userMessage", userMessage);
      document.getElementById("inputText").value = "";

      setTimeout(() => {
        generateBotReply(userMessage);
      }, 800);
    }
  }

  function addMessageToChatbox(messageType, messageText) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", messageType);
    messageDiv.textContent = messageText;
    document.getElementById("chatbox").appendChild(messageDiv);
    scrollToBottom();
  }

  function scrollToBottom() {
    let chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function quickReply(message) {
    document.getElementById("inputText").value = message;
    sendMessage();
  }

  function generateBotReply(userMessage) {
    let botReply = "Sorry, I don't understand that. Can you please clarify?";
    
    if (userMessage.toLowerCase().includes("services")) {
      botReply = "We offer custom websites, design services, and e-commerce solutions! Here are more details:";
      addQuickReplies(["WordPress Development", "E-commerce", "UI/UX Design"]);
    } else if (userMessage.toLowerCase().includes("prices") || userMessage.toLowerCase().includes("pricing")) {
      botReply = "Our prices start from $500 for basic websites. Complex websites and e-commerce solutions have customized quotes.";
    } else if (userMessage.toLowerCase().includes("book")) {
      botReply = "To book a consultation, please provide your email:";
      captureEmailForm();
    } else if (userMessage.toLowerCase().includes("thank")) {
      botReply = "You're welcome! Let me know if you need further assistance.";
    }
    
    addMessageToChatbox("botMessage", botReply);
  }

  function addQuickReplies(options) {
    let quickReplyDiv = document.createElement("div");
    quickReplyDiv.classList.add("quickReplies");
    
    options.forEach(option => {
      let button = document.createElement("button");
      button.textContent = option;
      button.onclick = function() { quickReply(option); };
      quickReplyDiv.appendChild(button);
    });

    document.getElementById("chatbox").appendChild(quickReplyDiv);
    scrollToBottom();
  }

  function captureEmailForm() {
    let emailForm = `
      <div>
        <input type="email" id="emailInput" placeholder="Enter your email">
        <button onclick="submitEmail()">Submit</button>
      </div>
    `;
    let formDiv = document.createElement("div");
    formDiv.innerHTML = emailForm;
    document.getElementById("chatbox").appendChild(formDiv);
    scrollToBottom();
  }

  function submitEmail() {
    let email = document.getElementById("emailInput").value;
    if (email) {
      localStorage.setItem("userEmail", email);
      addMessageToChatbox("userMessage", email);
      addMessageToChatbox("botMessage", "Thank you! We'll get in touch with you soon.");
    }
  }

  function closeChat() {
    document.getElementById("chatbot").style.display = "none";
  }
});
