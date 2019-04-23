import React from "react"
import ReactDOM from "react-dom"
import ErrorPane from "./ErrorPane"
import renderer from "react-test-renderer"

it("renders no errors", () => {
  let resources = [
    {
      name: "foo",
      buildHistory: [],
    },
  ]

  const tree = renderer.create(<ErrorPane resources={resources} />).toJSON()

  expect(tree).toMatchSnapshot()
})

it("renders one error", () => {
  const ts = "1,555,970,585,039"
  let resources = [
    {
      name: "foo",
      buildHistory: [
        {
          log: "laa dee daa I'm an error",
          finishTime: ts,
          error: {},
        },
      ],
    },
  ]

  const tree = renderer.create(<ErrorPane resources={resources} />).toJSON()

  expect(tree).toMatchSnapshot()
})

it("renders one resource with two build errors", () => {
  const ts = "1,555,970,585,039"
  let resources = [
    {
      name: "foo",
      buildHistory: [
        {
          log: "laa dee daa I'm an error",
          finishTime: ts,
          error: {},
        },
        {
          log: "laa dee daa I'm another error",
          finishTime: ts,
          error: {},
        },
      ],
    },
  ]

  const tree = renderer.create(<ErrorPane resources={resources} />).toJSON()

  expect(tree).toMatchSnapshot()
})
