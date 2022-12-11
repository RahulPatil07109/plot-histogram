import React, { useState } from "react";
import Histogram from "./Histogram";
import "./Chart.css";
const Charts = () => {
  // Stores the fetched data
  const [wordData, setWordData] = useState({});
  // Sets Once we get the data
  const [haveData, setHaveData] = useState(false);

  // Function fetches text from "https://www.terriblytinytales.com/test.txt"
  const fetchText = async () => {
    try {
      const response = await fetch(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = await response.text();

      // splits the text into array
      const words = text.split(" ");
      const wordCounts = new Map();
      // finds count of each word
      for (const word of words) {
        if (wordCounts.has(word)) {
          wordCounts.set(word, wordCounts.get(word) + 1);
        } else {
          wordCounts.set(word, 1);
        }
      }
      // sorts in descending order
      const sortedWords = [...wordCounts].sort((a, b) => b[1] - a[1]);
      // Gets 20 most occurring words.
      const first20Words = sortedWords.splice(0, 20);
      const obj = {
        labels: first20Words.map((data) => data[0]),
        datasets: [
          {
            label: "Word Count",
            data: first20Words.map((data) => data[1]),
          },
        ],
      };
      setWordData(obj);
      setHaveData(true);
    } catch (error) {
      // handle any errors here
      setHaveData(false);
      console.log(error);
    }
  };

  return (
    <>
      <div id='container'>
        <button class='button-28' onClick={fetchText}>
          Submit
        </button>
      </div>
      {haveData && (
        <div id='container'>
          <div class='histogram'>
            <Histogram chartData={wordData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Charts;
