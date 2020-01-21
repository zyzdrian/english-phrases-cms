import React from 'react';
import {RouteComponentProps} from "@reach/router";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import {TopBar} from "../../components/TopBar/TopBar";

const COLLECTIONS = gql`
    {
        collections {
            _id
            name
            namesLanguage {
                name
            }
            meaningsLanguage {
                name
            }
        }
    }
`;

export const CollectionsPage:React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(COLLECTIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <TopBar />
            Collections Page
            {data.collections.map((collection:any) => (
                <div key={collection._id}>
                    <span>{collection.name}</span>
                    <span>{collection.namesLanguage.name}</span>
                    <span>{collection.meaningsLanguage.name}</span>
                </div>
            ))}
        </div>
    );
};
