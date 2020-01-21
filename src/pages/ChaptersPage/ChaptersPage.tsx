import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import {TopBar} from "../../components/TopBar/TopBar";

const CHAPTERS = gql`
    {
        chapters {
            _id
            name
        }
    }
`;

export const ChaptersPage:React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(CHAPTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <TopBar />
            Chapters Page
            {data.chapters.map((chapter:any) => (
                <div key={chapter._id}>{chapter.name}</div>
            ))}
        </div>
    );
};
