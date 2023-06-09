import React, { useState, useEffect } from 'react'
import { Card, Tooltip, Typography, Image, Avatar } from 'antd'
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteStory, likeStory } from '../../actions/stories';
import moment from "moment";
import "./styles.css"
import aos from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;
const { Link, Paragraph, Text } = Typography;


function Story({ story, setSelectedId }) {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);
  const user = JSON.parse(localStorage.getItem("profile"));

  const cardActions = [
    <div>
      <Tooltip placement='top' title="Like" color='magenta'>
        <HeartTwoTone twoToneColor="magenta" onClick={() => { dispatch(likeStory(story._id)) }} />
        &nbsp; {story.likes.length} &nbsp;
      </Tooltip>
    </div>,
    <Tooltip placement='top' title="Edit">
      <EditOutlined onClick={() => {
        setSelectedId(story._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }} />
    </Tooltip>,
    <Tooltip placement='top' title="Delete" color='red'>
      <DeleteTwoTone twoToneColor="red" onClick={() => dispatch(deleteStory(story._id))} />
    </Tooltip>
  ];

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Card data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      id='card' cover={<Image src={story.image} />}
      actions={
        user?.result?._id === story?.userId ?
          cardActions :
          user?.result ?
            cardActions.slice(0, 1)
            : null
      }
    >
      <Meta
        avatar={
          <Avatar
            style={{ backgroundColor: "wheat", color: "black" }}
          >
            {story.username.charAt(0)}
          </Avatar>
        }
        title={story.username}
        style={{
          fontFamily: "Lucida Console, Courier New, monospace",
          textTransform: "uppercase",
          fontSize: "large"
        }}
      /> <br />
      <Paragraph style={{ textTransform: 'capitalize', margin: 0, fontFamily: 'Lucida Console, Courier New, monospace' }} ellipsis={{
        rows: 2,
        expandable: true,
        symbol: "more",
        onExpand: () => {
          setExpand(true);
        },
        onEllipsis: () => {
          setExpand(false);
        }
      }}>
        {story.caption}
      </Paragraph>
      {expand ?
        <Link style={{ fontFamily: 'Lucida Console, Courier New, monospace', textTransform: 'uppercase' }} href='#'>{story.tags.split(" ").map((tag) => ` #${tag}`)}</Link>
        : null}
      <br />
      <Text style={{ fontFamily: 'Lucida Console, Courier New, monospace', color: 'secondary' }}>{moment.utc(moment(story.postDate)).local().fromNow()}</Text>

    </Card>
  )
}

export default Story