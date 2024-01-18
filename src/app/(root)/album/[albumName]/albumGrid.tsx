import MainGrid from '@/Component/Grid/MainGrid/mainGrid'
import CloudinaryImage from '../../gallery/CloudinaryImage/cloudinaryImage'

function AlbumGrid({images}:{images:SearchResult[]}) {
    return (
        <MainGrid
        images={images}
        getImages={(imagedata:SearchResult)=>{
            return(
                <CloudinaryImage
                key={imagedata.public_id}
                className='py-2 px-3 '
                imagedata={imagedata}
                height={450}
                width={500}
                alt='Any Image'
                />
            )
        }}
        />
    )
}

export default AlbumGrid