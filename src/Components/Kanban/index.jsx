import React from 'react'
import Board from 'react-trello'

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'To-Do',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'InProgress',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'In Review',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'On Hold',
        label: '0/0',
        cards: []
      }
    ]        
  }

const KanbanBoard = () =>{
  
    return <Board data={data} editable={true} style={{backgroundColor: 'white'}}/>
  
}

export default KanbanBoard;