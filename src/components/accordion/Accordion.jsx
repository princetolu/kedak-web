import React from "react"
import '../accordion/style.css'

function Accordion() {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does Kedak generate revenue?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Kedak generates revenue through card sales and app time usage and this enables us to work on expanding the project of the app and the cards that are being used to collect the contact infos of other people.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How does Kedak generate revenue?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Kedak generates revenue through card sales and app time usage and this enables us to work on expanding the project of the app and the cards that are being used to collect the contact infos of other people.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How does Kedak generate revenue?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Kedak generates revenue through card sales and app time usage and this enables us to work on expanding the project of the app and the cards that are being used to collect the contact infos of other people.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Accordion;
