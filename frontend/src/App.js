import React, {Fragment} from 'react'
import axios from "axios";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inp: 0,
            output: null,
            history: null
        }
    }
    onChange = e => {
        this.setState({
            ...this.state,
            inp: e.target.value
        })
    }
    handleOperation = method => {
        const {inp} = this.state
        axios.get(`http://127.0.0.1:8000/?op_name=${method}&&value=${inp}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    output: res.data
                })
            })
            .catch(err => err)
    }
    retriveHistory = e => {
        let value = ''
        try {
            value = e.target.value
        }
        catch (e) {

        }
        if (value) {
            axios.get(`http://127.0.0.1:8000/actions/?n=${value}`).then(res => {
                this.setState({
                    ...this.state,
                    history: res.data
                })
            }).catch(err=> err)
        }
        else {
            axios.get('http://127.0.0.1:8000/actions/')
                .then(res => {
                    this.setState({
                        ...this.state,
                        history: res.data
                    })
                }).catch(err => err)
        }
    }


    render() {
    return(
<Fragment>
      <div className="container m-5">
          <div className="row border border-dark p-3">
              <div className="align-items-center justify-content-between col-sm-5 col-md-6 d-flex flex-column">
                  <div className={'d-flex flex-column'}>
                      <label className={'form-label'}>Input</label>
                      <input
                          onChange={e => this.onChange(e)}
                          className={'form-control'}
                          type={'text'} />
                  </div>
                  <div className={'d-flex flex-column'}>
                      <label className={'form-label'}>Output</label>
                      <textarea className={'form-control'} rows="2" defaultValue={this.state.output} />
                  </div>
              </div>
              <div className="col-sm-5 col-md-6 d-flex flex-column justify-content-between">
                  <button
                      onClick={()=> this.handleOperation('sq')}
                      className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>sq</button>
                  <button
                      onClick={()=> this.handleOperation('sqrt')}
                      className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>sqrt</button>
                  <button
                      onClick={()=> this.handleOperation('fact')}
                      className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>fact</button>
                  <button
                      onClick={()=> this.handleOperation('fibbo')}
                      className={'btn btn-secondary btn-lg btn-light border-dark m-1'}>fibbo</button>
              </div>
          </div>
      </div>
    <div className={'container m-5'}>
     <div className={'row p-3'}>
          <div className={'col-sm-5 col-md-6 d-flex justify-content-center'}>
                  <div className={'d-flex'}>
                    <button
                        onClick={()=> this.retriveHistory()}
                        className={'btn btn-secondary btn-lg btn-light border-dark m-1'}
                    >
                        Show History
                    </button>
                  </div>
          </div>
         <div className={'col-sm-5 col-md-6 d-flex justify-content-center'}>
             <div className={'d-flex'}>
                 <input type='text' className='form-control' onChange={e=> this.retriveHistory(e)} />
             </div>
         </div>
     </div>
    </div>
    {this.state.history ? this.state.history.map(h =>
        (<div key={h.id}
            className="container m-5 d-flex justify-content-center table-secondary"
        >
            Operation Name: {h.operation_name} | Time: {new Date(h.time).toString()}
        </div>)
        )

        : ''}

</Fragment>
    )
  }
}
export default App;
