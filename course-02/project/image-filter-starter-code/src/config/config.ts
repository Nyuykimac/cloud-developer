export const config ={
    "postgress":{

        "username":process.env.POSTGRSS_USERNAME,
        "password":process.env.POSTGRESS_PASSWORD,
        "database":process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_HOST,
        "dialect": "postgress"
    },

    "aws":{
        "aws_region":process.env.AWS_REGION,
        "aws_profile":process.env.AWS_PROFILE,
        "aws_media_bucket":process.env.AWS_MEDIA_BUCKET

    }
}