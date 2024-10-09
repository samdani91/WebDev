import './App.css';
import ClockList from './Components/ClockList';
import Form from './Components/Form'
import Calculator from './Components/TempConverter/Calculator'
import Emoji from './Components/composition/Emoji'
import Bracket from './Components/composition/Bracket'
import Text from './Components/composition/Text'

function App() {
    // console.log('App component rendered')
    // const quantities = [1,2,3];
    return (
        <div>

            {/* <ClockList quantities={quantities} /> */}
            {/* <Form /> */}

            {/* <Calculator/> */}
            {/* <Text /> */}
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
        </div>
    );
}

export default App;
