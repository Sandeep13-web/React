import React, { useState } from 'react'

function FillCards() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [cardList, setCardList] = useState([{
        title: "Card 1",
        body: "This is card 1",
    }
    ]);
    
    const [selectedIndex, setSelectedIndex] = useState(null);


    const addCard = () => {
        let newCardList = [...cardList];
        newCardList.push({ title, body });
        setCardList(newCardList);
        setTitle("");
        setBody("");
    }

    console.log(title);
    console.log(body);
    console.log(cardList);

    const deleteCardHandler = (index) => {
        let newCardList = [...cardList];
        newCardList.splice(index, 1);
        setCardList(newCardList);
    }

    const editCardHandler = (index, card) => {
        setSelectedIndex(index);
        setTitle(card.title);
        setBody(card.body);
    }

    const mainEdit = () => {
        setCardList()
        let newCardList = [...cardList];
        newCardList[selectedIndex] = { title, body };
        setCardList(newCardList);
        setTitle("");
        setBody("");
    }

    return (
        <div className="fillcards">
            <div className="fillUpCards">
                <div className="container">
                    <h2>Fill up a card</h2>
                    <div className="mb-3">
                        <label className="form-label">Card Title</label>
                        <input type="text" className="form-control" placeholder="Enter a title"
                            value={title} onChange={(e) => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Card Body</label>
                        <input type="text" className="form-control" placeholder="Enter text details"
                            value={body} onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <div className="Buttons">
                        {(selectedIndex === null) && <button type="submit" className="btn btn-primary" onClick={addCard}>Add</button>}
                        {(selectedIndex !== null) && <button type="submit" className="btn btn-primary" onClick={mainEdit}>Edit</button>}
                    </div>
                </div>
            </div>

            <div className="CardInfo">
                <div className="container">
                    <div className="cardInfo">
                        <div className="cardList">
                            <div className="row w-100">
                                {
                                    cardList.map((card, index) =>
                                        <div className="col-md-4" key={index}>
                                            <div className="card" >
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{card.title}</h5>
                                                    <p className="card-text">{card.body}</p>
                                                    <div className="Buttons">
                                                        <button className="btn btn-primary" onClick={() => editCardHandler(index, card)}>Edit</button>
                                                        <button className="btn btn-danger" onClick={() => deleteCardHandler(index)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillCards
