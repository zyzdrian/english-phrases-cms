import React from 'react';
import {RouteComponentProps} from "@reach/router";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import {TopBar} from "../../components/TopBar/TopBar";

const PHRASES = gql`
    {
        phrases {
            _id
            names
            meanings
            chapter {
                _id
                name
            }
            collection {
                _id
                name
            }
        }
    }
`;

export const PhrasesPage:React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(PHRASES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <TopBar />
            Phrases Page
            {data.phrases.map((collection:any) => (
                <div key={collection._id}>
                    <span>{collection.names.map((name: string) => <span key={name}>{name}</span>)}</span>
                    <span>{collection.meanings.map((meaning: string) => <span key={meaning}>{meaning}</span>)}</span>
                    <span>{collection.chapter.name}</span>
                </div>
            ))}
        </div>
    );
};
