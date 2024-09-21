document.addEventListener('DOMContentLoaded', function () {
   // Toggle the chatbot visibility
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none";  // Hide the toggle button when the chatbot is visible
        }
    }

    window.closeChat = function () {
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("chatToggleBtn").style.display = "block";  // Show the toggle button again when chatbot is closed
    }

    // Send message function
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

    // Add message to chatbox
    function addMessageToChatbox(messageType, messageText) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", messageType);
        messageDiv.textContent = messageText;
        document.getElementById("chatbox").appendChild(messageDiv);
        scrollToBottom();
    }

    // Scroll to bottom function
    function scrollToBottom() {
        let chatbox = document.getElementById("chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Quick reply function
    function quickReply(message) {
        document.getElementById("inputText").value = message;
        sendMessage();
    }

    // Generate bot reply
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

    // Add quick replies
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

    // Capture email form
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

    // Submit email function
    function submitEmail() {
        let email = document.getElementById("emailInput").value;
        if (email) {
            localStorage.setItem("userEmail", email);
            addMessageToChatbox("userMessage", email);
            addMessageToChatbox("botMessage", "Thank you! We'll get in touch with you soon.");
        }
    }
});
