import { useState } from "react";
import "./App.css";

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const handleDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff === 0) {
        return b.views - a.views;
      }
      return dateDiff;
    });
    
    setData(sorted);
    setSortBy("date");
  };

  const handleViews = () => {
    const sorted = [...data].sort((a, b) => {
      const viewsDiff = b.views - a.views;
      if (viewsDiff === 0) {
        return new Date(b.date) - new Date(a.date);
      }
      return viewsDiff;
    });
    
    setData(sorted);
    setSortBy("views");
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>
        Sort by Date
      </button>
      <button onClick={handleViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views.toLocaleString()}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;