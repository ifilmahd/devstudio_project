<!-- Chatbot UI HTML -->
<div id="chatbot">
  <div id="chatbotHeader">
    <h4>👋 Welcome to DevStudioAL</h4>
    <span id="closeChat" onclick="closeChat()">×</span>
  </div>
  <div id="chatbotBody">
    <div id="chatbox">
      <div class="message botMessage">Hello! I’m your assistant. How can I help you today?</div>
      <div class="quickReplies">
        <button onclick="quickReply('Tell me about your services')">📄 Our Services</button>
        <button onclick="quickReply('What are your prices?')">💲 Pricing</button>
        <button onclick="quickReply('Can I book a consultation?')">📅 Book Consultation</button>
      </div>
    </div>
  </div>
  <div id="userInput">
    <input type="text" id="inputText" placeholder="Type your message here...">
    <button id="sendBtn" onclick="sendMessage()">Send</button>
  </div>
</div>

<!-- Chatbot CSS -->
<style>
  #chatbot {
    position: fixed;
    bottom: 0;
    right: 20px;
    width: 350px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
    z-index: 1000;
  }

  #chatbotHeader {
    background-color: #007bff;
    color: white;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #chatbotBody {
    height: 300px;
    overflow-y: scroll;
    padding: 15px;
  }

  #chatbox {
    padding-bottom: 10px;
  }

  .message {
    margin-bottom: 15px;
  }

  .botMessage {
    background-color: #eef1f7;
    padding: 10px;
    border-radius: 10px;
    color: #333;
  }

  .userMessage {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 10px;
    text-align: right;
    align-self: flex-end;
  }

  .quickReplies {
    margin: 10px 0;
  }

  .quickReplies button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  #userInput {
    display: flex;
    padding: 10px;
    background-color: #f1f1f1;
  }

  #inputText {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  #sendBtn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
</style>

<!-- Chatbot JavaScript -->
<script>
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
</script>
