import { Box } from "@mui/material";
import CardComponent from "./Card";
import firstPostImage from "../assets/1st.jpg";
import secondPostImage from "../assets/2nd.jpg";
import thirdPostImage from "../assets/3rd.jpg";

const postsList = [
  {
    avatarImg: firstPostImage,
    postContent:
      "Did you know that the concept of aliens has been around for centuries? From ancient civilizations to modern science fiction, the idea of extraterrestrial life has fascinated humanity.",
    postImage:
      "https://img.freepik.com/fotos-premium/astronautas-cultivando-culturas-em-um-planeta-alienigena-agricultura-futura_526992-1674.jpg",
  },
  {
    avatarImg: secondPostImage,
    postContent:
      "The famous Roswell incident of 1947 is one of the most well-known UFO sightings. It has inspired countless theories and stories about alien encounters.",
    postImage:
      "https://as2.ftcdn.net/v2/jpg/05/62/83/43/1000_F_562834363_fz6OyNfFyYnR4JR8j10tJ71X77Be72Lw.jpg",
  },
  {
    avatarImg: thirdPostImage,
    postContent:
      "NASA's search for extraterrestrial intelligence (SETI) continues to scan the cosmos for signals that could indicate the presence of alien civilizations.",
    postImage:
      "https://as2.ftcdn.net/v2/jpg/05/81/00/39/1000_F_581003993_JeoEsT3HN46VU5xvrFnwmXqBvmFDlcao.jpg",
  },
];

const Feedback = () => {
  return (
    <Box flex={4} p={2}>
      {postsList?.map((post) => (
        <CardComponent
          avatarImg={post.avatarImg}
          postContent={post.postContent}
          postImage={post.postImage}
        />
      ))}
    </Box>
  );
};

export default Feedback;
