import Rating from '@mui/material/Rating';
import start from "../../../img/icons/star.png"
import start_2 from "../../../img/icons/star-2.png"

interface propsReting {
    props?: number
}

export const MayRating: React.FC<propsReting> = ({props}) => {
    return (
        <div className='reting'>
            <Rating name="size-medium"  defaultValue={props} />
        </div>
    )
};