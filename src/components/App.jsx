import React from "react";
import emojibase from "../emojibase";
import Entry from "./Entry";
import Footer from "./Footer";


function createEntry(emojix)
{
    return <Entry 
        key={emojix.id}
        emoji={emojix.emoji}
        name={emojix.name}
        desc={emojix.meaning}
    />
}



function App()
{
    return (<div>
    <h1>
      <span>EmoDictionary</span>
    </h1>
    <dl className="dictionary">
     {emojibase.map(createEntry)}
    </dl> 
    <Footer/>
  </div>
);
}

export default App;