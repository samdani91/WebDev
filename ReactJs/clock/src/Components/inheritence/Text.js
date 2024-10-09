import Emoji from './Emoji';

export default class Text extends Emoji{
    constructor(props){
        super(props);
    }

    render(){
        const newText = this.addEmoji('I am JavaScript','💜' );
        return super.render(newText);
    }
}