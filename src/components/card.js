const cE = (elemType) => document.createElement(elemType);
const clAdd = (elemArray,classArray) => elemArray.forEach( (val,ind) => val.classList.add(classArray[ind]));

const Card = (article) => {
  const { headline, authorPhoto, authorName } = article;
  const cardDiv = cE("div"), headlineDiv = cE("div"), authorDiv = cE("div"), imgDiv = cE("div");
  clAdd( [cardDiv, cardDiv, headlineDiv, authorDiv, imgDiv], ["card", `${authorName.slice(0,3)}`, "headline", "author", "img-container"]);
  
  cardDiv.appendChild(headlineDiv).textContent = `${headline}`;
  cardDiv.appendChild(authorDiv).appendChild(imgDiv).appendChild(cE("img")).src = `${authorPhoto}`;
  authorDiv.appendChild(cE("span")).textContent = `By ${authorName}`;
  return cardDiv;
}

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardAppender = (selector) => {
  const getArticles = async (url) => {
    let data = await fetch(url);
    return data.json();
  }
  getArticles("http://localhost:5000/api/articles").then(result => Object.values(result.articles).reduce( (a,b) => a.concat(b)).forEach(article => document.querySelector(selector).appendChild(Card(article))));
}
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
