document.getElementById('getMessage').addEventListener('click', () => {
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('output').innerText = data.message;
      })
      .catch((error) => console.error('Oшибка:', error));
  });
  
  document.getElementById('echoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.getElementById('inputText').value;
    fetch('/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('echoOutput').innerText = data.echo;
      })
      .catch((error) => console.error('Oшибка:', error));
  });
  