import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
export const LikesAndCommends = () => {
    const [hasLike, setHasLike] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
 
    const handleLike = () => setHasLike(hasLike ? false : true)
    const handleSave = () => setIsSaved(isSaved ? false : true)
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', direction: 'row'}}>
            <div style={{gap: '10px', display: 'flex'}}>{hasLike ? <FavoriteIcon onClick={handleLike} /> : <FavoriteBorderIcon onClick={handleLike} />} <AddCommentIcon/> <SendIcon/></div>
            <div style={{marginTop: '20px'}}>{isSaved ? <BookmarkIcon onClick={handleSave}/> : <TurnedInNotIcon onClick={handleSave}/>}</div>
        </div>
        </>
    )
}
