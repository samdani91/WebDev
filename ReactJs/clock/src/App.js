import './App.css';
import ClockList from './Components/ClockList';
import Form from './Components/Form'
import Calculator from './Components/TempConverter/Calculator'
import Emoji from './Components/composition/Emoji'
import Bracket from './Components/composition/Bracket'
import Text from './Components/composition/Text'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import ClickCounter2 from './Components/ClickCounter2'
import HoverCounter2 from './Components/HoverCounter2'
import Counter from './Components/Counter'

function App() {
    // console.log('App component rendered')
    // const quantities = [1,2,3];
    return (
        <div>

            {/* <ClockList quantities={quantities} /> */}
            {/* <Form /> */}

            {/* <Calculator/> */}
            {/* <Text /> */}

            {/* <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji> */}

            {/* <ClickCounter/>
            <HoverCounter/> */}

            {/* <ClickCounter2/>
            <HoverCounter2/> */}
            
            <Counter render={(count,incrementCount)=>(
                <ClickCounter2 count={count} incrementCount={incrementCount}/>
            )}/>
            <Counter render={(count,incrementCount)=>(
                <HoverCounter2 count={count} incrementCount={incrementCount}/>
            )}/>


        </div>
    );
}

export default App;
