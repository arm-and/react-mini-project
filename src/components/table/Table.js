import React, {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import CaretUp from "../../svg/CaretUp";
import CaretDown from "../../svg/CaretDown";
import SearchComponent from "../search/SearchComponent";
import TableUI from "./TableUI";

export default function Table({onSearchSend}) {

    const [posts, setPosts] = useState([]);
    const [directionSort, setdirectionSort] = useState(true);
    const [arrowState, setArrowState] = useState('');
    const [searchText, setSearchText] = useState('');

    const getFilteredData = () => {
        if (!searchText) {
            return posts
        }
        return posts.filter(
            el => {
                return el['title'].includes(searchText)
                    || el['body'].includes(searchText)
            }
        )
    }

    const filtredData = getFilteredData();

    const sortData = (field) => {

        const concatPosts = filtredData.concat();
        let sorting;
        if (directionSort) {
            sorting = filtredData.sort((a, b) =>
                a[field] > b[field] ? 1 : -1
            )
        }
        sorting = filtredData.reverse();
        setPosts(sorting);
        setdirectionSort(!directionSort);
    }

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data])
        })
    }, []);

    const Arrow = () => {
        return (
            directionSort ? <CaretDown/> : <CaretUp/>
        )
    }
    const ArrowData = (field) => {
        sortData(field)
        setArrowState(field)
    };

    function onSearchSend(text) {
        setSearchText(text)
    };

    return (
        <div>
            <SearchComponent onSearchSend={onSearchSend}/>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th onClick={() => {
                        ArrowData('id')
                    }}>{arrowState === 'id' ? <Arrow/> : null}
                    </th>
                    <th onClick={() => {
                        ArrowData('title')
                    }}>Title{arrowState === 'title' ? <Arrow/> : null}
                    </th>
                    <th onClick={() => {
                        ArrowData('body')
                    }}>Body{arrowState === 'body' ? <Arrow/> : null}
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    filtredData.map(
                        (value => (
                            <TableUI
                                key={value.id}
                                value={value}
                            />
                        )))
                }
                </tbody>
            </table>
        </div>
    )
}
