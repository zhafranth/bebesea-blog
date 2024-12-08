import dynamic from "next/dynamic";

const CreatePost = dynamic(() => import("./components/CreatePost"), {
  ssr: false,
});

const CreatePostPage = () => <CreatePost />;

export default CreatePostPage;
