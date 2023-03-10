import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DIV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    .Auth-form {
      width: 420px;
      box-shadow: rgb(0, 0 ,0) 1px 1px 10px;
      padding-top: 30px;
      padding-bottom: 20px;
      border-radius: 8px;
      background-color: white;
      .Auth-form-content {
        /* border:1px solid red; */
        padding-left: 12%;
        padding-right: 12%;
        text-align: center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        .Auth-form-title {
          text-align: center;
          margin-bottom: 1em;
          font-size: 24px;
          color: rgb(34, 34, 34);
          font-weight: 800;
          .xyz{
            
          }
        }
      }
    }

  `

const Login = ({user, setUser}) => {
  const navigate = useNavigate()
  console.log(sessionStorage.getItem("user"));
  console.log(user);
  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser("Success")
    sessionStorage.setItem("user", 'Success')
    sessionStorage.getItem("user")=='Success' ? navigate("/") : navigate("/login")
  }
  return (
    <DIV className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group xyz mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group xyx mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3 xyz">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          Not registered yet? <a href="/register">Sign Up</a>
          </p>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </DIV>
  )
}

export default Login;