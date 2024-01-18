import cloudinary from "cloudinary"
import FavoriteList from "./Favorite-List/favoriteList";

export const revalidate = 300
const FavoriteImage = async () => {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(32)
        .execute()) as { resources: SearchResult[] }
    // console.log(results)
    return (
        <FavoriteList initialResorces={results.resources} />
    )
}

export default FavoriteImage