import Rating from '@mui/material/Rating';

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