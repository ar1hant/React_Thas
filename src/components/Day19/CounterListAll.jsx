import CounterList from './CounterList';

export default function CounterListAll(){
  return(
    <div>
        <h3>There are 4 counter component instances that each manage their own state.</h3>
        <div>
          <CounterList/>
          <CounterList/>
          <CounterList/>
          <CounterList/>
        </div>
      </div>
  )
}