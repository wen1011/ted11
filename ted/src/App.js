import './App.css'

function App() {
    return (
        <div>
            <span className="nes-text is-primary">Primary 哈哈哈</span>
            <span className="nes-text is-success">Success</span>
            <span className="nes-text is-warning">Warning</span>
            <span className="nes-text is-error">Error</span>
            <span className="nes-text is-disabled">Disabled</span>
            <a class="nes-btn" href="#">
                Normal
            </a>

            <button type="button" className="nes-btn is-primary">
                Primary
            </button>
            <button type="button" className="nes-btn is-success">
                Success
            </button>
            <button type="button" className="nes-btn is-warning">
                Warning
            </button>
            <button type="button" className="nes-btn is-error">
                Error
            </button>
            <button type="button" className="nes-btn is-disabled">
                Disabled
            </button>
            <br></br>
            <label>
                <input type="radio" className="nes-radio" name="answer" checked />
                <span>Yes</span>
            </label>

            <label>
                <input type="radio" className="nes-radio" name="answer" />
                <span>No</span>
            </label>
            <section className="icon-list">
                <i className="nes-mario"></i>
                <i className="nes-ash"></i>
                <i className="nes-pokeball"></i>
                <i className="nes-bulbasaur"></i>
                <i className="nes-charmander"></i>
                <i className="nes-squirtle"></i>
                <i className="nes-kirby"></i>
                <i className="nes-octocat animate"></i>
            </section>
        </div>
    )
}

export default App
