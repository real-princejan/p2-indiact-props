import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H2 } from "./components/H2";
import { Image } from "./components/Image";

function App() {  

  return (
    <>
      <H2 text="P2 INDIVIDUAL ACTIVITY" />
      <hr />
      <div className="container">
        <div className="grid">
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="./21.jpg" width={200} height={200} variant="rounded" />
          <Image src="./22.jpg" width={200} height={200} variant="rounded" />
        </div>
      </div>
      <div className="container">
        <div className="grid input">
          <Input className="input1" placeholder="Input something..."/>
          <Input className="input1" placeholder="Input something..."/>
          <Input className="input2" placeholder="Description..." />
          <Input className="input2" placeholder="Description..."/>
        </div>
      </div>
      <Button label="Cancel" variant="button1"/>
      <Button label="Submit" variant="button2"/>
      
    </>
  );
}

export default App;


