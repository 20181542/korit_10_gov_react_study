import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Textinput from "../../components/Textinput/Textinput";
import * as s from "./styles";

function PostList() {

    return (
        <div>
            <Header />
            <main>
                <article css={s.topPosting} >

                </article>
                <div css={s.searchContainer}>
                    <Textinput />
                    <Button>검색</Button>
                </div>
                <ul css={s.postListContainer}>
                    <li css={s.card} >
                        <div></div>
                        <footer></footer>
                    </li>
                    <li css={s.card} ></li>
                    <li css={s.card} ></li>
                    <li css={s.card} ></li>
                    <li css={s.card} ></li>
                    <li css={s.card} ></li>
                </ul>
                <div css={s.pagination}>
                    <Button><FiChevronLeft /></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button><FiChevronRight /></Button>
                </div>
            </main>
        </div>
    )
}

export default PostList;