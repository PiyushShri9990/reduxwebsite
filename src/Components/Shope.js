import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shope = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state=>state.amount)
  // const action = bindActionCreators(actionCreators, dispatch)
  const {withdrawMoney, dipositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Updated Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.dipositMoney(100))}}>+</button> */}
      {/* <button className="btn btn-primary mx-2" onClick={()=>{action.withdrawMoney(100)}}>-</button>
      Updated Balance
      <button className="btn btn-primary mx-2" onClick={()=>{action.dipositMoney(100)}}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Updated Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{dipositMoney(100)}}>+</button>
    </div>
  )
}

export default Shope
