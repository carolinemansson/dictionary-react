import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import love from "./love.PNG";

export default function Meaning(props) {
    return (
      <div className="meaning">
        <h3>
          {props.meaning.partOfSpeech}
          <img src={love} alt="love" className="love" />
        </h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
}