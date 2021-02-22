import React from 'react';
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    <li>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
          key={index} 
          answer={answer}
          />
        )
      })}
    </li>
  </ul>
)

export default AnswersList