export default function AcountSetup(props) {

    const continueStep = (event) => {
        event.preventDefault()
        props.nextStep();
    }

    return (
        <div className="form-container">
            <h1>Account setup</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
            </div>
            
            <div className="text-right">
                    <button className="btn btn-primary" onClick={continueStep}>Continue</button>
            </div>
        </div>
    )

}