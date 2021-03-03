import React,{Component} from 'react';

const LoginUrl = "http://localhost:5000/api/auth/login";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=()=>{
        fetch(LoginUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/profile')
            })
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" value={this.state.password}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;