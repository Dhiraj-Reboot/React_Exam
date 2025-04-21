 <h1>📰 News Geek - React App</h1>

  <p><strong>News Geek</strong> is a simple React application that fetches and displays news articles from a JSON server. Users can filter articles by category using the navigation bar.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Fetches articles from a local JSON server</li>
    <li>Category-based filtering with active highlight</li>
    <li>Responsive grid layout for articles</li>
    <li>Basic styling via CSS</li>
  </ul>

  <h1>SreenShot</h1>
  
  ![Reactimg2](https://github.com/user-attachments/assets/23c87f6a-63db-4181-bb2a-25690f188483)

  
![Reactimg1](https://github.com/user-attachments/assets/37d3d791-0809-4fc1-94f5-b1abbdde9680)



  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li>React.js</li>
    <li>Axios</li>
    <li>JSON Server (for mock API)</li>
  </ul>

  <h2>📦 Installation</h2>
  <pre><code>npm install</code></pre>

  <h2>▶️ Running the App</h2>
  <p>Start the JSON server (you need a <code>db.json</code> file):</p>
  <pre><code>npx json-server --watch db.json --port 3000</code></pre>

  <p>Then start the React app:</p>
  <pre><code>npm start</code></pre>

  <h2>🧪 Sample db.json Structure</h2>
  <pre><code>{
  "articles": [
    {
      "id": 1,
      "title": "AI Revolution",
      "category": "Technology",
      "image": "https://example.com/image.jpg",
      "content": "Artificial Intelligence is changing the world..."
    },
    {
      "id": 2,
      "title": "Football Finals",
      "category": "Sports",
      "image": "https://example.com/image2.jpg",
      "content": "The finals were thrilling with a last-minute goal..."
    }
  ]
}
</code></pre>

  <h2>📁 File Structure</h2>
  <ul>
    <li><code>App.js</code> - Main component with navbar and article rendering</li>
    <li><code>App.css</code> - Styling for the layout and elements</li>
    <li><code>db.json</code> - Local mock database for articles</li>
  </ul>

  <h2>📬 Contact</h2>
  <p>For any questions or suggestions, feel free to reach out via your preferred channel!</p>
