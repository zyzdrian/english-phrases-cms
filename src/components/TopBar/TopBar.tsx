import React from 'react';
import { Link } from '@reach/router';
import styled from "styled-components";

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  position: sticky;
  top: 0;
  width: 100vw;
`;

const StyledLinks = styled.div`
 a {
  color: white;
  padding: 0 10px;
 }
`;

const StyledOptions = styled.div``;

export const TopBar = () => {
    return (
        <StyledTopBar>
            <StyledLinks>
                <Link to='/'>Phrases</Link>
                <Link to='/languages'>Languages</Link>
                <Link to='/collections'>Collections</Link>
                <Link to='/chapters'>Chapters</Link>
            </StyledLinks>
            <StyledOptions>
                <select>
                    <option>sds</option>
                </select>
            </StyledOptions>
        </StyledTopBar>
    )
};
