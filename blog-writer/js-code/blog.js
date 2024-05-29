// Get references to HTML elements
const postList = document.querySelector('#post-list');
const submitBtn = document.querySelector('#submit-btn');

// Load posts from local storage on page load
window.addEventListener('load', () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  for (const post of posts) {
    addPost(post);
  }
});

// Add event listener to "Publish" button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get the values of the input fields
  const title = document.querySelector('#title').value || 'No Title';
  const author = document.querySelector('#author').value || 'Anonymous';
  const content = document.querySelector('#content').value;
  
  // Check if there is any content
  if (content.trim() === '') {
    return;
  }
  
  // Create a new post object
  const post = {
    title,
    author,
    content,
    date: new Date()
  };
  
  // Add the new post to the page
  addPost(post);
  
  // Save the posts to local storage
  savePosts();
  
  // Clear the form
  document.querySelector('form').reset();
});

// Function to add a new post to the page
function addPost(post) {
  // Create HTML elements for the new post
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  const title = document.createElement('h3');
  title.textContent = post.title;
  const meta = document.createElement('p');
  meta.classList.add('meta');
  meta.textContent = `By ${post.author} on ${post.date.toLocaleDateString()}`;
  const content = document.createElement('p');
  content.textContent = post.content;
  
  // Add the new post to the page
  postDiv.appendChild(title);
  postDiv.appendChild(meta);
  postDiv.appendChild(content);
  postList.appendChild(postDiv);
}

// Function to save the posts to local storage
function savePosts() {
  const posts = Array.from(postList.children).map(post => {
    return {
      title: post.querySelector('h3').textContent,
      author: post.querySelector('.meta').textContent.split(' ')[1],
      content: post.querySelector('p:last-of-type').textContent,
      date: new Date(post.querySelector('.meta').textContent.split(' ')[3])
    }
  });
  localStorage.setItem('posts', JSON.stringify(posts));
}
