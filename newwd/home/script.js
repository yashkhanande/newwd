document.addEventListener('DOMContentLoaded', function() {
    const eventContainer = document.getElementById('event-container');
  
    events.forEach(event => {
      const card = createEventCard(event.name, event.date, event.image);
      eventContainer.appendChild(card);
    });
  });
  
  function createEventCard(name, date, image) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <div class="card-info">
        <h2>${name}</h2>
        <p>Date: ${date}</p>
      </div>
    `;
    return card;
  }
  