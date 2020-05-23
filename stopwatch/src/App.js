import React from 'react';
import './App.css';
// const timer = ({hour,setHour,minute,setMinute,second,setSecond,milisecond,setMilisecond})=>{
    //     var carry = 0;
    //     console.log('Q');
//     setMilisecond(milisecond+1);
//     if(milisecond===60){
    //         setMilisecond(milisecond=>0);
//         carry = 1;
//     }
//     setSecond(second+carry);
//     if (second===60) {
//         setSecond(second=>0);
//         carry = 1;
//     }
//     setMinute(minute+carry);
//     if (minute===60) {
    //         setMinute(minute=>0);
    //         carry = 1;
    //     }
    //     setHour(hour+carry);
    //     if(hour===100){
//         setHour(hour=>0);
//         setMinute(minute=>0);
//         setSecond(second=>0);
//         setMilisecond(milisecond=>0);
//     }
//     console.log(`${hour}:${minute}:${second}:${milisecond}`);
// };
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            hour:0,
            minute:0,
            second:0,
            milisecond:0
        }
    }
    timer(){
        var carry = 0;
        this.setState({
            milisecond:this.state.milisecond+1
        });
        if(this.state.milisecond===100){
            this.setState({
                milisecond:0
            });
            carry = 1;
        }
        this.setState({
            second:this.state.second+carry
        });
        if(this.state.second===60){
            this.setState({
                second:0
            });
            carry = 1;
        }else{
            carry = 0;
        }
        this.setState({
            minute:this.state.minute+carry
        });
        if(this.state.minute===60){
            this.setState({
                minute:0
            });
            carry = 1;
        }else{
            carry = 0;
        }
        this.setState({
            hour:this.state.hour+carry
        });
        if(this.state.hour===100){
            this.setState({
                milisecond:0,
                second:0,
                minute:0,
                hour:0,
            });
        }
    }
    startWatch(e) {
        e.preventDefault();
        if (this.intervalTimer) {
            return;
        }
        this.setState({
            active:false,
            milisecond:0,
            second:0,
            minute:0,
            hour:0,
        });
        this.intervalTimer = setInterval(this.timer.bind(this),10);
    }
    stopWatch(e) {
        e.preventDefault();
        if(!this.intervalTimer){
            this.setState({
                milisecond:0,
                second:0,
                minute:0,
                hour:0,
            });
            return;
        }
        clearInterval(this.intervalTimer);
        this.intervalTimer = undefined;
    }
    render(){

        return (
            <div className='App'>
                <h1 className="App__title">
                    stopwatch
                </h1>
                <div className="App__watch">
                    <h3 className="watch__display">
                        <span className="display__hour">{`${this.state.hour}`.padStart(2,'0')}</span>
                        :
                        <span className="display__minute">{`${this.state.minute}`.padStart(2,'0')}</span>
                        :
                        <span className="display__second">{`${this.state.second}`.padStart(2,'0')}</span>
                        :
                        <span className="display__milisecond">{`${this.state.milisecond}`.padStart(2,'0')}</span>
                    </h3>
                    <button className="watch__button watch__start" onClick={e=>this.startWatch(e)}>
                        <p className="start__text">
                            Start
                        </p> 
                    </button>
                    <button className="watch__button watch__stop" onClick={e=>this.stopWatch(e)}>
                        <p className="stop__text">
                            Stop
                        </p> 
                    </button>
                </div>
            </div>
        );
    }
}

export default App;