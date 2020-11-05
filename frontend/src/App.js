import React, {Fragment} from 'react'

class App extends React.Component{
  render() {
    return(
        <Fragment>
      <div className="container m-5">
          <div className="row border border-dark p-3">
              <div className="align-items-center justify-content-between col-sm-5 col-md-6 d-flex flex-column">
                  <div className={'d-flex flex-column'}>
                      <label className={'form-label'}>Input</label>
                      <input className={'form-control'} type={'text'} />
                  </div>
                  <div className={'d-flex flex-column'}>
                      <label className={'form-label'}>Output</label>
                      <textarea className={'form-control'} rows="2" value={'10'}> </textarea>
                  </div>
              </div>
              <div className="col-sm-5 col-md-6 d-flex flex-column justify-content-between">
                  <button className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>sq</button>
                  <button className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>sqrt</button>
                  <button className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>fact</button>
                  <button className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>fibbo</button>
              </div>
          </div>
      </div>
    <div className={'container m-5'}>
     <div className={'row p-3'}>
          <div className={'col-sm-5 col-md-6 d-flex justify-content-center'}>
                  <div className={'d-flex'}>
                    <button className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>Show History</button>
                  </div>
          </div>
         <div className={'col-sm-5 col-md-6 d-flex justify-content-center'}>
             <div className={'d-flex'}>
                 <input type='text' className='form-control' />
             </div>
         </div>
     </div>
    </div>
    <div className="container m-5 d-flex justify-content-center table-secondary">I'm a flexbox container!</div>
    <div className="container m-5 d-flex justify-content-center table-secondary">I'm a flexbox container!</div>
    <div className="container m-5 d-flex justify-content-center table-secondary">I'm a flexbox container!</div>

</Fragment>
    )
  }
}
export default App;
