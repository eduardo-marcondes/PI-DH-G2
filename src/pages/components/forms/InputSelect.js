import React from 'react';
import 'antd/dist/antd.css';
import {Select} from 'antd';
import {useApis} from "../../../hooks/useApi";

const {Option} = Select;

function InputSelect() {
    const [addressResult, isLoading] = useApis('./jsons/address.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = adressResult?.addressList || [];
    //carregando
    if (isLoading) return 'Loading';

    return (
        <>
            {
                address.map((addItem, key) => {
                    return (<React.Fragment key={key}>
                        <Select
                            showSearch
                            style={{width: 200}}
                            placeholder="Selecione uma cidade"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">{addItem.cidade}</Option>
                            <Option value="2">{addItem.cidade}</Option>
                            <Option value="3">{addItem.cidade}</Option>
                            <Option value="4">{addItem.cidade}</Option>
                            <Option value="5">{addItem.cidade}</Option>
                            <Option value="6">{addItem.cidade}</Option>
                        </Select>
                    </React.Fragment>)
                })
            }
        </>)
}

export default InputSelect;