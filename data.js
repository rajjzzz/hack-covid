var cards = [{
        name: "Non Profit -1",
        need: "masks",
        category: "health3",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    },
    {
        name: "Non Profit-2",
        need: "masks",
        category: "health",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    },
    {
        name: "Non Profit-3",
        need: "masks",
        category: "health",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    },
    {
        name: "Non Profit-4",
        need: "masks",
        category: "health2",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    },
    {
        name: "Non Profit-5",
        need: "masks",
        category: "health3",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    },
    {
        name: "Non Profit-6",
        need: "masks",
        category: "health",
        quantity: 50,
        websiteLink: "abc.com",
        description: "This is nonprofit"
    }
]

let addCard = function (card) {
    document.getElementById("card-id").innerHTML += `
  	<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="sampleImg.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title"><strong>${card.name}</strong></h5>
          <p class="card-text">${card.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <hr>
          <li class="list-group-item">Need: ${card.need}</li>
          <li class="list-group-item">Quantity: ${card.quantity}</li>
        </ul>
        <div class="card-body">
          <a href="${card.websiteLink}" class="btn btn-primary">Website link</a>
          <a href="mailto:sophiesajnani@bellevuebites.com" class="btn btn-primary">Email us</a>
        </div>
      </div>
      <br>
  `;
}

let filterArray = function(category) {

	// Filtering the array on the basis of card.category === category
  let filteredArray = cards.filter((card) => {
    return card.category === category
  })
  
  // Emptying the #app container
  document.getElementById("card-id").innerHTML = ""
  
  // Updating the container with the filtered Array
  updateContainer(filteredArray);
  
}

let updateContainer = function(arr) {
	arr.forEach((card) => {
    addCard(card);
  })
}

updateContainer(cards);

