const openai = new OpenAI(api_key);

function sendMessage() {
    // Get the user's message from the input field
    const message = $('#input').val();
    
    // Send the message to the OpenAI API and receive a response
    openai.complete({
      engine: 'davinci',
      prompt: message,
      max_tokens: 150,
      n: 1,
      temperature: 0.5,
      stop: '\n'
    }).then(response => {
      const text = response.data.choices[0].text;
      
      // Display the response in the chat window
      $('#output').append(`<div><strong>You:</strong> ${message}</div>`);
      $('#output').append(`<div><strong>Chatbot:</strong> ${text}</div>`);
      
      // Clear the input field
      $('#input').val('');
    });
  }
  
  $('#submit').on('click', sendMessage);
