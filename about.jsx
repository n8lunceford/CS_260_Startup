function About() {
    return (
        <div>
            <h1>About Our Project</h1>
            <section>
                <h2>Description</h2>
                <p>Description of your project</p>
                <p>More description of your project</p>
            </section>
            <section>
                <h2>Inspirational Quote</h2>
                <blockquote>
                    "And now, O my son, ye are called of God to preach the word unto this people. 
                    And now, my son, go thy way, declare the word with truth and soberness, that 
                    thou mayest bring souls unto repentance, that the great plan of mercy may have 
                    claim upon them. And may God grant unto you even according to my words. Amen."
                </blockquote>
            </section>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));