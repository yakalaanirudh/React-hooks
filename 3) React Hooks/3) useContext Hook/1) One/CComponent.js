import React from "react"

class CComponent  extends React.Component{
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <h2>{this.props.counter}</h2>
            </div>
        )
    }
}

export default CComponent