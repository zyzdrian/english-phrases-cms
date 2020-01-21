import React from 'react';
import {RouteComponentProps} from "@reach/router";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import {TopBar} from "../../components/TopBar/TopBar";

const LANGUAGES = gql`
    {
        languages {
            _id
            name
            shortName
        }
    }
`;

export const LanguagesPage:React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(LANGUAGES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <TopBar />
            Languages Page
            {data.languages.map((collection:any) => (
                <div key={collection._id}>
                    <span>{collection.name}</span>
                    <span>{collection.shortName}</span>
                </div>
            ))}
        </div>
    );
};
