export type User = {
    id: number;
    name: string;
    last_name?: string;
    email: string;
    password?: string;
    avatar?: {
        image_low_url: string,
        image_medium_url: string,
        image_high_url: string,
    }
}