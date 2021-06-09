import React from 'react'

const CustomerForm = () => {
    return (
        <div>
            <form style={{textAlign: "center"}}>
                <h1>Confidential Skin Health History</h1>
                <div className="CustomerInformation">
                <div className="customerHistory" style={{display: "flex", flexFlow: "column", border: "solid 1px black", padding: "4%"}}>
                    <div className="Name">
                        <label htmlFor="name"></label>
                            <input
                                style={{width: "500px", marginBottom: "2%"}}
                                type="text"
                                name="name"
                                placeholder="Name" 
                            />
                    <div className="Date">
                        <label htmlFor="date"></label>
                            <input 
                                style={{width: "500px", marginBottom: "2%"}}
                                type=""
                                name="date"
                                placeholder="Today's Date"
                            />
                    </div>
                    </div>
                    <div className="Address">
                        <label htmlFor="address"></label>
                            <input
                                style={{width: "500px", marginBottom: "2%"}}
                                type="text"
                                name="address"
                                placeholder="Address"
                            />
                    </div>
                    <div className="PhoneNumber">
                        <label htmlFor="phonenumber"></label>
                            <input
                                style={{width: "500px", marginBottom: "2%"}}
                                type=""
                                name="phonenumber"
                                placeholder="Phone Number"
                            />
                    <div className="Email">
                        <label htmlFor="email"></label>
                            <input
                                style={{width: "500px", marginBottom: "2%"}}
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                    </div>
                    </div>
                    <div className="Emergency Contact">
                        <label htmlFor="emergencycontact"></label>
                            <input
                                style={{width: "500px", marginBottom: "2%"}}
                                type=""
                                name="emergencycontact"
                                placeholder="Emergency Contact Name"
                            />
                    <div className="Phone">
                            <label htmlFor="phone"></label>
                                <input
                                    style={{width: "500px", marginBottom: "2%"}}
                                    type=""
                                    name="phone"
                                    placeholder="Phone Number"
                                />
                    </div>
                    </div>
                    <div className="HearAboutUs">
                        <label htmlFor="hearabout"></label>
                            <input
                                style={{width: "500px", height: "250px", marginBottom: "2%"}}
                                type="text"
                                name="hearabout"
                                placeholder="How Did You Hear About Us?" 
                            />
                    </div>
                    </div>
                    <div className="SkinConcerns">
                        <h1>Skin Concerns</h1>
                        <p>What is your skin type? Check all that apply.</p>
                        <div className="DrySkin">
                            <label htmlFor="dry">Dry</label>
                                <input
                                    type="checkbox"
                                    name="dry"
                                />
                        </div>
                        <div className="SensitiveSkin">
                            <label htmlFor="sensitive">Sensitive</label>
                                <input
                                    type="checkbox"
                                    name="sensitive"
                                />
                        </div>
                        <div className="OilySkin">
                            <label htmlFor="oily">Oily</label>
                                <input
                                    type="checkbox"
                                    name="oily"
                                />
                        </div>
                        <div className="CombinationSkin">
                            <label htmlFor="combination">Combination</label>
                                <input
                                    type="checkbox"
                                    name="combination"
                                />
                        </div>
                        <div className="NormalSkin">
                            <label htmlFor="normal">Normal</label>
                                <input
                                    type="checkbox"
                                    name="normal"
                                />
                        </div>
                        <div className="NotSure">
                            <label htmlFor="notsure">Not Sure</label>
                                <input
                                    type="checkbox"
                                    name="notsure"
                                />
                        </div>
                    </div>
                    <div className="SkinConcernsTwo">
                        <p>What current skin conditions are you currently concerned with? Click all that apply.</p>
                        <div className="Acne">
                        <label htmlFor="acne">Acne</label>
                                <input
                                    type="checkbox"
                                    name="acne"
                                />
                        </div>
                        <div className="Blackheads">
                        <label htmlFor="blackheads">Blackheads/Congestion</label>
                                <input
                                    type="checkbox"
                                    name="blackheads"
                                />
                        </div>
                        <div className="Hyperpigmentation">
                        <label htmlFor="hyperpigmentation">Hyperpigmentation</label>
                                <input
                                    type="checkbox"
                                    name="hyperpigmentation"
                                />
                        </div>
                        <div className="Sensitivity">
                        <label htmlFor="sensitivity">Sensitivity</label>
                                <input
                                    type="checkbox"
                                    name="sensitivity"
                                />
                        </div>
                        <div className="Redness">
                        <label htmlFor="redness">Redness</label>
                                <input
                                    type="checkbox"
                                    name="redness"
                                />
                        </div>
                        <div className="Dryness">
                        <label htmlFor="dryness">Dryness/Dehydration</label>
                                <input
                                    type="checkbox"
                                    name="acne"
                                />
                        </div>
                        <div className="Wrinkles">
                        <label htmlFor="wrinkles">Fine Lines and/or Wrinkles</label>
                                <input
                                    type="checkbox"
                                    name="wrinkles"
                                />
                        </div>
                        <div className="Rosacea">
                        <label htmlFor="rosacea">Rosacea</label>
                                <input
                                    type="checkbox"
                                    name="Rosacea"
                                />
                        </div>
                    </div>
                    <div className="SkinConcernsThree">
                        <p>How sensitive is your skin to the sun if you do not wear SPF?</p>
                        <div className="VS">
                        <label htmlFor="vs">Very Sensitive/Always Burns</label>
                                <input
                                    type="checkbox"
                                    name="vs"
                                />
                        </div>
                        <div className="SS">
                        <label htmlFor="ss">Somewhat Sensitive/Burns but it takes a while</label>
                                <input
                                    type="checkbox"
                                    name="ss"
                                />
                        </div>
                        <div className="RS">
                        <label htmlFor="rs">Rarely Sensitive/Rarely Burns</label>
                                <input
                                    type="checkbox"
                                    name="rs"
                                />
                        </div>
                    </div>
                    <div className="SkinConcernsFour">
                        <div className="QuestionOne">
                        <p>What are your goals for your skin both for this treatment and long term?</p>
                        <label htmlFor="questionone"></label>
                            <input
                                type="text"
                                name="questionone"
                            />
                        </div>
                        <div className="QuestionTwo">
                        <p>Please describe your at home skincare routine.Include the products you use and brand names if possible.</p>
                        <label htmlFor="questiontwo"></label>
                            <input
                                type="text"
                                name="questiontwo"
                            />
                        </div>
                    </div>
                    <div className="Lifestyle">
                        <div className="liquids">
                        <p>How much water do you consume on a daily basis? In ounces.</p>
                            <input
                                type="text"
                            />
                        <p>How much caffeine do you consume on a daily basis? In ounces.</p>
                            <input
                                type="text"
                            />
                        <p>How much alcohol do you consume on a weekly basis? In ounces.</p>
                            <input
                                type="text"
                            />
                        </div>
                        <div className="Diet">
                            <p>Do you follow a restrictive diet? If so, please explain.</p>
                                <input
                                    type="text"
                                />
                        </div>
                        <div className="Stress">
                            <p>On a scale of 1-10 what is your stress level?</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CustomerForm
