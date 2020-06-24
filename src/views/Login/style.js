import  styled from 'styled-components'
export  const LoginForm = styled.div`
    width: 100%;
    .logo_pic {
        position: absolute;
        top:70px;
        left: 50px;
    }
`
export const DataForm =styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
   -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
    width: 400px;
    height: 450px;
    padding: 30px 40px;
    z-index: 9999;
    background:#fff;
    border-radius: 12px;
    box-shadow: 0 0 5px (0,0,0,.2);
    .login-form {
        Input {
            height: 40px;
            line-height: 30px;
            border-radius: 10px;
        }
        .login-form-forgot{
            float: right;
            margin-left: 20px;
        }
        .login-form-button {
            width: 320px;
            border-radius: 20px;
            height: 40px;
        }
        .login-form-forgot {
            color: #999;
        }
        .login-form-forgot:hover {
            color: #000;
        }
    }
`
export  const Top = styled.div`
   text-align:center;
   font-size: 26px;
   font-weight: bold;
   padding-bottom: 25px;
`
export const  LoginBox = styled.div`
    width: 300px;
    height: 200px;
    padding: 20px 0px;
    margin: 50px auto;
    border-radius: 4px 4px 0 0;
`
export const Input = styled.input`
    display: block;
    width: 300px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #f1f1f1;
    out-line: none;
    margin: 10px auto;
    line-height: 30px;
    padding: 0 10px;
`


