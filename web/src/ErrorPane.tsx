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

type Build = {
  log: string
  finishTime: string
  error: {} | null
}

type ErrorResource = {
  name: string
  buildHistory: Array<Build>
}

type ErrorsProps = {
  resources: Array<ErrorResource>
}

class ErrorPane extends PureComponent<ErrorsProps> {
  render() {
    let errorElements: Array<JSX.Element> = []
    this.props.resources.forEach(r => {
      r.buildHistory.forEach((b, i) => {
        if (b.error !== null) {
          errorElements.push(<li key={r.name + i}>{b.log}</li>)
        }
      })
    })

    if (errorElements.length === 0) {
      return <p>No errors</p>
    }

    return <ul>{errorElements}</ul>
  }
}

export default ErrorPane
