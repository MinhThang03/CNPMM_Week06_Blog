import { Routes, Route } from 'react-router-dom';
import AddPost from '../components/AddPost';
import DetailPost from '../components/DetailPost';
import EditPost from '../components/EditPost';
import ListPost from '../components/ListPost';

const Auth = () => {
    return (
        <Routes>
            <Route path="/" element={<ListPost />} />
            <Route path="/:id" element={<DetailPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/add" element={<AddPost />} />
        </Routes>
    );
};

export default Auth;