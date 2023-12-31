import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: null,
    }
  }
  render() {
    return (
      // пропс это способ передачи реквезита в приложениях React от родителей к дочерним элементам
      <button className="square" onClick={() => this.setState({value: 'O'})}>
        {/* Когда мы вызываем setState компонент, React автоматически обновляет дочерние компонеты внутри него */}
        {this.state.value}
      </button>
    )
  } 
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i}/>
  }
  
  render(){
    const status = 'Next player: x'

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

export default Game;
