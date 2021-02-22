import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./ListApp.style";

const ListApp = ({ allUsers,sendChat,setCreateChat,setOpenIcons, setActive, setMsgShow, chats }) => {
  const classes = useStyles();
  const test = [
    { title: "some1" },
    {
      title: "some2",
      img:
        "https://www.timeoutdubai.com/public/images/2020/07/13/IMG-Dubai-UAE.jpg",
    },
    {
      title: "some3",
      img:
        "data:image/jpeg;base64,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",
    },
    { title: "some4" },
  ];
  const renderList = (list) => {
    return list.map((item) => {
      return (
        <ListItem className={classes.listItem} key={item.id} onClick={()=>{
          let double;
          chats.map((chat)=>{
            if(chat.user_id===item.id){
              setActive(chat.id);
              setMsgShow(true)
              double=true;
              setCreateChat(false)
              setOpenIcons(null)
            }
          })
          if(double){
            return false
          }
          sendChat(item.id)
          setCreateChat(false)
          setOpenIcons(null)
        }}>
          <ListItemAvatar>
            <Avatar src={item.img} >{item.nickname.substr(0, 2).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText secondary={item.nickname} />
        </ListItem>
      );
    });
  };

  return <List className={classes.root}>{renderList(allUsers)}</List>;
};

export default ListApp;
