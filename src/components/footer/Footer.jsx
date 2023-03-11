import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  margin-top:1rem;
  background: #666;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
  /* position: absolute; */
  max-height:200px;
  bottom:0;
  overflow:hidden;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
	text-align: left;
	/* font: bold 16px sans-serif; */
	padding: 55px 50px;
  .footer-left{
    display: flex;
    flex-direction:column;
    vertical-align: top;
    width: 40%;
    .footer-links{
      color:  #ffffff;
      margin: 20px 0 12px;
      padding: 0;
      a{
        display:inline-block;
        line-height: 1.8;
        font-weight:400;
        margin-left:10px;
        text-decoration: none;
        color:  inherit;
      }
    }
    /* .footer-company-name{
      color:  #222;
      font-size: 14px;
      font-weight: normal;
      margin: 0;
    } */
    /* h3{
      color:  #ffffff;
      font: normal 36px 'Open Sans', cursive;
      margin: 0;
        span{
          color:  lightseagreen;
        }
      } */

    }
    .footer-center{
      width: 35%;
      display: flex;
      flex-direction:column;
      vertical-align: top;
      i{
        background-color:  #33383b;
        color: #ffffff;
        font-size: 25px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 42px;
        margin: 10px 15px;
        vertical-align: middle;
      }
      p{
        display: inline-block;
        color: #ffffff;
        font-weight:400;
        vertical-align: middle;
        margin:0;
        span{
        display:block;
        font-weight: normal;
        font-size:14px;
        line-height:2;
        }
        a{
          color:  lightseagreen;
          text-decoration: none;
          :before {
            content: "|";
            font-weight:300;
            font-size: 20px;
            left: 0;
            color: #fff;
            display: inline-block;
            padding-right: 5px;
          }
        }
      }
    }
    .footer-right{
      width: 20%;
      display: flex;
      flex-direction:column;
      vertical-align: top;
      .footer-company-about{
        line-height: 20px;
        color:  #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
        span{
          display: block;
          color:  #ffffff;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 20px;
        }
      /* } */
      /* .footer-icons{
        margin-top: 25px;
        a{
          display: inline-block;
          width: 35px;
          height: 35px;
          cursor: pointer;
          background-color:  #33383b;
          border-radius: 2px;

          font-size: 20px;
          color: #ffffff;
          text-align: center;
          line-height: 35px;

          margin-right: 3px;
          margin-bottom: 5px;
        } */
      }
    }
`
const date = new Date().getFullYear()

const Footer = () => {
  return (
    <Foot className="footer-distributed">
      <div className="footer-left m-1">
        {/* <h3>
          Company<span>logo</span>
        </h3> */}
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Company Name © {date}</p>
      </div>
      <div className="footer-center m-1">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right m-1">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    </Foot>
  );
};
export default Footer;
