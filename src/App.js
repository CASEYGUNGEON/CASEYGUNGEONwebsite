// import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Homepage from "./Homepage";
import Smokeyocity from "./smokeyocity/Smokeyocity";
import TextGame from "./textgame/TextGame";
import ImagePage from "./images/ImagePage";

function App() {
  return (
    <div>
		{
		<Router basename="/">
			<Routes>
				<Route exact path="/Smokeyocity" element={<Smokeyocity />} />
				<Route exact path="/images" element={<ImagePage />} />
				<Route exact path="/textgame" element={<TextGame />} />
				<Route exact path="*" element={<Homepage/>} />
			</Routes>
		</Router>
		}
	</div>
  );
}

export default App;
