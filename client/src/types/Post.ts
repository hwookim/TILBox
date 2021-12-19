import User from '@/types/User';

export default interface Post {
  id: number;
  title: string;
  user: User;
  thumbnail: string;
  description: string;
  likes: number;
  comments: number;
  createdAt: string;
  tags?: string[];
}