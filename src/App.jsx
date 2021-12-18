import React from "react";
import RButton from "./RButton";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
    width: 200px;
    height: 25px;

    display: flex;
    flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")}
`;

// 안됨
const MyButton = styled(RButton)`
    width: 200px;
    height: 25px;
`;

const SRButton = styled.button`
    width: 200px;
    height: 25px;
    margin: 10px;

    outline: none;
    border: ${(props) => props.isBorder ? "1px solid #999" : "none"};
    border-radius: 5px;

    transiton: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: skyblue;
        color: #fff;
    }
`;

const SR2 = styled(SRButton)`
    color: red;
`;

const CustomButton = styled(Button)`
    box-shadow: 3px 3px 3px #333;
`;

class App extends React.Component {
    render() {
        return <div>
            <RButton />

            <SRButton>BUTTON</SRButton>
            <SRButton isBorder={true}>TRUE BUTTON</SRButton>
            <SRButton isBorder={false}>FALSE BUTTON</SRButton>

            <Button size="small" type="primary">ANTD</Button>

            <CustomButton size="small" type="primary">CUSTOM</CustomButton>
            <SR2>SR2</SR2>

            <Wrapper direction="row">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
            </Wrapper>

            <hr />
            <hr />

            <Wrapper direction="row">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
            </Wrapper>
        </div>
    };
};

export default App;