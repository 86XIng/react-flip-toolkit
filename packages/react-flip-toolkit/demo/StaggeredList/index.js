// inspired by this animated demo:
// https://uxplanet.org/animation-in-ui-design-from-concept-to-reality-85c49907b19d
import React, { Component } from 'react'
import { Flipper, Flipped } from '../../dist/index'
import './styles.css'
const listData = [0, 1, 2, 3, 4, 5, 6, 7]
const colors = ['#ff4f66', '#7971ea', '#5900d8']

const shouldFlip = index => (prev, current) => {
  if (index === prev || index === current) return true
  return false
}

const createCardFlipId = index => `listItem-${index}`

const ListItem = ({ index, color, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div
        className="listItem"
        style={{ backgroundColor: color }}
        onClick={() => onClick(index)}
      >
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
            >
              <div className="avatar" />
            </Flipped>
            <div className="description">
              <Flipped
                flipId={`description-${index}-1`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
              >
                <div />
              </Flipped>
              <Flipped
                flipId={`description-${index}-2`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
              >
                <div />
              </Flipped>
              <Flipped
                flipId={`description-${index}-3`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
              >
                <div />
              </Flipped>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

const ExpandedListItem = ({ index, color, onClick }) => {
  console.log(index, color, onClick)
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        console.log('regular')
      }}
      onStartImmediate={el => {
        console.log('immediate', el)
        setTimeout(() => {
          el.classList.add('animated-in')
        }, 400)
      }}
    >
      <div
        className="expandedListItem"
        style={{ backgroundColor: color }}
        onClick={() => onClick(index)}
      >
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="expandedListItemContent">
            <Flipped flipId={`avatar-${index}`} stagger="card-content">
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              <Flipped flipId={`description-${index}-1`} stagger="card-content">
                <div />
              </Flipped>
              <Flipped flipId={`description-${index}-2`} stagger="card-content">
                <div />
              </Flipped>
              <Flipped flipId={`description-${index}-3`} stagger="card-content">
                <div />
              </Flipped>
            </div>
            <div className="additional-content">
              <div />
              <div />
              <div />
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}
export default class AnimatedList extends Component {
  state = { focused: null }
  onClick = index =>
    this.setState({
      focused: this.state.focused === index ? null : index
    })
  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          'card-content': {
            delayUntil: (prevDecisionData, currDecisionData) => {
              const flipId = createCardFlipId(
                prevDecisionData === null ? currDecisionData : prevDecisionData
              )
              return flipId
            }
          },
          card: {
            reverse: this.state.focused !== null
          }
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    color={colors[index % colors.length]}
                    onClick={this.onClick}
                  />
                ) : (
                  <div>
                    <ListItem
                      index={index}
                      key={index}
                      color={colors[index % colors.length]}
                      onClick={this.onClick}
                    />
                  </div>
                )}
              </li>
            )
          })}
          {/* <div style={{ display: 'none' }}>
            <ListItem
              index={0}
              key={0}
              color={colors[0 % colors.length]}
              onClick={this.onClick}
            />
          </div> */}
        </ul>
      </Flipper>
    )
  }
}
