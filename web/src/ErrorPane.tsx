import React, { PureComponent } from "react"

/*
  ErrorPane is a list of error items
    - You can click to expand(??)
    - Each resource has its own error pane
    - You can click from an error item to a resource log

 1. Build errors
    - Build in BuildHistory with an error, grab the entire log

 2. Runtime errors
 3. Tiltfile errors
*/

type ErrorsProps = {}

class ErrorPane extends PureComponent<ErrorsProps> {
  render() {
    return <h1>Errors</h1>
  }
}

export default ErrorPane
