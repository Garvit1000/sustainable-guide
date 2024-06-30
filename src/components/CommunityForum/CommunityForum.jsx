import React, { useState, useEffect } from 'react';
import './CommunityForum.css';

const CommunityForum = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });

  useEffect(() => {
    const storedDiscussions = localStorage.getItem('discussions');
    if (storedDiscussions) {
      setDiscussions(JSON.parse(storedDiscussions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('discussions', JSON.stringify(discussions));
  }, [discussions]);

  const handleChange = (e) => {
    setNewDiscussion({ ...newDiscussion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiscussions([...discussions, { ...newDiscussion, id: Date.now(), comments: [], newComment: '' }]);
    setNewDiscussion({ title: '', content: '' });
  };

  const handleCommentChange = (e, discussionId) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        return { ...discussion, newComment: e.target.value };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  const handleCommentSubmit = (e, discussionId) => {
    e.preventDefault();
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        const updatedComments = [...discussion.comments, discussion.newComment];
        return { ...discussion, comments: updatedComments, newComment: '' };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  const handleDeleteDiscussion = (discussionId) => {
    const updatedDiscussions = discussions.filter(discussion => discussion.id !== discussionId);
    setDiscussions(updatedDiscussions);
  };

  const handleDeleteComment = (discussionId, commentIndex) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        const updatedComments = discussion.comments.filter((_, index) => index !== commentIndex);
        return { ...discussion, comments: updatedComments };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  return (
    <div id='communityforum' className="community-forum">
      <h1>Community Forums</h1>
      <form onSubmit={handleSubmit} className="discussion-form">
        <label>
          Title:
          <input type="text" name="title" value={newDiscussion.title} onChange={handleChange} />
        </label>
        <label>
          Content:
          <textarea name="content" value={newDiscussion.content} onChange={handleChange} />
        </label>
        <button type="submit">Post Discussion</button>
      </form>
      <div className="discussions">
        {discussions.length > 0 && <h2>Ongoing Discussions</h2>}
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion">
            <h3>{discussion.title}</h3>
            <p>{discussion.content}</p>
            <button onClick={() => handleDeleteDiscussion(discussion.id)}>Delete Post</button>
            <div className="comments">
              <h4>Comments</h4>
              <ul>
                {discussion.comments.map((comment, index) => (
                  <li key={index}>
                    {comment}
                    <button onClick={() => handleDeleteComment(discussion.id, index)}>Delete Comment</button>
                  </li>
                ))}
              </ul>
              <form onSubmit={(e) => handleCommentSubmit(e, discussion.id)} className="comment-form">
                <input
                  type="text"
                  value={discussion.newComment || ''}
                  onChange={(e) => handleCommentChange(e, discussion.id)}
                  placeholder="Add a comment..."
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
