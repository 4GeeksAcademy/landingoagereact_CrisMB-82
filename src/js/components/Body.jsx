import React from "react";
import Card from "./Card";
import rigoImage from "../../img/rigo-baby.jpg"


export const Body = () => {

    const cardData = [
        {
            title: "Card 1",
            description: "This is the first card.",
            image: rigoImage,
        },
        {
            title: "Card 2",
            description: "This is the second card.",
            image: rigoImage,
        },
        {
            title: "Card 3",
            description: "This is the third card.",
            image: rigoImage,
        },
        {
            title: "Card 4",
            description: "This is the fourth card.",
            image: rigoImage,
        },
    ];
    return (
        <div className="container p-0">
            <div className="jumbotron mt-5">
                <div className="container d-flex flex-column jumbotron1 mb-2">
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">
                        This is a simple hero unit, a simple jumbotron-style component for
                        calling extra attention to featured content or information.
                    </p>
                    <hr className="my-4" />
                    <p className="lead">Tranquilo, poco a poco lo vas a lograr.</p>
                    <div>
                        <a
                            href="https://www.google.com"
                            class="btn btn-primary mb-4 text-lhite"
                        >
                            Go to Google
                        </a>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="row"> 
                {
                    cardData.map((card, index) => (
                        <div key={index} className="col-md-3 col-sm-6 mb-4">
                            <Card
                                title={card.title}
                                description={card.description}
                            />

                        </div>


                    ))
                }
</div>


            </div>

        </div>


    )
}

export default Body;