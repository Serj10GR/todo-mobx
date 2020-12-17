import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  margin-bottom: 50px;
`

export const Form = styled.form`
`

export const Input = styled.input`
 width: 65%;
 margin-right: 5px;
 height: 30px;
 border: none;
 border-radius: 10px;
 padding: 0.5em 1em;
 margin-bottom: 20px;
`

export const Select = styled.select`
 width: 30%;
 height: 30px;
 border: none;
 border-radius: 10px;
 outline: none;
`
export const Option = styled.option`
 padding: 0.3em 0.75em;
`

export const Button = styled.button`
  margin: 0 auto;
  display: block;
  padding: 1em 1.5em;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: lightcoral;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.25s ease-in;

  :hover {
    color: black;
    background-color: lightgray;
  }
`