import React, { useEffect } from 'react'
import "./styles.css"
import { Space, Layout } from 'antd';
import {
    CopyrightOutlined,
    GlobalOutlined,
    FacebookFilled,
    InstagramFilled,
    TwitterSquareFilled,
    AntDesignOutlined,
    LinkedinFilled,
    BehanceSquareFilled,
    SmileTwoTone
} from '@ant-design/icons';
import aos from 'aos';
import 'aos/dist/aos.css';

const { Footer } = Layout;


function PageFooter() {
    useEffect(() => {
        aos.init();
    }, []);
    return (
        <Footer data-aos="zoom-in-up" id="footer"><CopyrightOutlined /> 2023 Story Corner. All Rights Reserved. <br /><br />
            Created by HOUSSAME ERRJEM. <br /><br />
            This website <GlobalOutlined /> is a MERN stack application. <br /><br />
            <br /><br />
            <a href="https://ant.design/" target="_blank" rel="noopener noreferrer"><AntDesignOutlined /> Ant Design </a> : Help designers/developers building beautiful products more flexible and working with happiness <SmileTwoTone /> !
            <br /><br /><br /><br />
            Follow me :
            <br /><br />
            <Space>
                <a href="https://www.facebook.com/houssame.errjem" target="_blank" rel="noopener noreferrer"><FacebookFilled style={{ fontSize: '30px', color: "white" }} /></a>
                <a href="https://www.instagram.com/houssame_errjem/" target="_blank" rel="noopener noreferrer"><InstagramFilled style={{ fontSize: '30px', color: "white" }} /></a>
                <a href="https://twitter.com/errjem2" target="_blank" rel="noopener noreferrer"><TwitterSquareFilled style={{ fontSize: '30px', color: "white" }} /></a>
                <a href="https://www.linkedin.com/in/houssame-errjem-a89822208/" target="_blank" rel="noopener noreferrer"><LinkedinFilled style={{ fontSize: '30px', color: "white" }} /></a>
                <a href="https://www.behance.net/houssameerrjem" target="_blank" rel="noopener noreferrer"><BehanceSquareFilled style={{ fontSize: '30px', color: "white" }} /></a>
            </Space>
        </Footer>
    )
}

export default PageFooter