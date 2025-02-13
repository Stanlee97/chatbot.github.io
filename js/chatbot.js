function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Simulate chatbot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';

        const inputLower = userInput.toLowerCase();
        
        // Conditions for different medical issues
        if (inputLower.includes('headache')) {
            botMessage.textContent = 'For headaches, rest and hydration can help. If the pain persists, consider seeing a doctor.';
        } else if (inputLower.includes('fever')) {
            botMessage.textContent = 'A fever could be a sign of an infection. Drink plenty of fluids and monitor your temperature.';
        } else if (inputLower.includes('cold')) {
            botMessage.textContent = 'For a cold, rest, hydration, and over-the-counter medications can help. If symptoms persist, see a doctor.';
        } else if (inputLower.includes('stomach ache')) {
            botMessage.textContent = 'For stomach aches, avoid solid food for a few hours and drink clear fluids. Consult a doctor if pain persists.';
        } else if (inputLower.includes('cough')) {
            botMessage.textContent = 'For a cough, stay hydrated, try honey with warm water, and use cough syrup. If it lasts more than a week, see a doctor.';
        } else if (inputLower.includes('sore throat')) {
            botMessage.textContent = 'For a sore throat, try saltwater gargles, lozenges, and warm fluids. If pain is severe, consult a doctor.';
        } else if (inputLower.includes('diarrhea')) {
            botMessage.textContent = 'For diarrhea, drink plenty of fluids to avoid dehydration. If it persists more than two days, contact a healthcare provider.';
        } else if (inputLower.includes('back pain')) {
            botMessage.textContent = 'For back pain, rest, gentle stretching, and over-the-counter pain relievers can help. If the pain is severe, consult a doctor.';
        } else if (inputLower.includes('nausea')) {
            botMessage.textContent = 'For nausea, try ginger, avoid strong smells, and eat bland foods. If symptoms persist, see a doctor.';
        } else {
            botMessage.textContent = 'I am not sure about that. Please consult a medical professional for more accurate information.';
        }
        
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
    }, 1000);

    document.getElementById('user-input').value = ''; // Clear input field
}

// Function to clear the chat box
function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // Remove all messages
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.textContent = 'Hello! How can I assist you today?';
    chatBox.appendChild(botMessage);
}
