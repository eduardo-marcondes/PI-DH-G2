import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import {Tabs} from 'antd';
import {AppleOutlined, AndroidOutlined} from '@ant-design/icons';
import ListProductsFilterCategory from "./cards/product/ListProductsFilterCategory";

const {TabPane} = Tabs;

function Products() {
    const title = {span: "conheça nossa frota", title: "frota"};

    const cat = ["suvs", "conversiveis", "esportivos", "picapes"];

    return (
        <>
            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>


                    <Tabs defaultActiveKey="1">
                        <TabPane
                            tab={
                                <span><AppleOutlined/> Todos</span>
                            }
                            key="1"
                        >
                            <div className="produtos">
                                <ListProductsFilterCategory cat={null}/>
                            </div>
                        </TabPane>
                        <TabPane
                            tab={
                                <span><AndroidOutlined/>SUVs</span>
                            }
                            key="2"
                        >
                            <div className="produtos">
                                <ListProductsFilterCategory cat={cat[0]}/>
                            </div>
                        </TabPane>
                        <TabPane
                            tab={
                                <span><AndroidOutlined/>Conversíveis</span>
                            }
                            key="3"
                        >
                            <div className="produtos">
                                <ListProductsFilterCategory cat={cat[1]}/>
                            </div>
                        </TabPane>
                        <TabPane
                            tab={
                                <span><AndroidOutlined/>Esportivos</span>
                            }
                            key="4"
                        >
                            <div className="produtos">
                                <ListProductsFilterCategory cat={cat[2]}/>
                            </div>
                        </TabPane>
                        <TabPane
                            tab={
                                <span><AndroidOutlined/>Picapes</span>
                            }
                            key="5"
                        >
                            <div className="produtos">
                                <ListProductsFilterCategory cat={cat[3]}/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>

            </section>
        </>
    )
}

export default Products;