import React from 'react'

export default function Main() {
    const [fact, setFact] = React.useState(Object);

    React.useEffect(() => {
        fetchRandom();
    }, [])

    function fetchRandom() {
        fetch('http://numbersapi.com/random?json&min=0&max=9999')
            .then(res => res.json())
            .then(data => setFact(data));
    }

    function fetchUser(e) {
        e.preventDefault();
        const num = document.getElementById('userSearch').value;

        if (num)
            fetch(`http://numbersapi.com/api/${num}?json`)
                .then(res => res.json())
                .then(data => setFact(data));
        else
            alert('Please enter a number')
    }

    return (
        <main>
            <h2>{fact.number}</h2>
            <p>{fact.text}</p>
            <form>
                <input type="number" placeholder="Enter a number:" min="0" id='userSearch' />
                <button id="randomBtn" onClick={(e) => { e.preventDefault(); fetchRandom(); }}>Random Fact</button>
                <button id="userBtn" onClick={fetchUser}>Search Fact</button>
            </form>
        </main >
    )
}