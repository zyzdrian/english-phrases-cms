import React from 'react';
import { Router } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';
import { ChaptersPage, CollectionsPage, LanguagesPage, PhrasesPage } from './pages';
import { lightTheme, GlobalStyle } from './styledComponents';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
});

const StyledApp = styled.div`
  background-image: linear-gradient(${props => props.theme.backgroundColorStart}, ${props => props.theme.backgroundColorStop});
  display: flex;
  color: ${props => props.theme.fontColorLight}
  transition: background-color ease 0.3s;
`;

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={lightTheme}>
                <StyledApp>
                    <GlobalStyle />
                    <Router style={{ display: 'flex', width: '100%' }}>
                        <PhrasesPage path='/' />
                        <ChaptersPage path='/chapters' />
                        <CollectionsPage path='/collections' />
                        <LanguagesPage path='/languages' />
                    </Router>
                </StyledApp>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
