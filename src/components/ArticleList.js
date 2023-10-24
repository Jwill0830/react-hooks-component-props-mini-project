import react from "react";
import Article from "./Article";

function ArticleList ( { posts } ) {
    console.log(posts)
    return (
        <main>
            <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes}/>
        </main>
    );
}

export default ArticleList;
