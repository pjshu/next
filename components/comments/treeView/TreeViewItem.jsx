import ReactMarkdown from "react-markdown";
import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import Button from "@material-ui/core/Button";
import ReplyIcon from "@material-ui/icons/Reply";
import useStyles from './TreeViewItem.style';
import CommentContext from "../CommentContext";
import {areEqual, cln} from "../helper";
import PropTypes from 'prop-types';
import useEditorStyle from '../editor/EditorState.style';
import {formatTime} from "../../../misc/help";

const Content = React.memo(function Content({level, node, parent}) {
  const {state, dispatch, action} = useContext(CommentContext);
  const handleOpenModal = useCallback((reply) => {
    dispatch(action.openModal({reply}));
  }, [action, dispatch]);

  const setClickId = useCallback((clickId) => {
    dispatch(action.setClickId(clickId));
  }, [action, dispatch]);

  const handleOnAnimationEnd = useCallback(() => {
    dispatch(action.setClickId(null));
  }, []);
  return (
    <ContextContent
      setClickId={setClickId}
      handleOpenModal={handleOpenModal}
      clickId={state.clickId}
      level={level}
      node={node}
      parent={parent}
      onAnimationEnd={handleOnAnimationEnd}
    />
  );
}, areEqual);


const ContextContent = React.memo(function ContextContent(props) {
  const {level, node, parent, setClickId, handleOpenModal, clickId, handleOnAnimationEnd} = props;
  const classes = useStyles({level, link: node.website});

  const shake = useMemo(() => {
    return node.id === clickId;
  }, []);

  //没有填website则阻止跳转
  const handleOnNicknameClick = (e) => {
    if (!node.website) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={classes.contentWrapper}
      id={node.id}
    >
      <div className={classes.userInfoWrapper}>
        <div className={classes.avatar}>
          <img
            src={`https://www.gravatar.com/avatar/${node.avatar}`}
            alt=""
          />
        </div>
        <div className={classes.userInfo}>
          <a
            href={node.website}
            target={'_blank'}
            rel="noopener noreferrer"
            onClick={handleOnNicknameClick}
            className={cln(classes.nickname, {'shake': shake})}
            onAnimationEnd={handleOnAnimationEnd}
          >
            {node.nickname}
          </a>
          <p>
            <span className={'browser'}>
              {node.browser}
            </span>
            <span className={'create_date'}>
              {formatTime(node.create_date)}
            </span>
            <span className={classes.reply}>
               <ReplyIcon
                 onClick={() => {
                   handleOpenModal(node.id, level);
                 }}
                 className={'replyIcon'}
               />
            </span>
          </p>
        </div>
      </div>
      {
        parent && <ParentCommentContent
          parent={parent}
          setClickId={setClickId}
        />
      }
      <CommentContent
        content={node.content}
      />
    </div>
  );
}, areEqual);


const ParentCommentContent = React.memo(function ParentCommentContent(props) {
  const {parent, setClickId} = props;
  const classes = useStyles();
  const handleOnClick = () => {
    setClickId(parent.id);
  };
  return (
    <blockquote className={classes.blockquote}>
      <a
        className={classes.link}
        href={`#${parent.id}`}
        onClick={handleOnClick}>
        <span>
          @{parent.nickname}
        </span>
        <span>:</span>
        <span>
          <ReactMarkdown source={parent.content}/>
        </span>
      </a>
    </blockquote>
  );
}, areEqual);

const CommentContent = React.memo(function CommentContent(props) {
  const {content} = props;
  const classes = useStyles();
  const editorStyle = useEditorStyle();
  const contentRef = useRef();
  const [overflow, setOverflow] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleOnClick = useCallback(() => {
    setHidden(false);
    setOverflow(false);
  }, []);

  useEffect(() => {
    const current = contentRef.current;
    if (current && hidden) {
      const isOverFlow = current.offsetHeight < current.scrollHeight;
      setOverflow(isOverFlow);
    }
  }, [hidden]);

  return (
    <>
      <div
        ref={contentRef}
        className={cln(classes.scroll, editorStyle.table, {[classes.overflow]: hidden})}
      >
        <ReactMarkdown source={content}/>
      </div>
      {
        overflow && hidden && (
          <div className={classes.loadMore}>
            <Button
              onClick={handleOnClick}
              color="primary"
            >
              查看更多...
            </Button>
          </div>
        )
      }
    </>
  );
});


export default Content;


Content.prototype = {
  level: PropTypes.number,
  node: PropTypes.object,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  })
};

ContextContent.prototype = {
  level: PropTypes.number,
  node: PropTypes.object,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
  setClickId: PropTypes.func,
  handleOpenModal: PropTypes.func,
  clickId: PropTypes.string,
  handleOnAnimationEnd: PropTypes.func
};

ParentCommentContent.prototype = {
  clickId: PropTypes.string,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
};

CommentContent.prototype = {
  content: PropTypes.string
};
