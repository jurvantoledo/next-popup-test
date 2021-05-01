export default function Socials(props) {

    const continueStep = (event) => {
        event.preventDefault()
        props.nextStep();
    }

    const backStep = (event) => {
        event.preventDefault()
        props.prevStep()
    }

    return (
    <div className="form-container">
        <h1>Socials</h1>
        <div className="form-group">
            <label htmlFor="name">facebook url</label>
            <input type="text" className="form-control" />
        </div>
        <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={backStep}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={continueStep}>Continue</button>
                    </div>
        </div>
    </div>
    )
}