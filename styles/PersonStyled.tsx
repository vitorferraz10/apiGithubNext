import styled from "styled-components";

export const Container = styled.div`
 
  max-width: 70%;
  margin: 0 auto;
  h1 {
    font-size: 30px;
    font-family: 'Montserrat';
  }

  section {
    display: flex;
    gap: 20px;
   flex-wrap: wrap;
    div {
      font-family: "Heebo";
      display: block;
      width: 15em;
      font-size: 1.5em;
      color: #fff;
      border-radius: 1em;
      padding: 1em;
      height: 20em;
      /*margin: 2em;*/
      background: url("https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg");

      box-shadow: 0 0 5em -1em black;
      transition: all, var(--transition-time);
      position: relative;
      overflow: hidden;
      border: 10px solid #fff;
      text-decoration: none;

      span {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Montserrat';
      }

      p {
        font-size: 16px;
        line-height: 1.2em;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Montserrat';
      }
    }
  }
`;
