import './App.css'

function App() {
    return (
        <div>
            <span className="nes-text is-primary">我們</span>
            <span className="nes-text is-success">要在</span>
            <span className="nes-text is-warning">哪裡</span>
            <span className="nes-text is-error">集合</span>
            <span className="nes-text is-disabled">?</span>
            <br></br>
            <label>
                <input type="radio" className="nes-radio" name="answer" checked />
                <span>Yes</span>
            </label>

            <label>
                <input type="radio" className="nes-radio" name="answer" />
                <span>No</span>
            </label>
            <br></br>

            <p class="nes-balloon from-left nes-pointer">要去吃好吃的~Friday night!</p>

            <br></br>
            <i className="nes-kirby"></i>
            <i className="nes-octocat animate"></i>
        </div>
    )
}

export default App
