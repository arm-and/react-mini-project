import React, {useState} from "react";

export default function SearchComponent({onSearchSend}) {

    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       placeholder="Recipient's data"
                       aria-label="Recipient's username"
                       aria-describedby="basic-addon2"
                       value={searchValue}
                       onChange={(event) => {
                           setSearchValue(event.target.value)
                       }}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => {
                                onSearchSend(searchValue)
                            }}>
                        Button
                    </button>
                </div>
            </div>
        </div>
    )
}
